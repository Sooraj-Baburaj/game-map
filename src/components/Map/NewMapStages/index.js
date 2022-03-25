import Style from '../MapStages/mapstages.module.scss';
import { useSelector } from 'react-redux';
import Stage from '../Stage';
import KickStart from '../KickStart';
import Checkpoint from '../Checkpoint';
import { useState } from 'react';

const NewMapStages = () => {
    const store = useSelector((state) => state.module)
    const [transform, setTransform] = useState(50)
    return (
      <div className={Style.MapStages}>
         {store.map((cue,i) => (
             <div key={i} className={Style.stages}>
             {i === 0 && <KickStart />}
                {cue.Secret_Key && (
                    <div className={Style.Key}>
                      <h1>Key</h1>
                    </div>
                )}
                {(cue.first_module_element ) && (
                    <div  style={{display: cue.module_number === 0 && 'none'}} 
                        className={Style.module}>
                        <h1>{`M${cue.module_number}`}</h1>
                    </div>
                )}
             <Stage index={i} title={cue.cue_name} 
                translateUnit={transform} 
                isCompleted={cue.is_Completed} 
                level={cue?.level} 
                isCheckpoint={cue.is_Checkpoint} />
             {cue.is_Checkpoint && (
                 <Checkpoint isCompleted={cue.is_Completed} index={i} level={cue?.level} />
                 )}
             </div>
         ))}
      </div>
    )
  }
  
  export default NewMapStages;