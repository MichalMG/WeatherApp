import WeatherInfoElement from "./WeatherInfoElement";
import thermHot from '../../assets/therm.svg';
import thermCold from '../../assets/therm2.svg';
import cloudIco from '../../assets/cloud.svg';
import windIco from '../../assets/wind.svg';
import sunIco from '../../assets/sun.svg';

export default function WeatherInfo({ sunset, sunrise, name, country, minTemp, maxTemp, wind, clouds, pressure, fellsTemp }) {
  return (
    <div className="row mt-4">

      <div className="col-12">
        <div className="justify-content-center d-flex">
          <h4 className="position-relative fw-bold">Temperatura dla: {name} <span className="badge position-absolute bg-warning" style={{ top: "-50%", right: "-15%", fontSize: '.8rem' }}>{country}</span></h4>
        </div>
      </div>

      <div className="col-12 text-white  justify-content-center">

        <table className="table text-light" style={{ backgroundColor: 'rgba(0,0,0,.45)' }}>
          <tbody >
            <WeatherInfoElement image={thermCold} title="Minimalna temperatura:" result={minTemp} symbol="&#8451;" />
            <WeatherInfoElement image={thermHot} title="Maksymalna temperatura:" result={maxTemp} symbol="&#8451;" />
            <WeatherInfoElement title="Odczuwalna temperatura:" result={fellsTemp} symbol="&#8451;" />
            <WeatherInfoElement title="Ciśnienie:" result={pressure} symbol="hPa" />
            <WeatherInfoElement image={windIco} title="Prędkość wiatru:" result={wind} symbol="m/s" />
            <WeatherInfoElement image={cloudIco} title={clouds === 0 ? 'Bezchmurne niebo' : 'Zachmurzenie'} result={clouds === 0 ? '' : clouds} symbol={clouds === 0 ? '' : '%'} />
            <WeatherInfoElement image={sunIco} title="Wschód słońca: " result={sunrise} symbol="h" />
            <WeatherInfoElement image={sunIco} title="zachód słońca: " result={sunset} symbol="h" last="last" />
          </tbody>
        </table>
      </div>
    </div>
  )
}