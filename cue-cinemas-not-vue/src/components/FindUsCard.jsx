import { Card, CardImg, Row, Col } from "react-bootstrap";

const FindUsCard = () => {
  return (
    <>
      <div className="placesToGoHeader">
        <h1> How to Find Us </h1>
      </div>
      <br/>
      <Row xs={2} md={2} className="findUsGrid">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> Address: </Card.Title>
                  <Card.Text>
                    60 Provan Walk, Glasgow Fort, Glasgow, G34 9DL
                  </Card.Text>
                  <CardImg
                    variant="bottom"
                    src="https://th.bing.com/th/id/R.7d63de4db90b791a09e2e62fefd39514?rik=cxsrttKLknZz8w&riu=http%3a%2f%2fphotos.cinematreasures.org%2fproduction%2fphotos%2f213486%2f1499671381%2flarge.JPG%3f1499671381&ehk=vbLm%2bdgcEY86e7FnxE13hja%2flln3q%2fjqCHD0ZghwBhA%3d&risl=&pid=ImgRaw&r=0"
                    style={{ height: "481px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> Parking: </Card.Title>
                  <Card.Text>
                    Glasgow Fort has 2,500 parking spaces which are all FREE
                    including a secure multi-storey car park located next to
                    Vue. Car parks will remained open but are temporarily closed
                    when they reach full capacity.
                    <CardImg
                      variant="Bottom"
                      src="https://www.urbanrealm.com/images/news/news_6363.jpg"
                      style={{ height: "450px" }}
                    />
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default FindUsCard;
