// external import
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';

// internal import 
import FormArea from "../components/FormArea";

const Admin = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    async function handleUpdate(e) {

        e.preventDefault();

        if (newPassword !== '' && confirmPassword !== ''
            && newPassword !== confirmPassword) {
            return toast.error('Confirm password and New password does not match');
        }

        if (!password || !username) {
            return toast.error('Fill the Password and Username input for updating profile');
        }

        try {
            const response = await axios.post("/auth/profile", {
                username,
                password,
                newPassword
            });

            if (response.status == 200) {
                console.log(response);
                toast.success('Profile has been updated');
                setConfirmPassword("");
                setNewPassword("");
                setPassword("");
            }

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        }

    }

    const handleLogout = async () => {
        try {
            const response = await axios.get("/auth/logout");
            if (response.status === 200) {
                toast.success("Logged out");
                navigate(0);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {

        const verifyingToken = async () => {

            try {
                const response = await axios.get("/verifier");
                console.log(response);

                if (response.status !== 200) {
                    navigate("/login");
                }

                setUsername(response.data.msg);
            } catch (error) {
                navigate("/login");
                console.log(error);
            }

        };

        verifyingToken();
    }, [navigate]);


    return (
        <div>
            <div className="Admin container d-flex justify-content-around align-items-center flex-row">
                <FormArea />

                <div>
                    <Form className='ProfileForm mt-5 p-5 mb-5'>

                        <h1>Profile</h1>

                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" placeholder="New password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Comfirm password</Form.Label>
                            <Form.Control type="password" placeholder="Comfirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>

                        <div className='text-end'>
                            <Button variant="primary" type="submit" onClick={(e) => handleUpdate(e)}>
                                Update
                            </Button>
                        </div>
                    </Form>
                </div>

            </div>

            <div className="d-flex justify-content-around align-items-center">
                <p className="p-2 mt-3 rounded-2 text-bg-secondary"><Link className=" text-light" to='/'>Go Back</Link></p>
                <Button className="btn btn-danger" onClick={handleLogout}>Logout</Button>
            </div>

        </div>
    );
};
export default Admin;