// external import 
import { configureStore } from "@reduxjs/toolkit";

// internal import
import DraggableImgSlice from "./Slices/DraggableImgSlice.js";
import CharacterImgSlice from "./Slices/CharacterImgSlice.js";
import TableImgSlice from "./Slices/TableImgSlice.js";
import SaveTableSlice from "./Slices/SaveTableSlice.js";

const store = configureStore({
    reducer: {
        draggable_img: DraggableImgSlice,
        character_img: CharacterImgSlice,
        table_img: TableImgSlice,
        save_table: SaveTableSlice
    }
})

export default store