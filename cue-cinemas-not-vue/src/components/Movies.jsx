import Card from "react-bootstrap/esm/Card";
import React from "react";
import { ListGroup, ListGroupItem, Button, Row, Container} from "react-bootstrap";
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';

const Movies = ({ data }) => {



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
                            <Card.Body>
                                <Card.Text className="moviesDescription">{data.description}</Card.Text>
                            </Card.Body>
                            <Card.Body>
                                
                                    <Link to="/Bookings">
                                    <Button variant="primary" >Book Now</Button>
                                    </Link>
                                     {" "}
                                     <Link to="/DiscussionForum">
                                    <Button variant="primary" >Reviews</Button>
                                    </Link>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <br></br><br></br> <br></br>
        </>




    );
}

export default Movies;
