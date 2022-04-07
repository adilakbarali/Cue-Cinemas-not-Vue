import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
const filter = require('leo-profanity');

const ForumComments = ({ data }) => {
    
    const [movieData, setMovieData] = useState()
    
    useEffect(() => {
        axios.get(`http://localhost:4494/movie/get/${data.movie_id}`)
        .then((response) => {
            setMovieData(response.data.title)
        })

    }, [])

    return (

        <>
            <Container className="ContainerClass">
                <Row>
                    <Col>
                        <Card className="discussionCards" style={{ width: '40rem' }}>
                            <Card.Body>
                                <Card.Title className="commentName">{data.full_name}</Card.Title>
                                <Card.Subtitle className="commentFilm">{movieData}</Card.Subtitle>
                                <Card.Text className="commentRating">
                                    Film rating: {data.rating}
                                </Card.Text>
                                <Card.Text className="commentRating">
                                    {filter.clean(data.message)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>

            <br /><br /><br />
        </>


    );
}

export default ForumComments;