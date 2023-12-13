// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const saveTableSlice = createSlice({
    name: "Save_Table",
    initialState: [],
    reducers: {
        addSaveTable(state, action) {
            return state = [{
                filename: action.payload
            }]
        },
        setSaveTable(state, action) {
            return state = action.payload
        },
        removeTable(state, action) {
            return state = action.payload
        }
    }
})

export const { setSaveTable, addSaveTable, removeTable } = saveTableSlice.actions
export default saveTableSlice.reducer

export function fetchSaveTableThunk() {
    return async function (dispatch, getState) {
        
        try {
            const response = await axios.get('/save_table')
            dispatch(setSaveTable(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export function saveTableThunk(filename) {
    return async function (dispatch, getState) {
        try {
            await axios.post('/save_table', {
                body:filename
            })
        } catch (error) {
            console.log(error)
        }
    }
}