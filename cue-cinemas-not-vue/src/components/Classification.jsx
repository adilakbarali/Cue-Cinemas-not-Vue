import { Card, CardGroup, CardImg, Row, Col } from "react-bootstrap";

const Classification = () => {
  return (
    <>
      <div className="placesToGoHeader">
        <h1> Classifications </h1>
      </div>
      <br />
      <Row xs={3} md={3} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) =>(
          <><Col>

            {/* <CardGroup> */}
            <Card>
              <CardImg
                className="classificationImage"
                variant="top"
                src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_u_rgb.png"
                alt="U" />
              <Card.Body>
                <Card.Text>Suitable for ALL ages.</Card.Text>
                <Card.Text>Perfect for the little ones and the family!</Card.Text>
                <Card.Text> Often suitable for those with autism with limited flashing images and dimmed lights. Please ask a member of staff for more information.</Card.Text>
              </Card.Body>
            </Card>
          </Col><Col>
              <Card>
                <CardImg
                  className="classificationImage"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_pg_rgb.png"
                  alt="PG" />
                <Card.Body>
                  <Card.Text>Parental guidance maybe required, there should be no unsettling images for any child under the age of 8.
                  Unaccompanied children of any age may watch, but parents are advised to consider whether the content may upset younger children.
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    Great family day out for getting lost in a new world!{" "}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col><Col>
              <Card>
                <CardImg
                  className="classificationImage"
                  variant="top"
                  src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_12a_rgb.png"
                  alt="12A" />
                <Card.Body>
                  <Card.Text>
                    Suitiable for an audience of 12 years and over, any child under the
                    age of 12 much be supervised by a parent or guardian.
                  </Card.Text>
                  <Card.Text>
                    Want to be part of the action? Let the family get lost in story!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            </>
      ))}
      </Row>
      <br/>
      <br/>
      <br/>
      <br />
      <br />
      
      <Row xs={3} md={3} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) =>(
          <><Col>
        <Card>
          <CardImg
            className="classificationImage"
            variant="top"
            src="https://vignette.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg/revision/latest/scale-to-width-down/216?cb=20161112011405"
            alt="12"
          />
          <Card.Body>
            <Card.Text>
              Suitable for an audience of 12 years and over. ID may be required
              if attendee looks under 12 years.
            </Card.Text>
            <Card.Text>
              For those a little older and wanting time away from the kids but
              still love thier movies.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardImg
            className="classificationImage"
            variant="top"
            src="https://vignette.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg/revision/latest/scale-to-width-down/216?cb=20161112020652"
            alt="15"
          />
          <Card.Body>
            <Card.Text>
              Suitable for an audience of 15 years and over. ID may be required
              if attendee looks under 15 years.
            </Card.Text>
            <Card.Text>
              For those who want a bit more gore and less of a happily ever
              after, this is perfect for you!
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        <Col>
        <Card>
          <CardImg
            className="classificationImage"
            src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_18_rgb.png"
            alt="18"
            width="10px"
          />
          <Card.Body>
            <Card.Text>
              Suitable for an audience of 18 years and over. ID may be required
              if attendee looks under 18 years.
            </Card.Text>
            <Card.Text>
              Perfect for the lucky adults wanting to watch the scariest,
              gruesome horrors with no children or teens.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col>
        </>
        ))}
      </Row>
      <br/>
      <br/>
      <br/>
      <br />
      <br />
      <Row xs={2} md={2} className="classificationGrid">
        {Array.from({ length: 1 }).map((_, idx) =>(
          <><Col>
        <Card>
          <Card.Body>
            <Card.Text>
              Acceptable ID's are Young Scots card, Passport, or
              Provisional/drivers licence. Entry can be refused without correct
              id.
            </Card.Text>
            <Card.Text>
              Please be kind to our staff, they are following the law when
              asking for id to enter any film.
            </Card.Text>
            <Card.Link href="https://www.bbfc.co.uk/about-classification">
              {" "}
              Please find any additional information here{" "}
            </Card.Link>
            <br/>
            <CardImg
              className="idImage"
              variant="bottom"
              src="https://th.bing.com/th/id/R.e63a975b4efe1a9a06bc55c436ec0f76?rik=AnhS1YtV%2f6c8Bw&pid=ImgRaw&r=0"
              alt="id"
            />
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
