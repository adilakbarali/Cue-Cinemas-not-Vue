import { Card } from "react-bootstrap";

const ForumComments = () => {
    return ( 

        <Container className="ContainerClass">
            <Row>
                <Col>
                    <Card className="forumCard" style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title className="commentName">Comment Author</Card.Title>
                            <Card.Subtitle className="commentFilm">--movie from DB--</Card.Subtitle>
                            <Card.Text className="commentRating">
                                Film rating: --rating from DB--
                            </Card.Text>
                            <Card.Text className="commentRating">
                                --message from DB--
                            </Card.Text>
                        </Card.Body>    
                    </Card>
                </Col>
            </Row>

        </Container>

     );
}
 
export default ForumComments;