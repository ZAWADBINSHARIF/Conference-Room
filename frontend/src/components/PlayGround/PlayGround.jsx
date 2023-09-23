// external import
import { useDroppable } from '@dnd-kit/core'
import { useDispatch, useSelector } from 'react-redux'
import { DndContext } from '@dnd-kit/core'

// internal import
import TablePlace from "./TablePlace"
import DraggableImage from './DraggableImage'
import { setDraggableImgPosition } from '../../Store/Slices/DraggableImgSlice.js'

const PlayGround = () => {

  const draggableImgs = useSelector(state => state.draggable_img)
  const dispatch = useDispatch()

  const { setNodeRef, isOver } = useDroppable({
    id: 'Droppable'
  })

  console.log(isOver)

  return (
    <DndContext onDragEnd={handleDragEnd}>

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
        <TablePlace ref={setNodeRef}/>

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