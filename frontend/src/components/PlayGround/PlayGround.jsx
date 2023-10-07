// external import
import { useDroppable, TouchSensor, MouseSensor, useSensor } from '@dnd-kit/core'
import { useDispatch, useSelector } from 'react-redux'
import { DndContext } from '@dnd-kit/core'

// internal import
import TablePlace from "./TablePlace"
import DraggableImage from './DraggableImage'
import { fetchSaveHistoryThunk, setDraggableImgPosition } from '../../Store/Slices/DraggableImgSlice.js'
import { useEffect, useState } from 'react'
import ArchetypeDescription from './ArchetypeDescription'
import { clearAchetypeDescriptionText } from '../../Store/Slices/CharacterImgSlice'
import TablesChooseModal from '../Modals/TablesChooseModal'

const PlayGround = () => {

  
  const draggableImgs = useSelector(state => state.draggable_img)
  const dispatch = useDispatch()
  const { setNodeRef } = useDroppable({
    id: 'Droppable'
  })

  const [showTableModal, setShowTableModal] = useState(true)
  
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      tolerance: 5,
    },
  });

  useEffect(() => {
    dispatch(fetchSaveHistoryThunk())
  }, [dispatch])

  return (
    <DndContext
      onDragEnd={handleDragEnd}
      sensors={[mouseSensor, touchSensor]}
    >

      <TablesChooseModal
        show={showTableModal}
        onHide={() => setShowTableModal(false)}
      />
      
      <div
        className="PlayGround w-100 d-flex justify-content-center align-items-center"
        ref={setNodeRef}
        onTouchEnd={() => dispatch(clearAchetypeDescriptionText())}
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
          />
        ))}
        <TablePlace />

        <ArchetypeDescription />

      </div>

    </DndContext>
  )

  function handleDragEnd(event) {
    const { active, delta } = event
    const { x: new_x, y: new_y } = delta
    const { id } = active

    dispatch(setDraggableImgPosition({ id, new_x, new_y }))

  }

}

export default PlayGround