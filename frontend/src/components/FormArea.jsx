import { Form, Row, Col, Button } from "react-bootstrap"

const FormArea = () => {
    return (
        <Form className="FormArea mt-5 p-5">
            <h1>Add Image</h1>
            <Form.Label>Select a folder</Form.Label>
            <Form.Select aria-label="Select A Folder">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </Form.Select>
            <Form.Group controlId="formFileMultiple" className="mb-3 mt-3">
                <Form.Label>Multiple files input example</Form.Label>
                <Form.Control type="file" multiple />
            </Form.Group>
            <Row className="text-end">
                <Col>
                    <Button variant="secondary">Add</Button>
                </Col>
            </Row>
        </Form>
    )
}
export default FormArea