import { Card, Container, Row, Col } from "react-bootstrap";

const ForumComments = ({data}) => {
    return ( 

        <Container className="ContainerClass">
            <Row>
                <Col>
                    <Card className="forumCard" style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title className="commentName">{data.full_name}</Card.Title>
                            <Card.Subtitle className="commentFilm">{data.movie_id}</Card.Subtitle>
                            <Card.Text className="commentRating">
                                Film rating: {data.rating}
                            </Card.Text>
                            <Card.Text className="commentRating">
                                {data.message}
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col>
            </Row>

        </Container>

     );
}
 
export default ForumComments;