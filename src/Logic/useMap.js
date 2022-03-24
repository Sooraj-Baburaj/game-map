// import store from "../store";
// import { useState, useEffect } from "react";

// const useMap = () => {
//   const [cues, setCues] = useState([])
//   const [breaks, setBreaks] = useState([])
//   const [modulesLength, setModulesLength] = useState([])

//   useEffect(() => {
//       store.map((module) => {
//           setCues([...cues, ...module])
//           setModulesLength([...modulesLength, module.length])
//       })
//       cues.map((cue,i) => {
//           if(cue.is_Checkpoint) {
//               setBreaks([...breaks, i])
//           } 
//           if(cue.Secret_Key) {
//               setBreaks([...breaks, i])
//           }
//           if(cue.first_module_element) {
//               setBreaks([...breaks, i-1])
 
//             }
//       })
//   }, [])

//   return {
//       breaks,
//       modulesLength,
//       setBreaks
//   }
// }

// export default useMap;