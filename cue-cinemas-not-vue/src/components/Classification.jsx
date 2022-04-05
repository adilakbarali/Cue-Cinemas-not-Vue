import { Card, CardGroup, CardImg, Row, Col } from "react-bootstrap";

const Classification = () => {
  return (
    <>
      <div className="placesCardTitle">
        <h1> Classifications </h1>
      </div>
      <br />
      <Row xs={3} md={3} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
          <Col>

            {/* <CardGroup> */}
            <Card className="bg-dark" style={{ width: '30rem' }}>
              <img
                className="classificationImage"
                variant="top"
                src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_u_rgb.png"
                alt="U" />
              <Card.Body>
              <Card.Text className="moviesDescription">
                Suitable for ALL ages.
                Perfect for the little ones and the family!
                 Often suitable for those with autism with limited flashing images and dimmed lights. Please ask a member of staff for more information.</Card.Text>
              </Card.Body>
            </Card>
          </Col><Col>
          <Card className="bg-dark" style={{ width: '30rem' }}>
                <img
                  className="classificationImage"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_pg_rgb.png"
                  alt="PG" />
                <Card.Body>
                <Card.Text className="moviesDescription">
                    Parental guidance maybe required, there should be no unsettling images for any child under the age of 8.
                    Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger children.
                  </Card.Text>
                  <Card.Text className="moviesDescription">
                    {" "}
                    Great family day out for getting lost in a new world!{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col><Col>
            <Card className="bg-dark" style={{ width: '30rem' }}>
                <img
                  className="classificationImage"
                  variant="top"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_12a_rgb.png"
                  alt="12A" />
                <Card.Body>
                <Card.Text className="moviesDescription">
                    Suitiable for an audience of 12 years and over, any child under the
                    age of 12 much be supervised by a parent or guardian.
                    Want to be part of the action? Let the family get lost in story!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />

      <Row xs={3} md={3} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) => (
          <><Col>
            <Card className="bg-dark" style={{ width: '30rem' }}>
              <img
                className="classificationImage"
                variant="top"
                src="https://vignette.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg/revision/latest/scale-to-width-down/216?cb=20161112011405"
                alt="12"
              />
              <Card.Body>
              <Card.Text className="moviesDescription">
                  Suitable for an audience of 12 years and over. ID may be required
                  if attendee looks under 12 years.
                </Card.Text>
                <Card.Text className="moviesDescription">
                  For those a little older and wanting time away from the kids but
                  still love thier movies.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
            <Col>
            <Card className="bg-dark" style={{ width: '30rem' }}>
                <img
                  className="classificationImage"
                  variant="top"
                  src="https://vignette.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg/revision/latest/scale-to-width-down/216?cb=20161112020652"
                  alt="15"
                />
                <Card.Body>
                  <Card.Text className="moviesDescription">
                    Suitable for an audience of 15 years and over. ID may be required
                    if attendee looks under 15 years.
                  </Card.Text>
                  <Card.Text className="moviesDescription">
                    For those who want a bit more gore and less of a happily ever
                    after, this is perfect for you!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
            <Card className="bg-dark" style={{ width: '30rem' }}>
                <img
                  className="classificationImage"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_18_rgb.png"
                  alt="18"
                  width="10px"
                />
                <Card.Body>
                <Card.Text className="moviesDescription">
                    Suitable for an audience of 18 years and over. ID may be required
                    if attendee looks under 18 years.
                  </Card.Text>
                  <Card.Text className="moviesDescription">
                    Perfect for the lucky adults wanting to watch the scariest,
                    gruesome horrors with no children or teens.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </>
        ))}
      </Row>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Row xs={2} md={2} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) => (
          <>
          <Col>
          <Card className="bg-dark" style={{ width: '30rem' }}>1
              <Card.Body>
              <Card.Text className="moviesDescription">
                  Acceptable ID's are Young Scots card, Passport, or
                  Provisional/drivers licence. Entry can be refused without correct
                  id.
                </Card.Text>
                <Card.Text className="moviesDescription">
                  Please be kind to our staff, they are following the law when
                  asking for id to enter any film.
                </Card.Text>
                <Card.Link href="https://www.bbfc.co.uk/about-classification">
                  {" "}
                  Please find any additional information here{" "}
                </Card.Link>
                <br />

              </Card.Body>
            </Card>
          </Col>
          </>
        ))}
      </Row>
    </>
  );
};

export default Classification;
