// external import
import { createSlice } from "@reduxjs/toolkit";


const removableAreaSlice = createSlice({
    name: 'Removable_Area',
    initialState: {
        visibility: false,
        openRemovableModal: false,
        removingCharacterId: null
    },
    reducers: {
        setRemovableAreaVisibility(state, action) {
            state.visibility = action.payload;
        },
        setOpenRemovableModal(state, action) {
            state.openRemovableModal = action.payload;
        },
        setRemovingCharacterId(state, action) {
            state.removingCharacterId = action.payload;
        }
    }
});


export const { setRemovableAreaVisibility, setOpenRemovableModal, setRemovingCharacterId } = removableAreaSlice.actions;
export default removableAreaSlice.reducer;