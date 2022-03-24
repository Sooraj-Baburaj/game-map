import Style from './map.module.scss';
import MapStages from './MapStages';

const Map = () => {
  return (
    <div className={Style.map}>
        <MapStages />
    </div>
  )
}

export default Map;