import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <br></br>
                <i className='fas fa-gem me-3'></i>Cue Not Vue Cinemas ©
              </h6>
              <Link to="/"> Home Page</Link> <br></br>
              <Link to="/AboutUs"> About Us</Link> <br></br>
              <Link to= "/ContactUs">Contact Us</Link>
              <p>
               Founded in 2022, CueNotVue corporation prides itself on providing comfort and top quality entertainment to people of all backgrounds.
               <br />
               Head over to our contact page to find out more about our policies and what we're proud of.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <br></br>
              <h6 className='text-uppercase fw-bold mb-4'>Connect with us</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Twitter
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Instagram
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Snapchat
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  LinkedIn
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <br></br>
              <h6 className='text-uppercase fw-bold mb-4'>Causes we support</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Children in need
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Refugee helpline
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Macmillan
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Alzheimers Research
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <br></br>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Glasgow, G34 9DL, UK
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                info@cuenotvue.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> 0800 00 1066
              </p>
              <p>
                <i className='fas fa-print me-3'></i> +44 7581 185 744
              </p>
            </div>
          </div>
        </div>
      </section>
    </MDBFooter>
     );
}
 
export default Footer;