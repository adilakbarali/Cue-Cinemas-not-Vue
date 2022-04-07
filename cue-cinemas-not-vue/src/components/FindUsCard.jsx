import { CardGroup, Card, CardImg, Row, Col } from "react-bootstrap";

const FindUsCard = () => {
  return (
    <>
    <div className="placesCardTitle">
        <h2>How to Find Us</h2>
        </div>
        <CardGroup className="PlacesToGo" style={{width: '100rem'}}>
        <Card>
          <Card.Body className="places-card-body">
            <Card.Title className="moviesTitle">Address: </Card.Title>
            <Card.Text className="card-aboutUs-body">
            60 Provan Walk, Glasgow Fort, Glasgow, G34 9DL
            </Card.Text>
         
          <Card.Img variant="top" src="https://photos.cinematreasures.org/production/photos/213482/1499671020/large.JPG?1499671020" style={{height: "481px"}} />
          </Card.Body>
        </Card>
        <Card className="PlacesToGo" style={{width: '110rem'}}>
          <Card.Body className="places-card-body">
          <Card.Title className="opening-table-head"> Parking: </Card.Title>
          <Card.Text className="moviesDescription">
            Glasgow Fort has 2,500 parking spaces which are all FREE
            including a secure multi-storey car park located next to
            Vue. Car parks will remained open but are temporarily closed
            when they reach full capacity.
            <br></br>
            <CardImg
              variant="Bottom"
              src="https://www.urbanrealm.com/images/news/news_6363.jpg"
              style={{ height: "300px" }}
            />
          </Card.Text>
        </Card.Body>
        </Card>
      </CardGroup>
    </>
      );
};

      export default FindUsCard;
