// external import
import { useState } from "react"
import { Button, Modal, Form, InputGroup } from "react-bootstrap"
import { BsFillMicFill } from 'react-icons/bs'
import { PiStopFill } from 'react-icons/pi'


const CardInfo = ({ show, handleClose, handlleAddToPlayGround }) => {

    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [isListening, setIsListensng] = useState(false)

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

    console.log(SpeechRecognition);
    const recognition = new SpeechRecognition()
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";


    function handleSpeechRecognition(inputName) {
        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')

            if (inputName === "Name")
                setName(transcript)
            else if (inputName === "Role")
                setRole(transcript)
        })
        recognition.start()
        setIsListensng(true)
    }

    function handleStopRecognition() {
        setIsListensng(false)
        recognition.stop()
    }

    recognition.addEventListener('end', () => setIsListensng(false))



    return (
        <>
            <Modal show={show} onHide={handleClose} >
                <Modal.Header>
                    <Modal.Title>Character info</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" placeholder="Name" value={name} onChange={e=> setName(e.target.value)} />
                            <InputGroup.Text style={{ background: '#182129' }}>
                                {isListening ?
                                    <PiStopFill color="red" className="icon" onClick={()=> handleStopRecognition()} /> :
                                    <BsFillMicFill color="white" className="icon" onClick={() => handleSpeechRecognition("Name")} />
                                }
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" placeholder="Role" value={role} onChange={e=> setRole(e.target.value)} />
                            <InputGroup.Text style={{ background: '#182129' }}>
                                {isListening ?
                                    <PiStopFill color="red" className="icon" onClick={()=> handleStopRecognition()} /> :
                                    <BsFillMicFill color="white" className="icon" onClick={() => handleSpeechRecognition("Role")} />
                                }
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={()=> handlleAddToPlayGround(name, role)}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CardInfo