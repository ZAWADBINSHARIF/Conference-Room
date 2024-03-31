// external import
import { createSlice } from "@reduxjs/toolkit";

const peanutGalleryImgSlice = createSlice({
    name: 'Peanut_Gallery',
    initialState: [],
    reducers: {
        setCharacterToPeanutGallery(state, action) {
            state.push(action.payload);
        },
        removeCharacterToPeanutGallery(state, action) {
            const newData = state.filter(item => item.draggable_id !== action.payload);

            return state = [...newData];
        }
    }
});

export const { setCharacterToPeanutGallery, removeCharacterToPeanutGallery } = peanutGalleryImgSlice.actions;
export default peanutGalleryImgSlice.reducer;
