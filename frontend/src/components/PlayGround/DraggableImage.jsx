// external import
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";


const DraggableImage = ({
    id,
    title,
    src,
    x,
    y,
    name,
    role,
    folder_name,
    draggable_id,
    description }) => {

    const apiPath = import.meta.env.VITE_API;

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging
    } = useDraggable({
        id: draggable_id,
        data: {
            type: 'PlayGroundCharacter',
            draggable_id
        }
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        left: x,
        top: y,
        cursor: isDragging ? "grabbing" : "grab",
        position: 'absolute'
    };


    return (
        <div
            className="DraggableImage text-center"
            style={style}
            ref={setNodeRef}
        >

            {/* // ! Do not remove this div. If you do, any click event will not work*/}
            <div
                {...attributes}
                {...listeners}
            >
                <img
                    src={`${folder_name}/${src}`}
                    style={{ width: "75px", borderRadius: "5px" }}
                /> {/* // ! it will be removed when hosting */}

                <div className="draggableCharInfo mt-2 text-center"
                    style={{
                        textAlign: 'center',
                        color: "#ffffff",
                        lineHeight: "1rem",
                    }}
                >
                    {`${title}`}
                    <br />
                    {`${role}`}
                </div>
            </div>
        </div>
    );
};
export default DraggableImage;