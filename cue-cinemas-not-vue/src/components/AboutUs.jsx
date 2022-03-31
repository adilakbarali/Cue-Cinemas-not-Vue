import {Container, Col, Row} from 'react-bootstrap'

const AboutUs = () => {
    return (

        <>


            <Container>
                <Row>
                    <Col>
                        <img src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg"
                            alt="No Country" width="66%" />
                    </Col>
                    <Col>
                        <div class="aboutUs">
                            <h2>About CueNotVueCinemas</h2>
                            <p> Requires:
                                Name of team members,
                                any further info we'd like shared,
                                twitter handle,
                                email address,
                                blog, company website etc,
                                link to the contact page
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png"
                            alt="Legally Blonde" width="66%" />
                    </Col>
                </Row>
            </Container>





        </>

    );
}

export default AboutUs;





