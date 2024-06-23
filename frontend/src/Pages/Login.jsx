// external import
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';


const LoginPage = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            toast.warning("Fill up the username and password properly");
            return;
        }

        try {
            const response = await axios.post("/auth", {
                username, password
            });

            if (response.status === 200) {
                toast.success("Logged in");
                navigate("/admin");
            }
            console.log(response.data);
        } catch (error) {
            toast.error("Something went wrong");
            console.log(error);
        }
    };

    return (
        <div className="Login container d-flex align-items-center flex-column">

            <Form className='LoginForm mt-5 p-5'>

                <h1>Login</h1>

                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>

                <div className='text-end'>
                    <Button variant="secondary" type="submit" onClick={handleLogin}>
                        Login
                    </Button>
                </div>
            </Form>

        </div>
    );
};

export default LoginPage;