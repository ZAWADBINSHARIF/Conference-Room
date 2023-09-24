// external import 
import { useState } from "react";
import CardInfo from "./CardInfo";
import { BiPlus } from "react-icons/bi"

const MenuListItem = ({ imgPath }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="MenuListItem d-flex justify-content-center align-item-center">
      <CardInfo
        show={show}
        handleClose={handleClose}
      />
      <img width={90} src={imgPath} />
      <BiPlus
        className="addButton"
        size={32}
        color={"white"}
        onClick={() => handleShow()}
      />
    </div>
  );
};

export default MenuListItem;
