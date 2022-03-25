import Style from './App.module.scss';
import Map from './Map';

const App = () => {
  return (
    <div className={Style.App}>
      <h1 style={{fontSize: '50px'}}>Mapsy</h1>
      <Map />
    </div>
  );
}

export default App;
