import { Carousel } from 'react-bootstrap'




const HomeSlideShow = () => {
    return (
        <>
            <Carousel className="p-0">
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-10 h-10"
                        src="https://i.imgur.com/HqPtjae.jpg"
                        alt="First slide"
                        
                    />
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <Carousel.Caption>
                        <h3>The Batman</h3>
                        <p>From Warner Bros. Pictures comes "The Batman," with director Matt Reeves (the "Planet of the Apes" films) at the helm and with Robert Pattinson ("Tenet," "The Lighthouse," "Good Time") starring as Gotham City's vigilante detective, Batman.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-10 h-10"
                        src="https://i.imgur.com/hTCIkuB.jpg"
                        alt="Second slide"
                    />
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <Carousel.Caption>
                        <h3>Uncharted</h3>
                        <p>Street-smart thief Nathan Drake (Tom Holland) is recruited by seasoned treasure hunter Victor "Sully" Sullivan (Mark Wahlberg) to recover a fortune lost by Ferdinand Magellan 500 years ago.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10 h-10"
                        src="https://i.imgur.com/dvLrLqE.jpg"
                        alt="Third slide"
                    />
                    <br></br><br></br><br></br><br></br><br></br><br></br>
                    <Carousel.Caption>
                        <h3>The Lost City</h3>
                        <p>A reclusive romance novelist on a book tour with her cover model gets swept up in a kidnapping attempt that lands them both in a cutthroat jungle adventure.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeSlideShow;