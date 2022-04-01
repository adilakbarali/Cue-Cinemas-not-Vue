import { CardGroup, Card } from "react-bootstrap";

const PlacesToGoRestaurantCards = () => {
    return (
        <>
        <div className="placesCardTitle">
        <h2>Grab a bite to eat while you wait for your viewing...</h2>
        </div>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/c5cjORx-VUJQkkgHobjPR0tgKXA=/0x0:1500x998/2420x1613/filters:focal(630x379:870x619)/cdn.vox-cdn.com/uploads/chorus_image/image/64147886/JTP_6136.0.jpg" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>Big Bob's Bistro</Card.Title>
            <Card.Text>
              If you need some rustic dining to get you in the mood for fast and furious 209, then Big Bob is the man for you!
              <br />
              Quality food is closer than you think!
              <br />
              <br />
              Address: 40 Provan Walk, Glasgow, G34 9DL
              Contact: 0800 22 1288
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">pssss... Let them know we sent you and receive a £10 voucher</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.q-farhsmeyLO0fJwm2RPAQHaE8?w=254&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>CueNotVue For One or For Two</Card.Title>
            <Card.Text>
                Don't worry, the child minder has things covered!
                <br />
            Unwind and enjoy fine dining with that special someone at our in-house restaurant offering all you need from chicken nuggets to seared scallops.
              <br />
              And guess what... You can enjoy a free glass of wine with your meal
              <br />
              What's not to love?
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Reserve a table and enjoy 50% off of your movie ticket!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.hx3BJpt9zd7IGm7Lb4lMcwHaE2?w=236&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>Get in my Belly Burgers</Card.Title>
            <Card.Text>
              It doesn't matter how fussy you or the kids are, you can't go wrong with a burger.
              <br />
              Indulge in the wonders of beef between bread and find the mac to your cheese at this exciting burger joint!
              <br />
              <br />
              Address: 3 Provan Walk, Glasgow, G34 9DL
              <br />
              Contact: 0800 11 1177
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Bring some loaded fries into the movie and feel bliss</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
     );
}
 
export default PlacesToGoRestaurantCards;