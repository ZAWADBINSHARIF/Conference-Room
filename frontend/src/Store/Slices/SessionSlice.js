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
        setStopGameTime(state, action) {
            state.data = { ...state.data, stopGameTime: action.payload };
        }
    }
});

export const { setSessionData, setStopGameTime } = sessionSlice.actions;
export default sessionSlice.reducer;