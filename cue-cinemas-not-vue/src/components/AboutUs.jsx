import { Container, Col, Row, Nav, Card, Button } from 'react-bootstrap'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse'
import LinkContainer from 'react-router-bootstrap/LinkContainer';


const AboutUs = () => {
    const [open, setOpen] = useState(false);
    return (

        <>


            <Container style={{ maxWidth: "100%", maxHeight: "85%", height: "85%" }}>
                <Row className='rows'>
                    <Col>
                        <img className='img' src="https://cdn.mos.cms.futurecdn.net/UNEfTXYJrE7Hrtadt7aEda-1200-80.jpg"
                            alt="OUATIH" />
                    </Col>
                    <Col>
                        <Card className='card-aboutUs'>
                            <Card.Header className='card-aboutUs-header'>Meet our team</Card.Header>
                            <Card.Body className='card-aboutUs-body'>
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
                            alt="No Country" />
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
                            alt="No Country" />
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
                <Row>
                    <Col>
                        <Card className="card-Scrum" style={{ width: '60rem' }}>
                            <Button
                                onClick={() => setOpen(!open)}
                                aria-controls="example-collapse-text"
                                aria-expanded={open}
                            >
                                Scrum
                            </Button>
                            <Collapse in={open}>
                                <div id="example-collapse-text">
                                <p>
                                    <Nav.Link href="https://www.scrum.org/">Scrum.org</Nav.Link>

                                    Scrum is a framework that helps teams work together. Much like a rugby team (where it gets its name) training for the big game, scrum encourages teams to learn through experiences, self-organize while working on a problem, and reflect on their wins and losses to continuously improve.
                                    <br></br>
                                    We used Scrum every day in our project to discuss what was important to work on during the day and during the week and what wasn't. It helped a lot in our creation because we had to quickly reassess our priorities because some tasks took less time than others and vice versa, but the process led us to work efficiently and continuously re-evaluate what is necessary to the project and what everyone needs to be doing.
                                </p>
                                   
                                </div>
                            </Collapse>
                        </Card>
                    </Col>
                </Row>
            </Container>





        </>

    );
}

export default AboutUs;





