import {Container, Col, Row, Nav} from 'react-bootstrap'

const AboutUs = () => {
    return (

        <>

            <h2>
                About CueNotVueCinemas
            </h2>

            <Container style={{ maxWidth: "100%", maxHeight: "85%", height: "85%"}}>
                <Row>
                    <Col>
                        <img src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg"
                            alt="No Country" width="66%" height="100%"/>
                    </Col>
                    <Col>
                        <div class="aboutUs">
                            <h3>Meet our team</h3>
                            <p> 
                                Error Prevention Systems Technician: Adil Akbarali
                            </p>
                            <p> 
                                Decibel Enhancement Director: Tayab Khan
                            </p>
                            <p> 
                                Inverse Janitor Executive: Jamie Orr
                            </p>
                            <p> 
                                Appendix Removal Specialist: Keira Hegarty
                            </p>
                            <p> 
                                Data Population Manager: Conor Kelly
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png"
                            alt="Legally Blonde" width="66%" height="100%" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg"
                            alt="No Country" width="66%" height="100%" />
                    </Col>
                    <Col>
                        <div class="aboutUs">
                            <h3>Social Media</h3>
                            <p> 
                                If you fancy keeping up to date with our latest announcements and promotions, follow the accounts below
                            </p>
                            <p> 
                                Twitter: @SusPollosNotGus
                            </p>
                            <p> 
                                Instagram: @MessyMethDealersNotJesse
                            </p>
                            <p> 
                                Linkedin: @SikeAssassinsNotMike
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png"
                            alt="Legally Blonde" width="66%" height="100%"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <img src="https://m.media-amazon.com/images/M/MV5BMjA5Njk3MjM4OV5BMl5BanBnXkFtZTcwMTc5MTE1MQ@@._V1_.jpg"
                            alt="No Country" width="66%" height="100%"/>
                    </Col>
                    <Col>
                        <div class="aboutUs">
                            <h3>Get in touch</h3>
                            <p> 
                                If you would like to get in touch with us, you can send us an email at CueCinemasNotVue123@sussybacca.com
                            </p>
                            <p> 
                                Alternatively, you can use the Contact Us page. The link to that is below <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <img src="https://upload.wikimedia.org/wikipedia/en/b/be/Legally_Blonde_film_poster.png"
                            alt="Legally Blonde" width="66%" height="100%"/>
                    </Col>
                </Row>
            </Container>





        </>

    );
}

export default AboutUs;





