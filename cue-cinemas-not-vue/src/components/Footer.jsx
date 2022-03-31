import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

const Footer = () => {
    return ( 
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Cue Not Vue Cinemas
              </h6>
              <p>
               Come and join us at Londons finest cinema with state of the art screens with prices starting from only £100.
              </p>
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
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
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> London, NW11 6SX, UK
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