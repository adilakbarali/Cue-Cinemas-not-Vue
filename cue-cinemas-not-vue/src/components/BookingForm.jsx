import axios from 'axios';
import { useRef, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const BookingForm = (sID) => {
    
    const post_name = useRef(null);
    const post_seats = useRef(null);
    const post_adults = useRef(null);
    const post_children = useRef(null);
    var post_concessions = [];
    const [bookingId, setBookingId] = useState();

    const appendConcession = (event) => {
        var e = event.target;
        if(e.checked === true){
            post_concessions.push(e.value)
        }
        else{
            for(let i=0; i < post_concessions.length; i++){
                if(post_concessions[i] === e.value){
                    post_concessions.splice(i, 1);
                    break;
                }
            }
        }
    }


    const sendData = () => {
        var booking = {
            "screen_id" : sID.sID,
            "full_name" : post_name.current.value,
            "number_of_seats" : parseInt(post_seats.current.value),
            "number_of_adults" : parseInt(post_adults.current.value),
            "number_of_children" : parseInt(post_children.current.value),
            "concessions" : post_concessions
        }
        axios.post('http://localhost:4494/booking/create', booking)
        .then((response) => {
            if(response.data.status === 201){
                getLatest();
            }
        })
    };

    const getLatest = () => {
        axios.get('http://localhost:4494/booking/getLatest')
        .then((response) => {
            setBookingId(response.data._id);
        })
    }

    return ( 
        <>
        <Card className="bg-dark text-white" style={{width:'20rem'}}>
            <Form>
                <Form.Group className="mb-3" controlId="formFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter full name" ref={post_name}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumberOfSeats">
                    <Form.Label>Number Of Seats</Form.Label>
                    <Form.Select type="select" ref={post_seats}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumberOfAdults">
                    <Form.Label>Number Of Adults</Form.Label>
                    <Form.Select type="select" ref={post_adults}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formNumberOfChildren">
                    <Form.Label>Number Of Children</Form.Label>
                    <Form.Select type="select" ref={post_children}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formConcessions">
                    <Form.Label>Concessions</Form.Label>
                    <Form.Check type="checkbox" label="Salted Popcorn (Small)" value="Salted Popcorn (Small)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Salted Popcorn (Large)" value="Salted Popcorn (Large)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Sweet Popcorn (Small)" value="Sweet Popcorn (Small)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Sweet Popcorn (Large)" value="Sweet Popcorn (Large)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Mixed Popcorn (Small)" value="Mixed Popcorn (Small)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Mixed Popcorn (Large)" value="Mixed Popcorn (Large)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Nachos" value="Nachos" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Hot Dog" value="Hot Dog" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Soft Drink (Small)" value="Soft Drink (Small)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Soft Drink (Medium)" value="Soft Drink (Medium)" onChange={appendConcession}/>
                    <Form.Check type="checkbox" label="Soft Drink (Large)" value="Soft Drink (Large)" onChange={appendConcession}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={sendData}>
                    Book!
                </Button>
            </Form>
    </Card>
        </>
     );
}
 
export default BookingForm;