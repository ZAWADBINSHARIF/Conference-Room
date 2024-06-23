import axios from "axios";
import { useState } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { toast } from 'react-toastify';

const FormArea = () => {

    const [folderName, setFolderName] = useState('');
    const [role, setRole] = useState('');
    const [description, setDescription] = useState('');
    const [pictureName, setPictureName] = useState('');
    const [imageFile, setImageFile] = useState(null);

    function handleSelectImage(e) {

        const file = e.target.files[0];
        setImageFile(file);

        if (folderName === 'people' || folderName === 'dogs') {
            const filename = file.name.replace(/\.[^/.]+$/, "");
            setPictureName(filename);
        }
    }

    async function handleSubmit() {

        const formData = new FormData();

        if (folderName !== "" && folderName !== 'tables') {
            formData.append('name', pictureName);
        }
        if (imageFile && pictureName && role) {
            formData.append('folderName', folderName);
            formData.append('role', role);
            formData.append('description', description);
            formData.append('image', imageFile);
        }
        if (folderName === 'tables') {
            formData.append('image', imageFile);
        }

        try {
            await axios.post(`/${folderName}`, formData);

            toast.success("Picture has been uploaded");

        } catch (error) {
            toast.error("Failed to upload");
            console.log(error);
        }
    }

    return (
        <Form
            className="FormArea mt-5 p-5"
            onSubmit={e => e.preventDefault()}
            encType="multipart/form-data"
        >
            <h1>Add Image</h1>
            <hr />
            {folderName !== "" && folderName !== 'tables' &&
                <>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Picture name</Form.Label>
                        <Form.Control type="text" placeholder="Enter picture name" value={pictureName} onChange={e => setPictureName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="role">
                        <Form.Label>Role</Form.Label>
                        <Form.Control type="text" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
                    </Form.Group>
                </>
            }
            <Form.Label>Select a folder</Form.Label>
            <Form.Select aria-label="Select A Folder" value={folderName} onChange={e => setFolderName(e.target.value)}>
                <option value=''>Select Picture Folder</option>
                <option value="people">People</option>
                <option value="dogs">Dog</option>
                <option value="tables">Table</option>
            </Form.Select>
            <Form.Group controlId="formFile" className="mb-3 mt-3">
                <Form.Label>Picture</Form.Label>
                <Form.Control type="file" accept="image/png, image/jpg, image/jpeg" required onChange={e => handleSelectImage(e)} />
            </Form.Group>
            <Row className="text-end">
                <Col>
                    <Button variant="primary"
                        onClick={() => handleSubmit()}>Add</Button>
                </Col>
            </Row>
        </Form >
    );
};
export default FormArea;