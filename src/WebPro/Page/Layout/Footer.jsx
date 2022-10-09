import React from "react";
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class Footer extends React.Component{
    render(){
        return(
            <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
              <div className='me-5 d-none d-lg-block'>
                <span>Get connected with us on social networks:</span>
              </div>
      
              <div>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="google" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon fab icon="linkedin" />
                </a>
              </div>
            </section>
      
            <section className=''>
              <MDBContainer className='text-center text-md-start mt-5'>
                <MDBRow className='mt-3'>
                  <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Map</h6>
                      <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.047778248037!2d105.78056661502951!3d21.03077419308518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4ca83a8b6f%3A0x129d06cbf7f8acca!2zMTcgUC4gRHV5IFTDom4sIEThu4tjaCBW4buNbmcgSOG6rXUsIEPhuqd1IEdp4bqleSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1664351977389!5m2!1svi!2s" 
                      style={{width:'100%'}}
                      allowfullscreen="" 
                      loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                  </MDBCol>
      
                  <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                      AUTO SMART
                    </h6>
                    <p>
                     Chất Lượng Sản Phẩm - Chất Lượng Phục Vụ & Sự Hài Lòng Của Khách Hàng Là Mục Tiêu Cốt Lõi Của <b>AUTO SMART</b>
                    </p>
                  </MDBCol>
      
                  <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Link</h6>
                    <p>
                      <a href='#!' className='text-reset'>
                        <MDBIcon fab icon="facebook-f" /> Auto Smart
                      </a>
                    </p>
                    <p>
                      <a href='#!' className='text-reset'>
                      <img src="https://legacynyplorg-live.s3.amazonaws.com/s3fs-public/tiktok-xxl.png" width='18' /> Auto Smart
                      </a>
                    </p>
                    <p>
                      <a href='#!' className='text-reset'>
                        <MDBIcon fab icon="youtube" /> Auto Smart
                      </a>
                    </p>
                  </MDBCol>
      
                  <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                    <p>
                      <MDBIcon icon="home" className="me-2" />
                      17, Duy Tân, Cầu Giấy, Hà Nội
                    </p>
                    <p>
                      <MDBIcon icon="envelope" className="me-3" />
                      AutoSmart@gmail.com
                    </p>
                    <p>
                      <MDBIcon icon="phone" className="me-3" /> 0362912699
                    </p>
                    <p>
                      <MDBIcon icon="print" className="me-3" /> 0242246886
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </section>
      
            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
              © 2022 Copyright:
              <a className='text-reset fw-bold' href='#'>
                AutoSmart
              </a>
            </div>
          </MDBFooter>
        )
    }
}
export default Footer;