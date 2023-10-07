// external import
import { BiPlus } from "react-icons/bi"
import { useDispatch } from "react-redux"

// internal import
import { addSaveTable } from "../Store/Slices/SaveTableSlice.js"

const TableListItem = ({ id, imgFilename, hideTheTableModal }) => {

  const dispatch = useDispatch()
  const apiPath = import.meta.env.VITE_API

  function handleAddTable() {
    dispatch(addSaveTable(imgFilename))
    hideTheTableModal()
  }

  return (
    <div className="TableListItem">
      <img
        width={250}
        id={id}
        src={`${apiPath}/tables/${imgFilename}`}
        onClick={() => handleAddTable()}
      />
    </div>
  )
}
export default TableListItem