import { useState } from "react"
import WeatherInfo from "../WeatherInfo/WeatherInfo";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = 'https://api.openweathermap.org/data/2.5/'

export default function WeatherApp() {


  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');
  const [weatherContainer, setWeatherContainer] = useState(false);
  const [weatherInfo, setWeatherInfo] = useState({});

  const cityHandler = (event) => {
    const value = event.target.value;
    setCity(value);
  }

  const formHandler = (event) => {
    event.preventDefault();
    fetchWeather();
  }

  function fetchWeather() {
    fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric`)
      .then(response => {
        if (response.status === 200) {
          setMessage('');
          setWeatherContainer(true);
          return response;
        } else if (response.status === 404) {
          setWeatherContainer(false);
          setMessage(`Nie znaleziono miejscowości: ${city}`)
        } else if (response.status === 400) {
          setMessage("Wpisz miasto");
          setWeatherContainer(false);
        }
      })
      .then(response => response.json())
      .then(data => showWeather(data))
      .catch(err => console.log(err));
  }

  function unixTimeHandler(time) {
    const newTime = new Date(time * 1000);
    const hours = newTime.getHours();
    const minutes = newTime.getMinutes();

    return `${hours} : ${minutes < 10 ? `0${minutes}` : minutes}`;
  }

  function showWeather(data) {
    const { name, main, wind, clouds, sys } = data;
    const sunset = unixTimeHandler(sys.sunset);
    const sunrise = unixTimeHandler(sys.sunrise);
    setWeatherInfo({
      sunset,
      sunrise,
      name,
      country: sys.country,
      minTemp: main.temp_min,
      maxTemp: main.temp_max,
      fellsTemp: main.feels_like,
      wind: wind.speed,
      clouds: clouds.all,
      pressure: main.pressure
    })
  }

  return (
    <div className="container" >
      <div className="row justify-content-center ">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 p-4" style={{ backgroundColor: 'rgba(255,255,255,.25)' }}>
          <form onSubmit={formHandler} className="d-flex">
            <input className="form-control" type="text" placeholder="wpisz miasto..." value={city} onChange={cityHandler} />
            <button className="btn btn-primary ms-3" type="submit">Wyszukaj</button>
          </form>
          {message
            ? (<div className="alert alert-danger mt-4">
              <p className="p-0 m-0 text-center">{message}</p>
            </div>)
            : null}
          {weatherContainer
            ? (<WeatherInfo {...weatherInfo} />)
            : null}
        </div>
      </div>
    </div>
  )
}