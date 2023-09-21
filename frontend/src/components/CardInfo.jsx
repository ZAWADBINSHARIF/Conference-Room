import { Button, Modal, Form, InputGroup } from "react-bootstrap"
import { BsFillMicFill } from 'react-icons/bs'
import { PiStopFill } from 'react-icons/pi'

const CardInfo = ({ show, handleClose }) => {


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
                            <Form.Control type="text" placeholder="Name" />
                            <InputGroup.Text style={{ background: '#182129' }}>
                                <BsFillMicFill className="icon" />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Role</Form.Label>
                        <InputGroup>
                            <Form.Control type="text" placeholder="Role" />
                            <InputGroup.Text style={{ background: '#182129' }}>
                                <PiStopFill className="icon"/>
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default CardInfo