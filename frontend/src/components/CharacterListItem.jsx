// external import 
import { useState } from "react";
import CardInfo from "./CardInfo";
import { BiPlus } from "react-icons/bi"
import { useDispatch } from "react-redux";
import CryptoJS from 'crypto-js';

// internal import
import { addDraggableImg } from "../Store/Slices/DraggableImgSlice";

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

  const apiPath = import.meta.env.VITE_API

  return (
    <div className="CharacterListItem">
      <CardInfo
        show={show}
        handleClose={handleClose}
        handlleAddToPlayGround={handlleAddToPlayGround}
      />
      <div className="d-flex justify-content-center align-item-center">

        <img
          width={90}
          id={id}
          src={`${apiPath}/${folderName}/${imgFilename}`} />
        <BiPlus
          className="addButton"
          size={32}
          color={"white"}
          onClick={() => handleShow()}
        />
      </div>
    </div>
  );
};

export default CharacterListItem;
