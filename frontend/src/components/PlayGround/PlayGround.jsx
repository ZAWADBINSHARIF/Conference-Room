// external import
import { useDroppable, TouchSensor, MouseSensor, useSensor } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';

// internal import
import TablePlace from "./TablePlace";
import DraggableImage from './DraggableImage';
import { fetchSaveHistoryThunk, setDraggableImgPosition } from '../../Store/Slices/DraggableImgSlice.js';
import { useEffect, useState } from 'react';
import ArchetypeDescription from './ArchetypeDescription';
import { clearAchetypeDescriptionText } from '../../Store/Slices/CharacterImgSlice';
import TablesChooseModal from '../Modals/TablesChooseModal';

const PlayGround = () => {

  const [itemPosition, setItemPosition] = useState({ x: 0, y: 0 });
  const draggableImgs = useSelector(state => state.draggable_img);
  const dispatch = useDispatch();

  const { setNodeRef } = useDroppable({
    id: 'Droppable',
    data: {
      accepts: ['PlayGroundCharacter', 'characterFromSlideMenu']
    }
  });

  const [showTableModal, setShowTableModal] = useState(true);

  useEffect(() => {
    dispatch(fetchSaveHistoryThunk());
  }, [dispatch]);

  return (
    // <DndContext
    //   onDragEnd={handleDragEnd}
    //   sensors={[mouseSensor, touchSensor]}
    // >
    <>
      <TablesChooseModal
        show={showTableModal}
        onHide={() => setShowTableModal(false)}
      />

      <div
        className="PlayGround w-100 d-flex justify-content-center align-items-center"
        ref={setNodeRef}
        onTouchEnd={() => dispatch(clearAchetypeDescriptionText())}
        onClick={() => dispatch(clearAchetypeDescriptionText())}
      >

        {draggableImgs.map(img => (
          <DraggableImage
            key={img.draggable_id}
            draggable_id={img.draggable_id}
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
        <TablePlace />

        <ArchetypeDescription />

      </div>

    </>
    // </DndContext>
  );

  // function handleDragEnd(event) {
  //   const { active, delta } = event;
  //   const { x: new_x, y: new_y } = delta;
  //   const { id } = active;

  //   dispatch(setDraggableImgPosition({ id, new_x, new_y }));

  // }

};

export default PlayGround;