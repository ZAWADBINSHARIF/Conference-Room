// external import
import { createSlice } from "@reduxjs/toolkit";

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
            state = action.payload
        },
        removeTable(state, action) {
            return state = action.payload
        }
    }
})

export const { setSaveTable, addSaveTable, removeTable } = saveTableSlice.actions
export default saveTableSlice.reducer

