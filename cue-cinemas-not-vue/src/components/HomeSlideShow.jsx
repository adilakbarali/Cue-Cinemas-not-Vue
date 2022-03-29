import { Carousel } from 'react-bootstrap'




const HomeSlideShow = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-10 h-10"
                        src="https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-50 h-10"
                        src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/mrbs_1sht_tsr_plf_1350x2000_thumbnail_675x1000_thumbnail_0.jpg"
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
                        src="https://cdn.realsport101.com/images/ncavvykf/gfinityesports/c5b19062e264f79fef7e63accb9248d90ba0b7c8-1280x720.jpg?rect=0,0,1279,720&w=700&h=394&dpr=2"
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