// external import
import { useSelector } from "react-redux"

const PeanutGallery = () => {

  const peanutGalleryImg = useSelector(state => state.peanut_gallery_img)
  const apiPath = import.meta.env.VITE_API

  return (
    <div className="PeanutGallery">
      <div className="peanutGalleryWrapper p-1">

        {peanutGalleryImg.map(item => (
          <img
            key={item.draggable_id}
            src={`${apiPath}/${item.folder_name}/${item.src}`}
            width={75}
          />
        ))}

      </div>
    </div>
  )
}
export default PeanutGallery