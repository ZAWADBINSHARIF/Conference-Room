// external import
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const draggableImgSlice = createSlice({
    name: "Draggable_Img",
    initialState: [],
    reducers: {
        addDraggableImg(state, action) {
            state.push(action.payload)
        },
        setDraggableImgPosition(state, action) {
            const found = state.find(item => item.id === action.payload.id)

            if (!found) return

            found.position_x += action.payload.new_x
            found.position_y += action.payload.new_y

            state = [...state, found]
        },
        removeDraggableImg(state, action) {
            const newData = state.filter(item => item.id !== action.payload)

            return state = [...newData]
        },
        setDraggableImg(state, action) {
            return state = action.payload
        },
        removeAllDraggableImg(state, action) {
            return state = action.payload
        }
    }
})

export const {
    removeDraggableImg,
    setDraggableImgPosition,
    addDraggableImg,
    removeAllDraggableImg,
    setDraggableImg
} = draggableImgSlice.actions
export default draggableImgSlice.reducer

export function fetchSaveHistoryThunk() {
    return async function (dispatch, getState) {

        try {
            const response = await axios.get('/save_history')
            console.log(response.data)
            dispatch(setDraggableImg(response.data))
        } catch (error) {
            console.log(error)
        }
    }
}

export function saveHistoryThunk() {
    return async function (dispatch, getState) {

        try {
            const data = getState().draggable_img
            console.log(data)
            await axios.post('/save_history', {
                body: data
            })
        } catch (error) {
            console.log(error)
        }
    }
}