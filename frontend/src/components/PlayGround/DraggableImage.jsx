// external import
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// internal import
import { setDraggableImgTitle } from "../../Store/Slices/DraggableImgSlice";


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
    description
}) => {

    const [titleEditable, setTitleEditable] = useState(false);
    const [characterTitle, setCharacterTitle] = useState(title);
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
        },
        disabled: titleEditable
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        left: x,
        top: y,
        cursor: isDragging ? "grabbing" : "grab",
        position: 'absolute'
    };

    const saveCharacterTitle = () => {
        dispatch(setDraggableImgTitle({ id: draggable_id, title: characterTitle }));
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        if (characterTitle) {
            setTitleEditable(!titleEditable);
            saveCharacterTitle();
        }
    };

    const handleChangeCharacterTitle = (e) => {
        if (e.key === 'Enter' && characterTitle) {
            setTitleEditable(false);
            saveCharacterTitle();
        }
    };


    return (
        <div
            className="DraggableImage text-center"
            style={style}
            ref={setNodeRef}
        >

            <div
                {...attributes}
                {...listeners}
                onContextMenu={handleRightClick}
            >
                <img
                    src={`${folder_name}/${src}`}
                    style={{ width: "75px", borderRadius: "5px" }}
                />

                <div className="draggableCharInfo mt-2 text-center"
                    style={{
                        textAlign: 'center',
                        color: "#ffffff",
                        lineHeight: "1rem",
                    }}
                >
                    {titleEditable ?
                        <>
                            <input type="text" value={characterTitle}
                                className="titleEditInput p-0 m-0 text-center w-auto"
                                onChange={(e) => setCharacterTitle(e.target.value)}
                                onKeyUp={handleChangeCharacterTitle}
                            />
                            {/* <br /> */}
                        </>
                        :
                        <p className="p-0 m-0">{`${characterTitle}`}</p>
                    }

                    {`${role}`}
                </div>
            </div>
        </div>
    );
};
export default DraggableImage;