// external import 
import { useState, useRef } from "react";
import CardInfo from "./Modals/CardInfo";
import { BiPlus } from "react-icons/bi";
import { useDispatch } from "react-redux";
import CryptoJS from 'crypto-js';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from "@dnd-kit/utilities";

// internal import
import { addDraggableImg } from "../Store/Slices/DraggableImgSlice";
import { clearAchetypeDescriptionText, setAchetypeDescriptionText } from "../Store/Slices/CharacterImgSlice";

const CharacterListItem = ({ id, name, role, imgFilename, folderName, description }) => {

    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const characterRef = useRef();
    const [draggable_id, setDraggable_id] = useState(CryptoJS.lib.WordArray.random(6).toString());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        isDragging,
    } = useDraggable({
        id: draggable_id,
        data: {
            type: 'characterFromSlideMenu',
            characterId: id,
            draggable_id,
            position: {
                x: characterRef.current?.offsetLeft,
                y: characterRef.current?.offsetTop
            }
        }
    });

    const style = {
        transform: CSS.Translate.toString(transform),
        cursor: isDragging ? "grabbing" : "grab"
    };
    const handleAddToPlayGround = (name, role) => {
        if (name === '' || role === '') return;

        setDraggable_id(CryptoJS.lib.WordArray.random(6).toString());

        const imgInfo = {
            id: id,
            draggable_id: draggable_id,
            name: name,
            role: role,
            src: imgFilename,
            position_x: 32,
            position_y: 32,
            folder_name: folderName,
            description: description
        };

        dispatch(addDraggableImg(imgInfo));

        handleClose();
    };

    function onTouchEndAndOnMouseOver() {
        dispatch(setAchetypeDescriptionText(id));
    }

    const apiPath = import.meta.env.VITE_API;

    return (
        // <DragOverlay>

        <div
            className="CharacterListItem text-light"
            onTouchEnd={() => onTouchEndAndOnMouseOver()}
            onMouseOver={() => onTouchEndAndOnMouseOver()}
            onMouseOut={() => dispatch(clearAchetypeDescriptionText())}
            style={style}
            ref={setNodeRef}
        >
            {/* <CardInfo
        characterName={name}
        characterRole={role}
        show={show}
        handleClose={handleClose}
        handleAddToPlayGround={handleAddToPlayGround}
      /> */}

            <div className="d-flex flex-column" ref={characterRef}>

                <div className="
                    imgArea
                    d-flex
                    justify-content-center
                    align-items-center"
                    {...attributes} {...listeners}
                >
                    <img
                        width={75}
                        id={id}
                        src={`${apiPath}/${folderName}/${imgFilename}`}
                    />

                    {/* <BiPlus
            className="addButton"
            size={32}
            color={"white"}
            onClick={() => handleShow()}
          /> */}
                </div>
                <p className="text-center">{name}</p>
            </div>
        </div>
        // </DragOverlay>
    );
};

export default CharacterListItem;
