import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, about, img, id } = course;

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            {about}
            </Card.Text>
            <Button variant="primary">Get Premium</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default CourseDetails;
