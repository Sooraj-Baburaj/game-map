import { createSlice } from '@reduxjs/toolkit';

const initialState = [
        [{
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 0,
            first_module_element: false,
            Secret_Key: false,
            level: '01',
        },  {
            cue_name: "Robots",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 0,
            first_module_element: false,
            Secret_Key: false,
            level: '02'
        },  {
            cue_name: "Something",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 0,
            first_module_element: false,
            Secret_Key: false,
            level: '03'
        },  {
            cue_name: "Logical",
            is_Checkpoint: true,
            is_Completed: false,
            module_number: 0,
            first_module_element: false,
            Secret_Key: false,
            level: '04'
        },  {
            cue_name: "Happened",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 0,
            first_module_element: false,
            Secret_Key: false,
            level: '05'
        },  {
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 1,
            first_module_element: true,
            Secret_Key: false,
            level: '06'
        }],[  {
            cue_name: "Robots",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 1,
            first_module_element: false,
            Secret_Key: false,
            level: '07'
        },  {
            cue_name: "Something",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 1,
            first_module_element: false,
            Secret_Key: true,
            level: '08'
        },  {
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 1,
            first_module_element: false,
            Secret_Key: false,
            level: '09'
        },  {
            cue_name: "Happened",
            is_Checkpoint: false,
            is_Completed: false,
            module_number: 1,
            first_module_element: false,
            Secret_Key: false,
            level: '10'
        }]
]

export const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
        completeStage: (state, action) => {
            if(action.payload.cueIndex === 0) {
                state[action.payload.moduleIndex][action.payload.cueIndex].is_Completed = true
            } else {
                if(state[action.payload.moduleIndex][action.payload.cueIndex-1].is_Completed) {
                    state[action.payload.moduleIndex][action.payload.cueIndex].is_Completed = true
                } else {
                    window.alert('Complete Previos Levels!')
                }
            }
        },
    }
});

export const { completeStage } = moduleSlice.actions;

export default moduleSlice.reducer;