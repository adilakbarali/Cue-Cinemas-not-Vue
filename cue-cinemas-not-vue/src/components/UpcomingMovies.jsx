import Card from "react-bootstrap/esm/Card";
import React from "react";
import { ListGroup, ListGroupItem, Button, Row, Container } from "react-bootstrap";

import Col from 'react-bootstrap/Col';

const UpcomingMovies = ({ data }) => {

    let actorString = ""
    for (let i = 0; i < data.actors.length; i++) {
        actorString = actorString + data.actors[i] + ", "
    }



    return (

        <>
            <Container className="ContainerClass">
                <Row>
                    <Col>
                        <img src={data.images[0]}
                            width='175px'
                            height='261px' />
                    </Col>
                    <Col>
                        <Card className="moviesCard" style={{ width: '40rem' }}>
                            <Card.Body>
                                <Card.Title className="moviesTitle">{data.title}</Card.Title>
                                <Card.Text className="moviesCast">
                                Cast: {actorString}
                                </Card.Text>
                            </Card.Body>
                            <Card.Body className="list-group-flush">
                                <Card.Text className="moviesDescription">{data.description}</Card.Text>
                            </Card.Body>
                            <Card.Body className="moviesCast">
                                Release date: {new Date(data.release_date).toLocaleString('en-UK')}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br><br></br> <br></br>
        </>




    );

}

export default UpcomingMovies;