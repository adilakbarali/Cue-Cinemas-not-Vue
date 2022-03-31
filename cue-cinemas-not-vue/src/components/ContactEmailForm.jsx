import { Form, Button } from 'react-bootstrap';

const ContactEmailForm = () => {
    return ( 
        <>
        <h3>Let us know what you think!</h3>
        <form id="contact-form" >
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>
/* //         <div>
//         <h1>Contact</h1><br></br>
//         <Form>
//           <Form.Group controlId="formBasicName">           
//           <Form.Label>Name</Form.Label>
//           <Form.Control />
//           </Form.Group>

//          <Form.Group controlId="formBasicEmail">
//          <Form.Label>Email</Form.Label>
//          <Form.Control/>
//          </Form.Group>
//         <Form.Group controlId="formBasicTextField">
//         <Form.Label>Message</Form.Label>
//         <Form.Control/>
//         </Form.Group>
//         <Button variant="succes" type="submit">Submit
//         </Button>
//       </Form>
//    </div> */
    )
}
 
export default ContactEmailForm;