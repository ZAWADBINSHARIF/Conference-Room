// external import
import { useDroppable } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';



// internal import
import DraggableImage from './DraggableImage';
import { fetchSaveHistoryThunk } from '../../Store/Slices/DraggableImgSlice.js';
import { useEffect, useState } from 'react';
import ArchetypeDescription from './ArchetypeDescription';
import { clearAchetypeDescriptionText } from '../../Store/Slices/CharacterImgSlice';
import { RemovableArea } from './RemovableArea.jsx';
import RemovableModal from "../Modals/RemovableModal.jsx";
import PeanutGallery from "../PeanutGallery/PeanutGallery";
import SetDraggableImgDescriptionModal from '../Modals/SetDraggableImgDescriptionModal.jsx';


const PlayGround = () => {

  const draggableImgs = useSelector(state => state.draggable_img);
  const openRemovableModal = useSelector(state => state.removable_area.openRemovableModal);
  const openSetDraggableImgDescriptionModal = useSelector(state => state.common_property.openSetDraggableImgDescriptionModal);
  const dispatch = useDispatch();

  const { setNodeRef } = useDroppable({
    id: 'Droppable',
    data: {
      accepts: ['PlayGroundCharacter', 'characterFromSlideMenu']
    }
  });

  const handleClickOnPlayGround = () => {
    dispatch(clearAchetypeDescriptionText());
  };
  useEffect(() => {
    dispatch(fetchSaveHistoryThunk());
  }, [dispatch]);

  return (

    <>

      <div
        className="PlayGround w-100 d-flex justify-content-sart align-items-start"
        ref={setNodeRef}
        onTouchEnd={handleClickOnPlayGround}
        onClick={handleClickOnPlayGround}
      >

        <PeanutGallery />

        {draggableImgs.map(img => (
          <DraggableImage
            key={img.draggable_id}
            draggable_id={img.draggable_id}
            title={img?.title}
            id={img.id}
            name={img.name}
            role={img.role}
            src={img.src}
            x={img.position_x}
            y={img.position_y}
            folder_name={img.folder_name}
            description={img.description}
          />
        ))}

        <ArchetypeDescription />

        {openRemovableModal && <RemovableModal />}
        {openSetDraggableImgDescriptionModal && <SetDraggableImgDescriptionModal />}

        <RemovableArea />

      </div>

    </>

  );

};

export default PlayGround;