import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { 
                console.log("successful")
            })
            .catch(error => console.error(error))
    }

    return (
        <Navbar className="mb-5" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>Oudemy</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        <BootstrapSwitchButton checked={false} width={80} height={20} onlabel='Dark' offlabel='Light' onstyle="outline-dark" offstyle="outline-light" style="border" />
                        <Nav>
                                <>
                                    {
                                    user?.uid ?
                                    <>
                                        <Button className="ms-4" variant="warning" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Button className="ms-4" variant="warning"><Link to='/login'>Login</Link></Button>
                                    </>
                                    }
                                </>
                        </Nav>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
