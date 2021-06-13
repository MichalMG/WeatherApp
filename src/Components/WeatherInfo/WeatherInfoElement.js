export default function WeatherInfoElement({ image, title, result }) {

  return (
    <div className="col-6 position-relative" style={{ height: '100px', backgroundColor: 'rgba(0,0,0,.4)' }}>
      <div className="position-absolute d-flex flex-column justify-content-center align-items-end px-4 ps-0" style={{ width: '100%', height: '100%', top: 0, left: 0, backdropFilter: 'blur(3.5px)' }}>
        {image ? (<div className="position-absolute" style={{ background: `url(${image})`, backgroundPosition: '10%', backgroundRepeat: 'no-repeat', top: 0, left: 0, width: '100%', height: '100%', opacity: .7 }}></div>) : null}
        <p className="mb-0 fw-bold" style={{ zIndex: 4 }}>{result}</p>
        <p className="mb-0 text-white " style={{ zIndex: 4, textShadow: '0 0 10px black' }}>{title}</p>
      </div>
    </div>
  )
}