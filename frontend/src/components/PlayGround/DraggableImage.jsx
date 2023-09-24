// external import
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { MdCancel } from "react-icons/md"
import { useDispatch } from "react-redux"

// internal import
import { removeDraggableImg } from "../../Store/Slices/DraggableImgSlice"

const DraggableImage = ({ id, src, position, name, role }) => {

    const dispatch = useDispatch()

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab"
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
                        onDoubleClick={() => handleRemoveImg(id)}
                    />
                </div>
                <img src={src} />
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