// external import
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";
import { useDispatch } from "react-redux";

// internal import
import { removeDraggableImg } from "../../Store/Slices/DraggableImgSlice.js";
import { getRemovedDraggableImg } from "../../Store/Slices/RemovedDraggableImgSlice.js";
import { setCharacterToPeanutGallery } from "../../Store/Slices/PeanutGalleryImgSlice.js";

const DraggableImage = ({
    id,
    src,
    x,
    y,
    name,
    role,
    folder_name,
    draggable_id,
    description }) => {

    const apiPath = import.meta.env.VITE_API;
    const [showContextMenu, setShowContextMenu] = useState(false);
    const dispatch = useDispatch();
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
    let timer;

    const style = {
        transform: CSS.Translate.toString(transform),
        left: x,
        top: y,
        cursor: isDragging ? "grabbing" : "grab",
        position: 'absolute'
    };

    function handleAddToPeanutGallery() {
        dispatch(setCharacterToPeanutGallery({ id, src, x, y, name, role, folder_name, draggable_id, description }));
        dispatch(removeDraggableImg(draggable_id));
    }

    function handleRemove() {
        dispatch(getRemovedDraggableImg(draggable_id));
        dispatch(removeDraggableImg(draggable_id));
    }

    function ContextMenu() {
        return (
            <div className="ContextMenu">
                <span
                    onClick={() => handleAddToPeanutGallery()}>Peanut Gallery</span>
                <span
                    onClick={() => handleRemove()}
                    className="text-danger">
                    Leave
                </span>
            </div>
        );
    }

    function handleContextMenu(e) {
        e.preventDefault();
        setShowContextMenu(prev => !prev);
    }

    function handleOnTouchStart() {
        timer = setTimeout(handleContextMenu, 500);
    }

    function handleOnTouchEnd() {
        if (timer)
            clearTimeout(timer);
    }

    return (
        <div
            className="DraggableImage text-center"
            onClick={() => setShowContextMenu(false)}
            onTouchStart={() => handleOnTouchStart()}
            onTouchEnd={() => handleOnTouchEnd()}
            style={style}
            ref={setNodeRef}
            onContextMenu={handleContextMenu}
        >
            {showContextMenu && <ContextMenu />}

            {/* // ! Do not remove this div. If you do, any click event will not work*/}
            <div
                {...attributes}
                {...listeners}
            >
                <img
                    src={`${apiPath}/${folder_name}/${src}`}
                    style={{ width: "75px", borderRadius: "5px" }}
                /> {/* // ! it will be removed when hosting */}

                <div className="draggableCharInfo mt-2 text-center"
                    style={{
                        textAlign: 'center',
                        color: "#f9ae01",
                        lineHeight: "1rem"
                    }}
                >
                    {`${name}`}
                    <br />
                    {`${role}`}
                </div>
            </div>
        </div>
    );
};
export default DraggableImage;