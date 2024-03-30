// internal import
import { useDroppable } from '@dnd-kit/core';
import { useSelector } from 'react-redux';


export const RemovableArea = () => {

    const { visibility } = useSelector(state => state.removable_area);

    const { setNodeRef } = useDroppable({
        id: 'Removable',
        data: {
            accepts: ['PlayGroundCharacter']
        }
    });

    return (
        <div className={` RemovableArea align-self-end position-absolute z-2 ${visibility ? 'visible' : 'visually-hidden'}`} ref={setNodeRef}>
        
        </div>
    );
};
