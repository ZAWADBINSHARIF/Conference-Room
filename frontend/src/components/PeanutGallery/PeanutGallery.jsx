// external import
import { useSelector } from "react-redux";
import { useDroppable } from "@dnd-kit/core";
import PeanutCharacterImg from "./PeanutCharacterImg";

const PeanutGallery = () => {

  const peanutGalleryImg = useSelector(state => state.peanut_gallery_img);
  const { setNodeRef, isOver } = useDroppable({
    id: 'PeanutGallery',
    data: {
      accepts: ['PlayGroundCharacter', 'characterFromPeanutGallery']
    }
  });



  return (
    <div className="PeanutGallery">
      <div className="peanutGalleryWrapper p-1"
        ref={setNodeRef}
        style={{
          scale: isOver ? "1.02" : "1",
          transition: "0.5s"
        }}
      >
        {peanutGalleryImg.length == 0 &&
          <p className="text-center">Peanut Gallery</p>}
        {peanutGalleryImg.map(item => (
          <PeanutCharacterImg
            key={item.draggable_id}
            item={item}
            src={`${item.folder_name}/${item.src}`}
          />
        ))}

      </div>
    </div>
  );
};
export default PeanutGallery;