// external import
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const characterImageSlice = createSlice({
    name: "Character_Img",
    initialState: {
        data: []
    },
    reducers: {
        setAllCharacters(state, action) {
            state.data = action.payload
        }
    }
})


export const { setAllCharacters } = characterImageSlice.actions
export default characterImageSlice.reducer

export function fetchAllCharacters() {
    return async function fetchAllCharactersThunk(dispatch, getState) {

        try {
            const response = await axios.get('/characters')
            dispatch(setAllCharacters(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}