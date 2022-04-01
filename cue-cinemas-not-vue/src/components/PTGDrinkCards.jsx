import { CardGroup, Card } from "react-bootstrap";

const PTGDrinkCards = () => {
    return ( 
        <>
        <div className="placesCardTitle">
        <h2>Have a Drink... or Two</h2>
        <h4>We ask that you refrain from entering the cinema inebriated but feel free to go crazy after your viewing</h4>
        </div>
        <CardGroup>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.5fVrDdAy8ZzIK5yTPPnCmQHaEq?w=286&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>CueNotVue Who is You?</Card.Title>
            <Card.Text>
              Our in-house bar is great for large bookings and even pricate hire!
              <br />
              With experieced bartenders, we can whip you up anything you would like... but we might judge.
              <br />
              We understand that film took you through an emotional rollercoaster so make sense of it with friends over a strwaberry daquiri.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Bye 1 alcoholic and 1 non-alcoholic drink to receive a free movie ticket for the next time you visit!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.SLSqZV0VfPkcGrmrbGtcYwHaE8?w=249&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body className="places-card-body">
            <Card.Title>The Old Swan</Card.Title>
            <Card.Text>
                Maybe you're a person of simple pleasures...Not to worry!
                <br />
            This local tavern is great for a quiet drink or a not so quiet karaoke session on Friday nights.
              <br />
              Whatever tickles your fancy, you're sure to get top quality drinks at great prices!
              <br />
              <br />
              Address: 101 Provan Walk, Glasgow, G34 9DL
              <br />
              Contact: 0206 385 2955
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Ask us at reception for a coupon to get a free drink. You will need a valid movie ticket.</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.XNVsQ9QMF2sgfOo9poPyaQHaE8?w=241&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "301px"}} />
          <Card.Body  className="places-card-body">
            <Card.Title>Johnnies Sport Bar</Card.Title>
            <Card.Text>
              IT'S COMING HOME!!!
              <br />
              Get yourself down to the brand new sports bar open in the city center showing a range of sports accompanied by a range of drinks.
              <br />
              <br />
              Address: 4 Waterloo St, Glasgow, G2 6AY
              <br />
              Contact: 0208 128 4896
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Play a game of billiards on our 'PoolCue' table for a chance to win free cinema for a month!</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
     );
}
 
export default PTGDrinkCards;