import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";

const Navigation = () => {
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
                        <Nav.Link eventKey={2} href="#memes">
                        <Button variant="warning">Login</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
