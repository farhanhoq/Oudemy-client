import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const DisplayCourses = ({ course }) => {
    console.log(course);
    const { name, about, img } = course;

    return (
        <div className="col">
            <div>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
        );
    };
    
    export default DisplayCourses;