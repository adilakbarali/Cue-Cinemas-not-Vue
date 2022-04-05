
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { PayPalButton } from "react-paypal-button-v2";

const Payments = () => {

    const [bookingData, setBookingData] = useState("");

    const findBooking = useRef(null);

    const [totalCost, setTotalCost] = useState("");

    const getBooking = () => {
        axios.get(`http://localhost:4494/booking/get/${findBooking.current.value}`) // Sending a get request to the server
          .then((response) => { 
            setBookingData(response.data);
            })
        };

        useEffect(() => {
            if(bookingData !== ""){
                let adultCost = 2.0 * bookingData.number_of_adults
                let childCost = 0.75 * bookingData.number_of_children
                let concessionCost = 1.25 * bookingData.concessions.length
                setTotalCost(adultCost + childCost + concessionCost);  
            }
        },[bookingData]);

    return (
        <> 
        <p>Please Enter your Booking Reference Number (Paste into the box below): </p>
        <Form.Control type="text" placeholder="Booking Reference Number" ref={findBooking}/>
        <Button variant="primary" onClick={getBooking}>Find Booking!</Button>
        {bookingData !== "" &&
        <>
        <p>Hello {bookingData.fullName}!</p>
        <p>You have booked a total of {bookingData.number_of_seats} tickets, including {bookingData.number_of_adults} Adults and {bookingData.number_of_children} Children</p>
        <p>Alongside this, you have ordered {bookingData.concessions.length} items from our concessions.</p>
        </>
        }
        {totalCost !== "" &&
        <>
        <p>The total cost of this booking is: £{totalCost}</p>
        <PayPalButton amount={totalCost} onSuccess={(details, data) => { alert("Transaction completed by " + details.payer.name.given_name);}}/>
        </>
        }    
        </>
        
     );
}
 
export default Payments;