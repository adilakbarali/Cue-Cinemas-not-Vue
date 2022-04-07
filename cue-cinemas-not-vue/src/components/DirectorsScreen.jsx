import { Card, CardGroup } from 'react-bootstrap'

const DirectorsScreen = () => {
    return ( 
        <>
        <div className='screens-title'>
      <h2>Directors box</h2>
      </div>
        <CardGroup className="PlacesToGo" style={{width: '80rem'}}>
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
          <Card.Img variant="top" src="https://i.imgur.com/kt7fnv7.png" style={{height: "250px"}}/>
          <Card.Footer>
            <small className="text-muted">Stay seated... Have the finest food and drink brought to you!</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      </>
     );
}
 
export default DirectorsScreen;