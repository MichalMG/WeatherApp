import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import img1 from '../src/assets/images/1.jpg';
import WeatherApp from './Components/WeatherApp/WeatherApp';

function App() {

  return (
    <>

      <div className="d-flex align-items-center justify-content-center position-relative" style={{ backgroundImage: `url(${img1})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', minHeight: '100vh' }}>
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
