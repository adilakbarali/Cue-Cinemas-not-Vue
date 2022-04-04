import { Card, CardImg, Row, Col } from "react-bootstrap";

const DirectionsCard = () => {
  return (
    <>
      <div className="placesToGoHeader">
        <h1> Directions and Transport Links: </h1>
      </div>
      <br />
      <Row xs={4} md={4} className="DirectionsGrid">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> By Car: </Card.Title>
                  <Card.Text>
                    Vue is located within Glasgow Fort which is off of Junction
                    10 of the M8. Glasgow Fort is 5 miles East of Glasgow City
                    Centre or 35 miles West of Edinburgh.
                  </Card.Text>
                  <CardImg
                    variant="bottom"
                    src="http://sparkviews.com/wp-content/uploads/2018/02/Cars-2006.jpg"
                    style={{ height: "370px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> By Bus: </Card.Title>
                  <Card.Text>
                    There are bus stops outside and in the middle of the
                    shopping park. There are many regular bus services that run
                    from Glasgow City Centre including First bus services: 19,
                    38, 46, 60/60A, and Stagecoach service: X19.
                  </Card.Text>
                  <CardImg
                    variant="bottom"
                    src="https://th.bing.com/th/id/R.ef5fbdbaf6c2739085483d9790c982fe?rik=yzlzRrgpborh2Q&pid=ImgRaw&r=0"
                    style={{ height: "347px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> By Train: </Card.Title>
                  <Card.Text>
                    The nearest train station to Easterhouse train station which
                    is a 41 minute walk or 30 minute bus ride. Bus services that
                    run from Easterhouse train station are McGill’s: 310 (every
                    1 hour 10 minutes), or walk to 10 minutes to Easterhouse
                    where there are two bus services including; Stagecoach: X19
                    (every 15 minutes), and First Bus: 60/60A (every 15
                    minutes).
                  </Card.Text>
                  <CardImg
                    variant="bottom"
                    src="https://th.bing.com/th/id/R.bee5f947e6fa53141ea5cb4a56a7d145?rik=l%2bB5k5DXdVJSyQ&riu=http%3a%2f%2fs1.ibtimes.com%2fsites%2fwww.ibtimes.com%2ffiles%2f2014%2f09%2f01%2fhogwarts-express.jpg&ehk=Hbciwb1IRxmjnMCSywTkb%2b%2b3n2ibbXtAdcWnZQCJCqc%3d&risl=&pid=ImgRaw&r=0"
                    style={{ height: "252px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title> By Teleportation: </Card.Title>
                  <Card.Text>
                    Current work in progress. Please check back in 2050 for
                    updates.
                  </Card.Text>
                  <CardImg
                    variant="bottom"
                    src="https://th.bing.com/th/id/R.1348d1bd90b9d88868e828fe9a705188?rik=kXNTtJ7wdHxq9Q&riu=http%3a%2f%2fedgylabs.com%2fwp-content%2fuploads%2f2016%2f09%2fquantum-teleportation-696x696.jpg&ehk=TYblWhwLXiX6ehW5OHvRTdlKIehwewZ5OX2MDJ4Xn6I%3d&risl=&pid=ImgRaw&r=0"
                    style={{ height: "445px" }}
                  />
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      {/* </Card> */}
    </>
  );
};

export default DirectionsCard;
