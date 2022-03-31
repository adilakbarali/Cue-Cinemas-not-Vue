import {Container, Row, Col} from 'react-bootstrap';

const Movies = ({data}) => {
    
    let actorString = ""
    for (let i = 0; i < data.actors.length; i++) {
        actorString = actorString + data.actors[i] + ", " 
    }

    

    return (

        <>

            <Container >
                <Row>
                    <Col>

                    </Col>
                    <Col xs={8}>
                        <div>
                            <img src={data.images[0]}
                                alt="batman" />
                        </div>
                        <div>
                            <div>
                                Film title: {data.title}
                            </div>
                            <div>
                                Cast: {actorString}
                            </div>
                            <div>
                                Director: {data.director}
                            </div>
                        </div>
                    </Col>
                    <Col>

                    </Col>
                </Row>
            </Container>


        </>

    );
}

export default Movies;