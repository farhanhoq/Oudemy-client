import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
    const course = useLoaderData();
    const { name, about, img, mentor, rating, price } = course;

    return (
        <div>
            <Card style={{ width: '60%' }}>
        <Card.Header>Featured</Card.Header>
        <Card.Img variant="top" src={img} style={{height: "20rem"}} />
        <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
            <p>{about}</p>
            </Card.Text>
        </Card.Body>
        <Card.Footer>
            <div className="text-muted d-flex justify-content-between">
                <p>Mentor: {mentor}</p>
                <p>Price: {price}</p>
                <p>Rating: {rating}</p>
            </div>
            <Button variant="primary">Get Premium</Button>
        </Card.Footer>
        </Card>
        </div>
    );
};

export default CourseDetails;
