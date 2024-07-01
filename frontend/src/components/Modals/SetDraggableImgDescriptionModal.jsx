// external import
import { useState } from 'react';
import { Modal, Button, InputGroup, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillMicFill } from 'react-icons/bs';
import { PiStopFill } from 'react-icons/pi';
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


// internal import
import { setDraggableImgDescription } from '../../Store/Slices/DraggableImgSlice';
import { setChangingDescriptionDraggableImgId, setOpenSetDraggableImgDescriptionModal } from '../../Store/Slices/CommonPropertySlice';
import { toast } from 'react-toastify';


const SetDraggableImgDescriptionModal = () => {

    const [descriptionValue, setDescriptionValue] = useState("");
    const [isListening, setIsListensng] = useState(false);
    const dispatch = useDispatch();
    const changingDescriptionDraggableImgId = useSelector(state => state.common_property.changingDescriptionDraggableImgId);


    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";


    function handleSpeechRecognition() {
        console.log("start");
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            setDescriptionValue(transcript);
        });
        recognition.start();
        setIsListensng(true);
    }

    function handleStopRecognition() {
        setIsListensng(false);
        recognition.stop();
    }

    recognition.addEventListener('end', () => setIsListensng(false));


    const handleNewDescriptionForTheRenamedDraggableImg = () => {

        if (!descriptionValue) {
            toast.warning("Fill the renamed character's description");
            return;
        }

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
                    <InputGroup className="mb-3">
                        <Form.Control
                            as="textarea"
                            placeholder="Character's Description"
                            value={descriptionValue}
                            onChange={e => setDescriptionValue(e.target.value)}
                        />
                        {isListening ?
                            <InputGroup.Text id="basic-addon1" className='bg-dark icon' onClick={() => handleStopRecognition()}>
                                <PiStopFill size={24} />
                            </InputGroup.Text>
                            :
                            <InputGroup.Text id="basic-addon2" className='bg-dark icon' onClick={() => handleSpeechRecognition()} >
                                <BsFillMicFill size={24} />
                            </InputGroup.Text>
                        }
                    </InputGroup>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="success" onClick={handleNewDescriptionForTheRenamedDraggableImg}>Confirm</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
};

export default SetDraggableImgDescriptionModal;