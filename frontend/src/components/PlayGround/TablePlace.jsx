// external import
import { useSelector } from "react-redux";

// internal import


const TablePlace = () => {

  const allTableImgs = useSelector(state => state.table_img.data);
  const tableFileName = useSelector(state => state?.table_img.data[allTableImgs.length - 1]?.filename);

  return (
    <div className="TablePlace d-flex justify-content-center">
      {tableFileName &&
        <img src={`/tables/${tableFileName}`} />
      }
    </div>
  );
};
export default TablePlace;
