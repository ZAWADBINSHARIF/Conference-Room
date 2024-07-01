// external import
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';


// internal import
import { setDraggableImgDescription } from '../../Store/Slices/DraggableImgSlice';
import { setChangingDescriptionDraggableImgId, setOpenSetDraggableImgDescriptionModal } from '../../Store/Slices/CommonPropertySlice';


const SetDraggableImgDescriptionModal = () => {

    const [descriptionValue, setDescriptionValue] = useState("");
    const dispatch = useDispatch();
    const changingDescriptionDraggableImgId = useSelector(state => state.common_property.changingDescriptionDraggableImgId);

    const handleNewDescriptionForTheRenamedDraggableImg = () => {
        dispatch(setDraggableImgDescription(
            {
                id: changingDescriptionDraggableImgId,
                description: descriptionValue
            }
        ));
        dispatch(setOpenSetDraggableImgDescriptionModal(false));
        dispatch(setChangingDescriptionDraggableImgId(''));
    };

    return (
        <div
            className="modal show align-self-end position-absolute SetDraggableImgDescriptionModal"
            style={{ display: 'block', position: 'initial' }}
        >
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>{"Write the renamed character's description"} </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <textarea
                        className='w-100'
                        placeholder="Character's Description'"
                        value={descriptionValue}
                        onChange={e => setDescriptionValue(e.target.value)}
                    />
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={handleNewDescriptionForTheRenamedDraggableImg}>Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default SetDraggableImgDescriptionModal;