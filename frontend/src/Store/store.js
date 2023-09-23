// external import 
import { configureStore } from "@reduxjs/toolkit";

// internal import
import DraggableImgSlice from "./Slices/DraggableImgSlice";

const store = configureStore({
    reducer: {
        draggable_img: DraggableImgSlice
    }
})

export default store