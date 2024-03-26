// external import
import { createSlice } from '@reduxjs/toolkit';


const sessionSlice = createSlice({
    name: "Session_info",
    initialState: {
        data: {},
    },
    reducers: {
        setSessionData(state, action) {
            state.data = action.payload;
        },
        setGamePlayTime(state, action) {
            state.data = { ...state.data, gamePlayTime: action.payload };
        }
    }
});

export const { setSessionData, setGamePlayTime } = sessionSlice.actions;
export default sessionSlice.reducer;