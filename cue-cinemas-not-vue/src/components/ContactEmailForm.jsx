import { Form, Button } from 'react-bootstrap';

const ContactEmailForm = () => {
    return ( 
        <>
        <br></br>
        <h3>Let us know what you think!</h3>
        <form id="contact-form" >
    <div className="form-group">
        <label className="moviesTitle" htmlFor="name">Name</label>
        <input type="text" className="form-control" />
    </div>
    <div className="form-group">
        <label className="moviesTitle" htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label className="moviesTitle" htmlFor="message">Message</label>
        <textarea className="form-control" rows="5"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
</>

    )
}
 
export default ContactEmailForm;