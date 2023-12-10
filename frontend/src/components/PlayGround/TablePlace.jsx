import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// internal import


const TablePlace = () => {

  const allTableImgs = useSelector(state => state.table_img.data);
  const tableFileName = useSelector(state => state?.table_img.data[allTableImgs.length - 1]?.filename);
  const apiPath = import.meta.env.VITE_API;

  return (
    <div className="TablePlace">
      {tableFileName &&
        <img src={`${apiPath}/tables/${tableFileName}`} />
      }
    </div>
  );
};
export default TablePlace;
