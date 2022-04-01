import { Container, Col, Row, Nav, Card, Button } from 'react-bootstrap'

const AboutUs = () => {
    return (

        <>

            <h2>
                About CueNotVueCinemas
            </h2>

            <Container style={{ maxWidth: "100%", maxHeight: "85%", height: "85%" }}>
                <Row className='rows'>
                    <Col>
                        <img className='img' src="https://www.boredpanda.com/blog/wp-content/uploads/2015/08/epic-movie-scenes-screenshots-80__880.jpg"
                            alt="OUATIH" />
                    </Col>
                    <Col>
                        <Card className='card-aboutUs'>
                            <Card.Header className='card-aboutUs-header'>Meet our team</Card.Header>
                            <Card.Body className='card-aboutUs-body'>
                                <Card.Title></Card.Title>
                                <Card.Text>
                                    Product Owner: Adil Akbarali
                                </Card.Text>
                                <Card.Text>
                                    Scrum Master: Tayab Khan
                                </Card.Text>
                                <Card.Text>
                                    Developers: Jamie Orr, Keira Hegarty, Conor Kelly
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img className='img' src="https://s3.amazonaws.com/static.rogerebert.com/uploads/review/primary_image/reviews/no-country-for-old-men-2007/EB20071108REVIEWS711080304AR.jpg"
                            alt="Legally Blonde" />
                    </Col>
                </Row>
                <Row className='rows'>
                    <Col>
                        <img className='img' src="http://www.tasteofcinema.com/wp-content/uploads/2017/10/samuel-jackson-pulp-fiction-700.jpg"
                            alt="No Country"  />
                    </Col>
                    <Col>
                        <Card className='card-aboutUs' >
                            <Card.Header className='card-aboutUs-header'>Social Media</Card.Header>
                            <Card.Body className='card-aboutUs-body'>
                                <Card.Text>
                                    Twitter: @CueNotVue
                                </Card.Text>
                                <Card.Text>
                                    Instagram: @Cue_Not_Vue
                                </Card.Text>
                                <Card.Text>
                                    Linkedin: @CueCinemasNotVue
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img className='img' src="https://www.denofgeek.com/wp-content/uploads/2019/08/once-upon-a-time-in-hollywood-poster.jpg?resize=768%2C432"
                            alt="Legally Blonde" />
                    </Col>
                </Row>
                <Row className='rows'>
                    <Col>
                        <img className='img' src="https://s.yimg.com/ny/api/res/1.2/znlaXRnOX.t1a.wl.Ij7WA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTM2MA--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-11/cafd2910-27fd-11eb-bbf7-25f7688887ed"
                            alt="No Country"  />
                    </Col>
                    <Col>
                        <Card className='card-aboutUs' bg='antiquewhite'>
                            <Card.Header className='card-aboutUs-header'>Get in touch</Card.Header>
                            <Card.Body className='card-aboutUs-body'>
                                <Card.Text>
                                    If you would like to get in touch with us, you can send us an email at CueCinemasNotVue123@sussybacca.com, or visit our <Nav.Link href="/ContactUs">Contact Us page</Nav.Link> 
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <img className='img' src="https://i.inews.co.uk/content/uploads/2019/10/Film_-_Fall_Preview_34492.jpg-89aca-e1570113155368-640x360.jpg"
                            alt="Legally Blonde" />
                    </Col>
                </Row>
            </Container>





        </>

    );
}

export default AboutUs;





