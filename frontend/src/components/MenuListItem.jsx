// external import 
import { useState } from "react";
import CardInfo from "./CardInfo";

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
      <span className="addButton px-3" onClick={()=> handleShow()}>+</span>
    </div>
  );
};

export default MenuListItem;
