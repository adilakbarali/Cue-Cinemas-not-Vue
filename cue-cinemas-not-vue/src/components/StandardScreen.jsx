import { Card, CardGroup } from 'react-bootstrap'

const StandardScreen = () => {
    return (
      <>
      <h2>Standard</h2>
        <CardGroup className='screens'>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.-IFvDvGN7VgKLxl6muQscAHaFO?w=245&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">No seat assignment... Pick the seat right for you!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.sO4NzDQ7ZkfgADcaLZ8blgHaE8?w=237&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Enjoy our seats with great leg space!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.wg25mvEsLzXMFbpqUS7DZgHaGq?w=213&h=191&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Head to the counter for a great selection of snacks and drinks!</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
    )
  }
     ;

 
export default StandardScreen;