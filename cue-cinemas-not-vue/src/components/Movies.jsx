import Card from "react-bootstrap/esm/Card";
import React from "react";
import { ListGroup, ListGroupItem, Button, Row, Container } from "react-bootstrap";

import Col from 'react-bootstrap/Col';

const Movies = ({ data }) => {

    let actorString = ""
    for (let i = 0; i < data.actors.length; i++) {
        actorString = actorString + data.actors[i] + ", "
    } 
 
    return (
        <>
            <Container>
                <Row>
                    <Col>
                    <img src={data.images[0]}
                    width= '175px'
                    height='261px'/>
                    </Col>
                <Col>
                <Card style={{ width: '40rem' }}>
                    <Card.Body>
                        <Card.Title>Film: {data.title}</Card.Title>
                        <Card.Text>
                            {data.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Cast: {actorString}</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                <br></br><br></br> <br></br>
            </Container>
        </>

     


    );
}

export default Movies;
