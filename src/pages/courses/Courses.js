import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import DisplayCourses from "../shared/DisplayCourses";
import LeftSideNav from "../shared/LeftSideNav";

const Courses = () => {
    return (
        <div>
        <Container>
            <Row>
            <Col lg="4" className="d-none d-lg-block">
                <LeftSideNav></LeftSideNav>
            </Col>

            <Col lg="8">
                <DisplayCourses></DisplayCourses>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;
