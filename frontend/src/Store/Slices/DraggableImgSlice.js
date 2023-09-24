// external import
import { createSlice } from '@reduxjs/toolkit'


const initialState = [
    {
        id: 1,
        name: "Fox",
        role: "Fireman1",
        src: "./activities-001.png",
        position: {
            x: 32,
            y: 32
        }
    },
    {
        id: 2,
        name: "Fox",
        role: "Fireman2",
        src: "./activities-001.png",
        position: {
            x: 128,
            y: 32
        }
    },
    {
        id: 3,
        name: "Fox",
        role: "Fireman3",
        src: "./activities-001.png",
        position: {
            x: 240,
            y: 32
        }
    },
]

const draggableImgSlice = createSlice({
    name: "Draggable_Img",
    initialState,
    reducers: {
        addDraggableImg(state, action) {
            state.push(action.payload)
        },
        setDraggableImgPosition(state, action) {
            const found = state.find(item => item.id === action.payload.id)

            if (!found) return

            found.position.x += action.payload.new_x
            found.position.y += action.payload.new_y

            state = [...state, found]
        },
        removeDraggableImg(state, action) {
            const newData = state.filter(item => item.id !== action.payload)

            return state = [...newData]
        }
    }
})

export const { removeDraggableImg, setDraggableImgPosition, addDraggableImg } = draggableImgSlice.actions
export default draggableImgSlice.reducer