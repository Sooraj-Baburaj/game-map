import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    [
        {
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: true,
            Secret_Key: false,
            level: '01',
        },  {
            cue_name: "Robots",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '02'
        },  {
            cue_name: "Something",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '03'
        },  {
            cue_name: "Logical",
            is_Checkpoint: true,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '04'
        },  {
            cue_name: "Happened",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '05'
        },
    ], [
        {
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: true,
            Secret_Key: false,
            level: '06'
        },  {
            cue_name: "Robots",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '07'
        },  {
            cue_name: "Something",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: true,
            level: '08'
        },  {
            cue_name: "Logical",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '09'
        },  {
            cue_name: "Happened",
            is_Checkpoint: false,
            is_Completed: false,
            first_module_element: false,
            Secret_Key: false,
            level: '10'
        },
    ],

]

export const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
        completeStage: (state, action) => {
            state[action.payload].is_Completed = true
        },
    }
});

export const { completeStage } = moduleSlice.actions;

export default moduleSlice.reducer;