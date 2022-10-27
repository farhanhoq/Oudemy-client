import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Button from "react-bootstrap/Button";
import BootstrapSwitchButton from "bootstrap-switch-button-react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { Image } from "react-bootstrap";

const Navigation = () => {

    const { user, logOut } = useContext(AuthContext);
    console.log(user)

    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {user.displayName
    }
        </Tooltip>
    )

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
                        <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 400 }}
                        overlay={renderTooltip}>
                            {
                                        user?.photoURL ?
                                        <Image className="ms-4" src={user.photoURL} style={{ width: '40px' }} roundedCircle></Image>
                                        :
                                        <Image/>
                                    }
                                </OverlayTrigger>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;
