// external import
import { useDroppable } from '@dnd-kit/core';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


// internal import
import DraggableImage from './DraggableImage';
import { fetchSaveHistoryThunk } from '../../Store/Slices/DraggableImgSlice.js';
import { useEffect } from 'react';
import ArchetypeDescription from './ArchetypeDescription';
import { clearAchetypeDescriptionText } from '../../Store/Slices/CharacterImgSlice';
import { RemovableArea } from './RemovableArea.jsx';


const PlayGround = () => {

  const draggableImgs = useSelector(state => state.draggable_img);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setNodeRef } = useDroppable({
    id: 'Droppable',
    data: {
      accepts: ['PlayGroundCharacter', 'characterFromSlideMenu']
    }
  });

  function handleEndGame() {
    if (!draggableImgs.length) return toast.info("At least make one Ally");
    navigate('/result');
  }

  useEffect(() => {
    dispatch(fetchSaveHistoryThunk());
  }, [dispatch]);

  return (

    <>
      <div
        className="PlayGround w-100 d-flex justify-content-sart align-items-start"
        ref={setNodeRef}
        onTouchEnd={() => dispatch(clearAchetypeDescriptionText())}
        onClick={() => dispatch(clearAchetypeDescriptionText())}
      >

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

        <div className="align-self-end p-2">
          <Button className="EndGameBtn btn" variant="danger" onClick={handleEndGame}>
            End Game
          </Button>
        </div>

        <RemovableArea />

      </div>

    </>

  );

};

export default PlayGround;