// external import
import { useSelector } from "react-redux"

const PeanutGallery = () => {

  const peanutGalleryImg = useSelector(state => state.peanut_gallery_img)

  return (
    <div className="PeanutGallery">
      <div className="peanutGalleryWrapper p-1">

        {peanutGalleryImg.map(item => (          
          <img
            key={item.draggable_id}
            src={`/${item.folder_name}/${item.src}`}
            width={75}
          />
        ))}

      </div>
    </div>
  )
}
export default PeanutGallery