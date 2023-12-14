// external import
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import CryptoJS from "crypto-js";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

// internal import
import {
  clearAchetypeDescriptionText,
  setAchetypeDescriptionText,
} from "../Store/Slices/CharacterImgSlice";

const CharacterListItem = ({
  id,
  name,
  role,
  imgFilename,
  folderName,
  description,
}) => {
  const dispatch = useDispatch();
  const characterRef = useRef();
  const [draggable_id] = useState(CryptoJS.lib.WordArray.random(6).toString());

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: draggable_id,
      data: {
        type: "characterFromSlideMenu",
        characterId: id,
        draggable_id,
        position: {
          x: characterRef.current?.offsetLeft,
          y: characterRef.current?.offsetTop,
        },
      },
    });
  console.log();

  const style = {
    transform: CSS.Translate.toString(transform),
    cursor: isDragging ? "grabbing" : "grab",
  };

  function onTouchEndAndOnMouseOver() {
    dispatch(setAchetypeDescriptionText(id));
  }

  const apiPath = import.meta.env.VITE_API;

  return (
    <div
      className="CharacterListItem text-light"
      onTouchEnd={() => onTouchEndAndOnMouseOver()}
      onMouseOver={() => onTouchEndAndOnMouseOver()}
      onMouseOut={() => dispatch(clearAchetypeDescriptionText())}
      style={style}
      ref={setNodeRef}
    >
      <div className="d-flex flex-column" ref={characterRef}>
        <div
          className="
                    imgArea
                    d-flex
                    justify-content-center
                    align-items-center"
          {...attributes}
          {...listeners}
        >
          <img width={75} id={id} src={`/${folderName}/${imgFilename}`} />
        </div>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default CharacterListItem;
