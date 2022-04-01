import { CardGroup, Card } from "react-bootstrap";

const PTGActivitiesCards = () => {
    return ( 
        <>
        <div className="placesCardTitle">
        <h2>Fun Fun Fun!</h2>
        </div>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.2WixiK1_vaVG5EoSVkGXmwHaEU?w=284&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>Gutterly Awful</Card.Title>
            <Card.Text>
              Who doesn't love bowling?
              <br />
              Get yourself down to Glasgows infamous bowling lanes with your friends and family and have a blast!
              <br />
              <br />
              Address: 24 Provan Walk, Glasgow, G34 9DL
              <br />
              Contact: 0181 567 2850
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">If you are in a group of 6, the winner of bowling will receive free entry to a movie of their choice if they get 120 points or more!!!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.sTyipkFf4OBunJNVQ1A8MgHaEc?w=306&h=183&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>Area 51</Card.Title>
            <Card.Text>
                Delve into the mysteries of this aien-themed arcade while you have a whale of a time.
                <br />
            Great for kids aged from 5 - 16 and there is something for everyone.
              <br />
              Tickets fly so make sure you head over there and book yours now!
              <br />
              Oh Yeah... It's only next door.
              <br />
              <br />
              Address: 62 Provan Walk, Glasgow, G34 9DL
              <br />
              Contact: 0900 764 8650
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Show us what prizes you have won! You never know... there might be another one up for grabs.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.XoKFIcnGaSJ34Jtsen8-owHaFU?w=228&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>BottomNotTop Golf</Card.Title>
            <Card.Text>
              Did you know we don't just do cinemas???
              <br />
              Have a swing at our brand new, state of the art driving range great for fun with family and friends!
              <br />
              <br />
              Address: 80 Woods Lane, Glasgow, G54 3JD
              <br />
              Contact: 0900 354 7893
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">50% off your first two games of golf if you have purchased a movie ticket within the 2 weeks before your visit.</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
     );
}
 
export default PTGActivitiesCards;