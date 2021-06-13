import WeatherInfoElement from "./WeatherInfoElement";
import thermHot from '../../assets/therm.svg';
import thermCold from '../../assets/therm2.svg';
import cloudIco from '../../assets/cloud.svg';
import windIco from '../../assets/wind.svg';
import sunIco from '../../assets/sun.svg';

export default function WeatherInfo({ sunset, sunrise, name, country, minTemp, maxTemp, wind, clouds, pressure, fellsTemp }) {
  return (
    <div className="row mt-4">
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-12 justify-content-center d-flex">
              <h4 className="position-relative">Temperatura dla: {name} <span className="badge position-absolute bg-warning" style={{ top: "-50%", right: "-15%", fontSize: '.8rem' }}>{country}</span></h4>
            </div>
          </div>
          <div className="row text-white  justify-content-center">
            <WeatherInfoElement title="min. temp." result={`${minTemp} *C`} image={thermCold} />
            <WeatherInfoElement title="max. temp." result={`${maxTemp} *C`} image={thermHot} />
            <WeatherInfoElement title="odczuwalna temp." result={`${fellsTemp} *C`} />
            <WeatherInfoElement title="ciśnienie" result={`${pressure} hPa`} />
            <WeatherInfoElement title="prędkość wiatru" result={`${wind} m/s`} image={windIco} />
            <WeatherInfoElement title={`${clouds === 0 ? '' : "zachmurzenie"}`} result={`${clouds === 0 ? "bechmurne niebo" : `${clouds} %`}`} image={clouds === 0 ? null : cloudIco} />
            <WeatherInfoElement title="wschód słońca" result={sunrise} image={sunIco} />
            <WeatherInfoElement title="zchód słońca" result={sunset} image={sunIco} />
          </div>
        </div>
      </div>
    </div>

    // <div className="row d-flex align-items-center justify-content-center mt-4">
    //   <div className="col-12 text-center">
    //     <h3 class="position-relative">Pogoda dla: {name}, <span class="fs-6 badge bg-success position-relative" style={{ top: '-15px', left: 0 }}>{country}</span></h3>
    //     <div className="row d-flex align-items-center justify-content-center" style={{ height: '100px' }}>
    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{minTemp} &#x2103;</p>
    //           <span>min. temp.</span>
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{maxTemp} &#x2103;</p>
    //           <span>max. temp.</span>
    //         </div>
    //       </div>

    //     </div>

    //     <div className="row d-flex align-items-center justify-content-center" style={{ height: '100px' }}>

    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{wind} m/s</p>
    //           <span>prędkość wiatru</span>
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           {clouds === 0 ? <p className="mb-0">Bezchmurne niebo</p> : (<> <p className="mb-0">{clouds} %</p>
    //             <span>zachmurzenie</span> </>)}
    //         </div>
    //       </div>

    //     </div>


    //     <div className="row d-flex align-items-center justify-content-center" style={{ height: '100px' }}>

    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{sunrise}</p>
    //           <span>wschód słońca</span>
    //         </div>
    //       </div>
    //       <div className="col-6">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{sunset}</p>
    //           <span>zachód słońca</span>
    //         </div>
    //       </div>

    //     </div>

    //     <div className="row d-flex align-items-center justify-content-center" style={{ height: '100px' }}>

    //       <div className="col-12">
    //         <div className="temp d-flex flex-column align-items-center justify-content-center">
    //           <p className="mb-0">{pressure} hPa</p>
    //           <span>ciśnienie</span>
    //         </div>
    //       </div>

    //     </div>


    //   </div>
    // </div>
  )
}