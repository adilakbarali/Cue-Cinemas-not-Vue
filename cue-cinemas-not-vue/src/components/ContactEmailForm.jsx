import React, {Component} from "react";
import emailjs from "emailjs-com";


class ContactForm extends Component {    
    constructor(props) {    
        super(props);    
        this.state = {    
            name: '',    
            email: '',    
            message: '',       
            formErrors: {}    
        };    
    
        this.initialState = this.state;    
    }    
    
    handleFormValidation() {    
        const { name, email, message } = this.state;    
        let formErrors = {};    
        let formIsValid = true;    
         
        if (!name) {    
            formIsValid = false;    
            formErrors["nameErr"] = "Name is required.";    
        }    
        
        if (!email) {    
            formIsValid = false;    
            formErrors["emailErr"] = "Email is required.";    
        }    
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {    
    
            formIsValid = false;    
            formErrors["emailErr"] = "Invalid email.";    
        }    
       
        if (!message) {    
            formIsValid = false;    
            formErrors["messageErr"] = "This field can not be left empty.";    
        }    

 
        this.setState({ formErrors: formErrors });    
        return formIsValid;    
    }    
    
    handleChange = (e) => {    
        const { name, value } = e.target;    
        this.setState({ [name]: value });    
    }    
    
    handleSubmit = (e) => {   
        e.preventDefault();

    emailjs.sendForm('service_8h535gp', 'template_3t8jo1l', e.target, 'uFgWOuAuQZlnzB6aA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      }); 
        if (this.handleFormValidation()) {    
            alert('Your message has been sent!')    
            this.setState(this.initialState)    
        }    
    }    
    
    render() {    
    
        const { nameErr, emailErr, messageErr } = this.state.formErrors;    
    
        return (  
            <> 
            <br></br>
            <div className="formDiv"> 
                <h3 style={{ textAlign: "center" }} >Contact Us Form </ h3>    
                <div>   
                    <form onSubmit={this.handleSubmit}>    
                        <div>    
                            <label className="opening-table-body" htmlFor="name">Name</label>    
                            <input type="text" name="name"    
                                value={this.state.name}    
                                onChange={this.handleChange}    
                                placeholder="Please enter your name.."    
                                className={nameErr ? ' showError' : ''} />    
                            {nameErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{nameErr}</div>    
                            }    
    
                        </div>
                        <div>    
                            <label className="opening-table-body" htmlFor="email">Email</label>    
                            <input type="text" name="email"    
                                value={this.state.email}    
                                onChange={this.handleChange}    
                                placeholder="Please enter your email.."    
                                className={emailErr ? ' showError' : ''} />    
                            {emailErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{emailErr}</div>    
                            }    
    
                        </div>    
                        <div>    

                            <label htmlFor="text" className="opening-table-body">Message</label>    
                            <br />
                            <br />
                            <textarea type="text" name="message" rows={5} cols={76}
                                value={this.state.message}    
                                onChange={this.handleChange}    
                                placeholder="Please enter your message.."    
                                className={messageErr ? ' showError' : ''} />    
                            {messageErr &&    
                                <div style={{ color: "red", paddingBottom: 10 }}>{messageErr}</div>    
                            }    
                        </div>    
                        <input type="submit" value="Submit" />    
                    </form>    
                </div>    
            </div >  
            </>  
        )    
    }    
}    
    
export default ContactForm;