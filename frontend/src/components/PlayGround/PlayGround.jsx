// external import
import { useDroppable, TouchSensor, MouseSensor, useSensor } from '@dnd-kit/core'
import { useDispatch, useSelector } from 'react-redux'
import { DndContext } from '@dnd-kit/core'

// internal import
import TablePlace from "./TablePlace"
import DraggableImage from './DraggableImage'
import { setDraggableImgPosition } from '../../Store/Slices/DraggableImgSlice.js'

const PlayGround = () => {

  const draggableImgs = useSelector(state => state.draggable_img)
  const dispatch = useDispatch()
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

  const { setNodeRef } = useDroppable({
    id: 'Droppable'
  })

  return (
    <DndContext
    onDragEnd={handleDragEnd}
      sensors={[mouseSensor, touchSensor]}
    >

      <div
        className="PlayGround w-100 h-100 d-flex justify-content-center align-items-center"
        ref={setNodeRef}
      >

        {draggableImgs.map(img => (
          <DraggableImage
            key={img.id}
            id={img.id}
            name={img.name}
            role={img.role}
            src={img.src}
            position={img.position}
          />
        ))}
        <TablePlace/>

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