import React from 'react';
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Navigation from "../pages/shared/Navigation";
import Footer from "../pages/shared/Footer";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Outlet></Outlet>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;