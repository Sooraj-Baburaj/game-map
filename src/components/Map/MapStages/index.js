import Style from './mapstages.module.scss';
// import { useEffect, useState } from 'react';
// import useMap from '../../../Logic/useMap';
import { useSelector } from 'react-redux';
import Stage from '../Stage';
import KickStart from '../KickStart';
import Checkpoint from '../Checkpoint';

const MapStages = () => {
  // const [bottomCue, setBottomCue] = useState(0)
  // const [breaksOver, setBreaksOver] = useState(0)
  // const {breaks, setBreaks, modulesLength} = useMap();
  const store = useSelector((state) => state.module)
  
  return (
    <div className={Style.MapStages}>
        {store.map((module, moduleIndex) => (
          <div className={Style.stages} key={moduleIndex}>
            {moduleIndex === 0 ? (
              <>
                <KickStart />
                {module.map((cue,i) => (
                  <div style={{display: 'flex'}} key={i}>
                    <Stage index={i} title={cue.cue_name} translateUnit={0} isCompleted={cue.is_Completed} level={cue?.level} isCheckpoint={cue.is_Checkpoint} />
                    {cue.is_Checkpoint && (
                      <Checkpoint level={cue?.level} />
                    )}
                  </div>
                ))}
              </>
            ) : (
              <>
                <div className={Style.module}>
                    <h1>{`M${moduleIndex}`}</h1>
                </div>
                {module.map((cue,i) => (
                  <>
                  {cue.Secret_Key && (
                    <div className={Style.Key}>
                      <h1>Key</h1>
                    </div>
                  )}
                  <div style={{display: 'flex'}} key={i}>
                    <Stage index={i} title={cue.cue_name} level={cue?.level} isCheckpoint={cue.is_Checkpoint} />
                    {cue.is_Checkpoint && (
                      <Checkpoint level={cue?.level} />
                    )}
                  </div>
                  </>
                ))}
              </>
            )}
          </div>
        ))}
    </div>
  )
}

export default MapStages;