// external import
import { createSlice } from '@reduxjs/toolkit';


const screenShotImageSlice = createSlice({
    name: "Screen_Img",
    initialState: {
        src:""
    },
    reducers: {
        setScreenShotImgSrc(state, action) {
            state.src = action.payload
        }
    }
});

export const { setScreenShotImgSrc } = screenShotImageSlice.actions;
export default screenShotImageSlice.reducer