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
                {module.map((cue,i) => {
                  let checkpointIndex = store[moduleIndex].findIndex((cue) => cue.is_Checkpoint === true)
                  let moduleLength = store[moduleIndex].length
                  let cueLength = null
                  let translateValue = null
                  let middle = null
                  if (i < checkpointIndex) {
                    cueLength = checkpointIndex
                    if (cueLength % 2 === 0) {
                      middle = [Math.floor((cueLength - 1) / 2), Math.ceil((cueLength - 1) / 2)]
                      if (i < middle[0]) {
                        translateValue = (i + 1) * 80
                      } else if (i === middle[0] || i === middle[1]) {
                        translateValue = middle[1] * 80
                      } else if (i > middle[1]) {
                        translateValue = (middle[1] * 80) - ((i - middle[1]) * 80)
                      }
                    } else {
                      middle = Math.ceil(cueLength/2)
                      if (i < middle) {
                        translateValue = (i + 1) * 80
                      } if (i >= middle) {
                        translateValue = (middle * 80) - (((i + 1) - middle) * 80)
                      }
                    }
                    } else if (i > checkpointIndex) {
                    cueLength = moduleLength - (checkpointIndex + 1)
                    let iAfter = i - (checkpointIndex + 1)
                    if (cueLength % 2 === 0) {
                      middle = [Math.floor((cueLength - 1) / 2), Math.ceil((cueLength - 1) / 2)]
                      if (iAfter < middle[0]) {
                        translateValue = (iAfter + 1) * 80
                      } else if (iAfter === middle[0] || iAfter === middle[1]) {
                        translateValue = middle[1] * 80
                      } else if (iAfter > middle[1]) {
                        translateValue = (middle[1] * 80) - ((iAfter - middle[1]) * 80)
                      }
                    }  else {
                      middle = Math.ceil(cueLength/2)
                      if (iAfter < middle) {
                        translateValue = (iAfter + 1) * 80
                      } if (iAfter >= middle) {
                        translateValue = (middle * 80) - (((iAfter + 1) - middle) * 80)
                      }
                    }
                  }

                  console.log(checkpointIndex, moduleLength, cueLength, translateValue, middle)
                  return (
                    <div style={{display: 'flex'}} key={i}>
                    <Stage index={i} moduleIndex={moduleIndex} title={cue.cue_name} translateValue={translateValue} isCompleted={cue.is_Completed} level={cue?.level} isCheckpoint={cue.is_Checkpoint} />
                    {cue.is_Checkpoint && (
                      <Checkpoint moduleIndex={moduleIndex} index={i} level={cue?.level} />
                    )}
                  </div>
                 )})}
              </>
            ) : (
              <>
                <div className={Style.module}>
                    <h1>{`M${moduleIndex}`}</h1>
                </div>
                {module.map((cue,i) => {
                  let secretKeyIndex = store[moduleIndex].findIndex((cue) => cue.Secret_Key === true)
                  let moduleLength = store[moduleIndex].length
                  let cueLength = null
                  let translateValue = null
                  let middle = null
                  if (i < secretKeyIndex) {
                    cueLength = secretKeyIndex
                    if (cueLength % 2 === 0) {
                      middle = [Math.floor((cueLength - 1) / 2), Math.ceil((cueLength - 1) / 2)]
                      if (i < middle[0]) {
                        translateValue = (i + 1) * 80
                      } else if (i === middle[0] || i === middle[1]) {
                        translateValue = middle[1] * 80
                      } else if (i > middle[1]) {
                        translateValue = (middle[1] * 80) - ((i - middle[1]) * 80)
                      }
                    } else {
                      middle = Math.ceil(cueLength/2)
                      if (i < middle) {
                        translateValue = (i + 1) * 80
                      } if (i >= middle) {
                        translateValue = (middle * 80) - (((i + 1) - middle) * 80)
                      }
                    }
                    } else if (i > secretKeyIndex) {
                    cueLength = moduleLength - (secretKeyIndex + 1)
                    let iAfter = i - (secretKeyIndex + 1)
                    if (cueLength % 2 === 0) {
                      middle = [Math.floor((cueLength - 1) / 2), Math.ceil((cueLength - 1) / 2)]
                      if (iAfter < middle[0]) {
                        translateValue = (iAfter + 1) * 80
                      } else if (iAfter === middle[0] || iAfter === middle[1]) {
                        translateValue = middle[1] * 80
                      } else if (iAfter > middle[1]) {
                        translateValue = (middle[1] * 80) - ((iAfter - middle[1]) * 80)
                      }
                    }  else {
                      middle = Math.ceil(cueLength/2)
                      if (iAfter < middle) {
                        translateValue = (iAfter + 1) * 80
                      } if (iAfter >= middle) {
                        translateValue = (middle * 80) - (((iAfter + 1) - middle) * 80)
                      }
                    }
                  }

                  console.log(secretKeyIndex, moduleLength, cueLength, translateValue, middle)
                 return ( <>
                  {cue.Secret_Key && (
                    <div className={Style.Key}>
                      <h1>Key</h1>
                    </div>
                  )}
                  <div style={{display: 'flex'}} key={i}>
                    <Stage index={i} moduleIndex={moduleIndex} title={cue.cue_name} translateValue={translateValue} level={cue?.level} isCheckpoint={cue.is_Checkpoint} />
                    {cue.is_Checkpoint && (
                      <Checkpoint moduleIndex={moduleIndex} index={i} level={cue?.level} />
                    )}
                  </div>
                  </>)
                })}
              </>
            )}
          </div>
        ))}
    </div>
  )
}

export default MapStages;