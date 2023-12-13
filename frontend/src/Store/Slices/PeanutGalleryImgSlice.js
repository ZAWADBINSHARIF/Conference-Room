// external import
import { createSlice } from "@reduxjs/toolkit";

const peanutGalleryImgSlice = createSlice({
    name: 'Peanut_Gallery',
    initialState: [],
    reducers: {
        setCharacterToPeanutGallery(state, action) {
            state.push(action.payload)
        }
    }
})

export const { setCharacterToPeanutGallery } = peanutGalleryImgSlice.actions
export default peanutGalleryImgSlice.reducer
