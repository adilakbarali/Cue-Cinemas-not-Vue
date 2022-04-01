import { Card, CardGroup, CardImg } from "react-bootstrap";

const Classification = () => {
  return (
    <>
      <CardGroup>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_u_rgb.png"
              alt="U"
              width="10px"
            />
            <Card.Text>Suitible for ALL ages</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_pg_rgb.png"
              alt="PG"
              width="360px"
            />
            <Card.Text>Parental guidance maybe required</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_12a_rgb.png"
              alt="12A"
              width="360px"
            />
            <Card.Text>
              Suitible for an audience of 12 years and over, any child under the
              age of 12 much be supervised by a parent or guardian
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://vignette.wikia.nocookie.net/rating-system/images/8/84/BBFC_12.svg/revision/latest/scale-to-width-down/216?cb=20161112011405"
              alt="12"
              width="360px"
            />
            <Card.Text>
              Suitible for an audience of 12 years and over. Id may be required
              if attendee looks under 12
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://vignette.wikia.nocookie.net/rating-system/images/0/03/BBFC_15.svg/revision/latest/scale-to-width-down/216?cb=20161112020652"
              alt="15"
              width="360px"
            />
            <Card.Text>
              Suitible for an audience of 15 years and over. Id may be required
              if attendee looks under 15
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <CardImg
              variant="top"
              src="https://www.theschoolrun.com/sites/theschoolrun.com/files/u682212/bbfc_18_rgb.png"
              alt="18"
              width="360px"
            />
            <Card.Text>
              Suitible for an audience of 18 years and over. Id may be required
              if attendee looks under 18
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Classification;
