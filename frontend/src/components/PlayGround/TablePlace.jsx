import { useSelector } from "react-redux"


const TablePlace = () => {

  const tableFileName = useSelector(state => state.save_table[0]?.filename)
  const apiPath = import.meta.env.VITE_API

  console.log(tableFileName)

  return (
    <div className="TablePlace">
      {tableFileName &&
        <img src={`${apiPath}/tables/${tableFileName}`} />
      }
    </div>
  )
}
export default TablePlace
