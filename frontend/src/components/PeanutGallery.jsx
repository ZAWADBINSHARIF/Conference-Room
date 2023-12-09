// external import
import { useSelector } from "react-redux";
import { useDroppable } from "@dnd-kit/core";

const PeanutGallery = () => {

  const peanutGalleryImg = useSelector(state => state.peanut_gallery_img);
  const { setNodeRef, isOver } = useDroppable({
    id: 'PeanutGallery',
    data: {
      accepts: ['PlayGroundCharacter']
    }
  });

  const apiPath = import.meta.env.VITE_API;

  return (
    <div className="PeanutGallery" ref={setNodeRef}>
      <div className="peanutGalleryWrapper p-1"
        style={{
          scale: isOver ? "1.02" : "1",
          transition: "0.5s"
        }}
      >
        {peanutGalleryImg.length == 0 &&
          <p className="text-center">Peanut Gallery</p>}
        {peanutGalleryImg.map(item => (
          <img
            key={item.draggable_id}
            src={`${apiPath}/${item.folder_name}/${item.src}`}
            width={75}
          />
        ))}

      </div>
    </div>
  );
};
export default PeanutGallery;