// external import
import { createSlice } from "@reduxjs/toolkit";


const commonPropertySlice = createSlice({
    name: 'Common_Property',
    initialState: {
        openSetDraggableImgDescriptionModal: false,
        changingDescriptionDraggableImgId: ''
    },
    reducers: {
        setOpenSetDraggableImgDescriptionModal(state, action) {
            state.openSetDraggableImgDescriptionModal = action.payload;
        },
        setChangingDescriptionDraggableImgId(state, action) {
            state.changingDescriptionDraggableImgId = action.payload.draggable_id;
        }
    }
});


export const {
    setOpenSetDraggableImgDescriptionModal,
    setChangingDescriptionDraggableImgId
} = commonPropertySlice.actions;
export default commonPropertySlice.reducer;