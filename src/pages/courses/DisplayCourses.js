import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const DisplayCourses = ({ course }) => {

    const { name, about, img, id } = course;

    return (
        <div className="col">
            <div>
                <Card style={{ width: "18rem" }}>
                    <Card.Img variant="top" src={img} style={{height: "15rem"}} />
                    <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{about}</Card.Text>
                    <Link to={`/details/${id}`}>
                        <Button variant="primary">Know Details</Button>
                    </Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
        );
    };
    
    export default DisplayCourses;