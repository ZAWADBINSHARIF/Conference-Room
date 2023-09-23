// external import
import { useDraggable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"

const DraggableImage = ({ id, src, position, name, role }) => {

    const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
        id: id
    })

    const style = {
        transform: CSS.Translate.toString(transform),
        left: position.x,
        top: position.y,
        cursor: isDragging ? "grabbing" : "grab"
    }

    return (
        <div
            className="DraggableImage"
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        >
            <img src={src} />

            <div className="draggableCharInfo mt-2">
                {`${name}`}
                <br />
                {`${role}`}
            </div>

        </div>
    )
}
export default DraggableImage