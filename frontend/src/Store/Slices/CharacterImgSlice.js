// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const characterImageSlice = createSlice({
    name: "Character_Img",
    initialState: {
        data: [],
        achetypeDescriptionText: ''
    },
    reducers: {
        setAllCharacters(state, action) {
            state.data = action.payload;
        },
        setAchetypeDescriptionText(state, action) {
            const foundItem = state.data.find(item => item.id === action.payload);
            if (!foundItem || !foundItem?.description) return;
            state.achetypeDescriptionText = foundItem.description;
        },
        clearAchetypeDescriptionText(state) {
            state.achetypeDescriptionText = '';
        },
        removeCharacter(state, action) {
            const filterCharacters = state.data.filter(item => item.id != action.payload);
            state.data = filterCharacters;
        }
    }
});


export const { setAllCharacters, setAchetypeDescriptionText, clearAchetypeDescriptionText, removeCharacter } = characterImageSlice.actions;
export default characterImageSlice.reducer;

export function fetchAllCharacters() {
    return async function fetchAllCharactersThunk(dispatch, getState) {

        try {
            const response = await axios.get('/characters');
            dispatch(setAllCharacters(response.data));
        } catch (error) {
            console.log(error);
        }
    };
}