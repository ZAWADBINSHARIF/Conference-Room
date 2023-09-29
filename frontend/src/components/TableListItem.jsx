// external import
import { BiPlus } from "react-icons/bi"
import { useDispatch } from "react-redux"

// internal import
import { addSaveTable } from "../Store/Slices/SaveTableSlice.js"

const TableListItem = ({ id, imgFilename }) => {

  const dispatch = useDispatch()

  function handleAddTable() {
    dispatch(addSaveTable(imgFilename))
  }

  return (
    <div className="TableListItem">
      <div className="d-flex justify-content-center align-item-center">

        <img
          width={90}
          id={id}
          src={`/tables/${imgFilename}`} />
        <BiPlus
          className="addButton"
          size={32}
          color={"white"}
          onClick={() => handleAddTable()}
        />
      </div>
    </div>
  )
}
export default TableListItem