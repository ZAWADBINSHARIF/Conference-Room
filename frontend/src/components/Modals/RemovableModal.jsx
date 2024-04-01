// external import
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

// internal import
import { setOpenRemovableModal } from '../../Store/Slices/RemovableAreaSlice';
import { removeDraggableImg } from '../../Store/Slices/DraggableImgSlice';
import { getRemovedDraggableImg } from '../../Store/Slices/RemovedDraggableImgSlice';

const RemovableModal = () => {

    const { removingCharacterId } = useSelector(state => state.removable_area);
    const dispatch = useDispatch();

    const handleRemoveDraggableImg = () => {
        dispatch(getRemovedDraggableImg(removingCharacterId));
        dispatch(removeDraggableImg(removingCharacterId));
        dispatch(setOpenRemovableModal(false));
    };

    return (
        <div
            className="modal show align-self-end position-absolute z-2 RemovableModal z-3"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>⚠ Warning</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Character is being cast outside forever, Say Good-bye!</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => dispatch(setOpenRemovableModal(false))} >Close</Button>
                    <Button variant="danger" onClick={handleRemoveDraggableImg}>Ok</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default RemovableModal;