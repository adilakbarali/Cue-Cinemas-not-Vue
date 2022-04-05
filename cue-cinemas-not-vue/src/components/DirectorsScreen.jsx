import { Card, CardGroup } from 'react-bootstrap'

const DirectorsScreen = () => {
    return ( 
        <>
      <h2>Directors box</h2>
        <CardGroup className='screens'>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.Y90iXusDDRmBDBEJrxdkWQHaEb?w=289&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Smaller theater for less crowd and more comfort...</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.RgQAvNgxh2UYH6Ns2T98RAHaE8?w=306&h=203&c=7&r=0&o=5&dpr=2&pid=1.7" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Kick back on our reclining persian leather seats!</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="data:image/jpeg;base64,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" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Stay seated... Have the finest food and drink brought to you!</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
     );
}
 
export default DirectorsScreen;