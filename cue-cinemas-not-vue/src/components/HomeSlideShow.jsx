import { Carousel } from 'react-bootstrap'




const HomeSlideShow = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-10 h-10"
                        src="https://mvcdn.fancaps.net/3369637.jpg"
                        alt="First slide"
                        
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-10 h-10"
                        src="https://mvcdn.fancaps.net/3005633.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-10 h-10"
                        src="https://mvcdn.fancaps.net/2106092.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomeSlideShow;