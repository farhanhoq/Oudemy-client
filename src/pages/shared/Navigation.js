import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

const Navigation = () => {
    return (
        <div>
        <Navbar expand="lg" bg="secondary" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Oudemy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Bog</Nav.Link>
                    </Nav>
                    <Nav className="align-items-center">
                        <BootstrapSwitchButton checked={false} width={80} height={20} onlabel='Dark' offlabel='Light' onstyle="outline-dark" offstyle="outline-light" style="border" />
                        <Nav.Link eventKey={2} href="#memes">
                        <Button variant="warning">Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
    );
    };

export default Navigation;
