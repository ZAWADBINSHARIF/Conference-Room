// external import 
import { configureStore } from "@reduxjs/toolkit";

// internal import
import SessionSlice from "./Slices/SessionSlice.js";
import DraggableImgSlice from "./Slices/DraggableImgSlice.js";
import CharacterImgSlice from "./Slices/CharacterImgSlice.js";
import TableImgSlice from "./Slices/TableImgSlice.js";
import RemovedDraggableImgSlice from "./Slices/RemovedDraggableImgSlice.js";
import PeanutGalleryImgSlice from "./Slices/PeanutGalleryImgSlice.js";
import RemovableAreaSlice from "./Slices/RemovableAreaSlice.js";

const store = configureStore({
    reducer: {
        session_info: SessionSlice,
        draggable_img: DraggableImgSlice,
        character_img: CharacterImgSlice,
        table_img: TableImgSlice,
        removed_draggable_img: RemovedDraggableImgSlice,
        peanut_gallery_img: PeanutGalleryImgSlice,
        removable_area: RemovableAreaSlice
    }
});

export default store;