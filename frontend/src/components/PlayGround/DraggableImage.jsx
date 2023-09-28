// external import
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { MdCancel } from "react-icons/md"
import { useDispatch } from "react-redux"

// internal import
import { removeDraggableImg } from "../../Store/Slices/DraggableImgSlice"

const DraggableImage = ({ id, src, x, y, name, role, folder_name, draggable_id }) => {


    const dispatch = useDispatch()
    const apiPath = import.meta.env.VITE_API

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: draggable_id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        left: x,
        top: y,
        cursor: isDragging ? "grabbing" : "grab",
        position: 'absolute'
    }

    function handleRemoveImg(id) {
        dispatch(removeDraggableImg(id))
    }

    return (
        <div
            className="DraggableImage"
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <div className="img_container">
                <div className="icons">
                    <MdCancel
                        className="removeImgBtn"
                        onDoubleClick={() => handleRemoveImg(draggable_id)}
                    />
                </div>
                <img src={`${apiPath}/${folder_name}/${src}`} />
            </div>

            <div className="draggableCharInfo mt-2">
                {`${name}`}
                <br />
                {`${role}`}
            </div>

        </div>
    )
}
export default DraggableImage