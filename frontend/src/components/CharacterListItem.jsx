// external import 
import { useState } from "react";
import CardInfo from "./Modals/CardInfo";
import { BiPlus } from "react-icons/bi"
import { useDispatch } from "react-redux";
import CryptoJS from 'crypto-js';

// internal import
import { addDraggableImg } from "../Store/Slices/DraggableImgSlice";
import { clearAchetypeDescriptionText, setAchetypeDescriptionText } from "../Store/Slices/CharacterImgSlice";

const CharacterListItem = ({ id, name, imgFilename, folderName }) => {

  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const [draggable_id, setDraggable_id] = useState(CryptoJS.lib.WordArray.random(6).toString())

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handlleAddToPlayGround = (name, role) => {
    if (name == '', role == '') return

    setDraggable_id(CryptoJS.lib.WordArray.random(6).toString())

    const imgInfo = {
      id: id,
      draggable_id: draggable_id,
      name: name,
      role: role,
      src: imgFilename,
      position_x: 32,
      position_y: 32,
      folder_name: folderName
    }

    dispatch(addDraggableImg(imgInfo))

    handleClose()
  }

  function onTouchEndAndOnMouseOver() {
    dispatch(setAchetypeDescriptionText(id))
  }


  const apiPath = import.meta.env.VITE_API

  return (
    <div
      className="CharacterListItem text-light"
      onTouchEnd={() => onTouchEndAndOnMouseOver()}
      onMouseOver={() => onTouchEndAndOnMouseOver()}
      onMouseOut={() => dispatch(clearAchetypeDescriptionText())}
    >
      <CardInfo
        show={show}
        handleClose={handleClose}
        handlleAddToPlayGround={handlleAddToPlayGround}
      />

      <div className="d-flex flex-column">

        <div className="
        imgArea
        d-flex
        justify-content-center
        align-items-center">
          <img
            width={75}
            id={id}
            src={`${apiPath}/${folderName}/${imgFilename}`}
          />

          <BiPlus
            className="addButton"
            size={32}
            color={"white"}
            onClick={() => handleShow()}
          />
        </div>
        <p className="text-center">{name}</p>
      </div>
    </div>
  );
};

export default CharacterListItem;
