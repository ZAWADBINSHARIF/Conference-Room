// external import
import { createSlice } from "@reduxjs/toolkit";


const removableAreaSlice = createSlice({
    name: 'Removable_Area',
    initialState: {
        visibility: false
    },
    reducers: {
        setRemovableAreaVisibility(state, action) {
            state.visibility = action.payload;
        }
    }
});


export const { setRemovableAreaVisibility } = removableAreaSlice.actions;
export default removableAreaSlice.reducer;