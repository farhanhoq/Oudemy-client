import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import DisplayCourses from "./DisplayCourses";
import LeftSideNav from "../courses/LeftSideNav";

const Courses = () => {

    const courseName = useLoaderData();

    return (
        <div>
        <Container>
            <Row>
            <Col lg="4" className="d-none d-lg-block">
                <h3 className="mb-4">Courses We Offer</h3>
                <div>
                    {
                        courseName.map(c => 
                            <LeftSideNav key={c.id} course={c}></LeftSideNav>
                        )
                    }
                </div>
            </Col>

            <Col lg="8">
                <div className="row row-cols-1 row-cols-lg-2 g-4">
                    {
                        courseName.map(c => 
                            <DisplayCourses key={c.id} course={c}></DisplayCourses>
                        )
                    }
                </div>
            </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Courses;
