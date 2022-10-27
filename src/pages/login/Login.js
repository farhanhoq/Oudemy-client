import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import {FaGoogle, FaGithub} from "react-icons/fa";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const [error, setError] = useState("");
    const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => console.error(error));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError("");
            navigate(from, { replace: true });
        })
        .catch((error) => {
            console.error(error);
            setError(error.message);
        })
        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
                required
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                name="password"
                type="password"
                placeholder="Password"
                required
                />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center">
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <ButtonGroup horizontal className="mt-4">
                    <Button onClick={handleGoogleSignIn} variant='outline-primary'><FaGoogle></FaGoogle>  <span>Google Login</span></Button>
                    <Button onClick={handleGithubSignIn} variant='outline-dark'><FaGithub></FaGithub>  <span>Github Login</span></Button>
                </ButtonGroup>
                <Link to='/register'><h6>New??? Visit here! ! !</h6></Link>
            </div>
            <Form.Text className="text-danger">{error}</Form.Text>
            </Form>
        </div>
    );
};

export default Login;
