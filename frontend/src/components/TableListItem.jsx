// external import
import { BiPlus } from "react-icons/bi"
import { useDispatch } from "react-redux"

// internal import
import { addSaveTable } from "../Store/Slices/SaveTableSlice.js"

const TableListItem = ({ id, imgFilename, hideTheTableModal }) => {

  const dispatch = useDispatch()
<<<<<<< HEAD
  const apiPath = import.meta.env.VITE_API // ! it will be removed when hosting
=======
>>>>>>> 2.0-Production

  function handleAddTable() {
    dispatch(addSaveTable(imgFilename))
    hideTheTableModal()
  }

  return (
    <div className="TableListItem">
      <img
        width={250}
        id={id}
<<<<<<< HEAD
        src={`${apiPath}/tables/${imgFilename}`} // ! it will be removed when hosting
=======
        src={`/tables/${imgFilename}`}
>>>>>>> 2.0-Production
        onClick={() => handleAddTable()}
      />
    </div>
  )
}
export default TableListItem