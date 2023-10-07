// external import
import { useSelector, useDispatch } from "react-redux"

// internal import
import { removeDraggableImg } from "../Store/Slices/DraggableImgSlice.js"

const PeanutGallery = () => {

  const draggableImg = useSelector(state => state.draggable_img)
  const dispatch = useDispatch()
  const apiPath = import.meta.env.VITE_API

  function handleRemove(draggable_id) {
    dispatch(removeDraggableImg(draggable_id))
  }

  return (
    <div className="PeanutGallery">
      <div className="peanutGalleryWrapper p-1">

        {draggableImg.map(item => (
          <img
            key={item.draggable_id}
            src={`${apiPath}/${item.folder_name}/${item.src}`}
            width={75}
            onDoubleClick={() => handleRemove(item.draggable_id)}
            onTouchEnd={()=> handleRemove(item.draggable_id)}
          />
        ))}

      </div>
    </div>
  )
}
export default PeanutGallery