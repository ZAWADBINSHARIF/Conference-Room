// external import
import { createSlice } from "@reduxjs/toolkit"

const removedDraggableImgSlice = createSlice({
    name: 'Remove_Draggable_Img',
    initialState: [],
    reducers: {
        addRemovedDraggableImg(state, action) {
            state.push(action.payload)
        }
    }
})

export const {
    addRemovedDraggableImg
} = removedDraggableImgSlice.actions
export default removedDraggableImgSlice.reducer

export function getRemovedDraggableImg(draggable_id) {

    return function (dispatch, getState) {
        try {
            const draggableImgs = getState().draggable_img
            const found = draggableImgs.find(
                item => item.draggable_id === draggable_id
            )

            dispatch(addRemovedDraggableImg(found))

        } catch (error) {
            console.log(error)
        }
    }
}