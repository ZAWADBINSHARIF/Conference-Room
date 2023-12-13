// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const tableImgSlice = createSlice({
    name: 'Table_Img',
    initialState: {
        data: []
    },
    reducers: {
        setAllTables(state, action) {
            state.data = action.payload
        }
    }
})

export const { setAllTables } = tableImgSlice.actions
export default tableImgSlice.reducer

export function fetchAllTables() {
    return async function fetchAllTablesThunk(dispatch, getState) {
        
        try {
            const response = await axios.get('/tables')
            dispatch(setAllTables(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}