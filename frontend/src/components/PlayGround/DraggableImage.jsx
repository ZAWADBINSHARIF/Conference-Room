// external import
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// internal import
import { setDraggableImgRole, setDraggableImgTitle } from "../../Store/Slices/DraggableImgSlice";


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
    const [characterRole, setCharacterRole] = useState(role);
    const dispatch = useDispatch();

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

    const saveCharacterTitleAndRole = () => {
        dispatch(setDraggableImgTitle({ id: draggable_id, title: characterTitle }));
        dispatch(setDraggableImgRole({ id: draggable_id, role: characterRole }));
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        if (characterTitle && characterTitle === title && characterRole === role) {
            setTitleEditable(!titleEditable);
        } else if (characterTitle && (characterTitle !== title || characterRole !== role)) {
            setTitleEditable(!titleEditable);
            saveCharacterTitleAndRole();
        }
    };

    const handleChangeCharacterTitle = (e) => {
        if (e.key === 'Enter' && characterTitle) {
            setTitleEditable(false);
            saveCharacterTitleAndRole();
        }
    };

    const handleChangeCharacterRole = (e) => {
        if (e.key === 'Enter' && characterTitle) {
            setTitleEditable(false);
            saveCharacterTitleAndRole();
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
                    src={`${apiPath}/${folder_name}/${src}`}
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
                            <input type="text" value={characterRole}
                                className="titleEditInput p-0 m-0 text-center w-auto"
                                onChange={(e) => setCharacterRole(e.target.value)}
                                onKeyUp={handleChangeCharacterRole}
                            />
                        </>
                        :
                        <>
                            <p className="p-0 m-0">{`${characterTitle}`}</p>
                            {`${role}`}
                        </>
                    }

                </div>
            </div>
        </div>
    );
};
export default DraggableImage;