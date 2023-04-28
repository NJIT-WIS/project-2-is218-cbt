import React from 'react'
import styles from '../styles/Footer.module.css'
import { MDBFooter, MDBContainer, MDBInput, MDBCol, MDBRow, MDBBtn} from 'mdb-react-ui-kit'
import { MDBIcon} from 'mdbreact'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
import { siteTitle, name } from '../components/layout'

function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{backgroundColor: '#def8fd'}}>
                <div className='me-5 d-none d-lg-block'><span>Get connected with us on social networks:</span></div>
                <div>
                    <a href='https://www.facebook.com/ducthuansidco' className='me-4 text-reset'><MDBIcon fab icon="facebook-f"/></a>
                    <a href='' className='me-4 text-reset' style={{color: 'white' }}><MDBIcon fab icon="twitter"/></a>
                    <a href='' className='me-4 text-reset'><MDBIcon fab icon="google"/></a>
                    <a href='https://www.instagram.com/ai.desires/' className='me-4 text-reset'><MDBIcon fab icon="instagram" /></a>
                    <a href='https://www.linkedin.com/in/2dt/' className='me-4 text-reset'><MDBIcon fab icon='linkedin' /></a>
                    <a href='https://github.com/NJIT-WIS/project-2-is218-cbt' className='me-4 text-reset'><MDBIcon fab icon="github" /></a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'><MDBIcon icon="gem" className="me-3"/>{siteTitle}</h6>
                            <p>Empower your students with web development skill and AI knowledge. Join us in exploring the exciting possibilities at the intersection of these two topics.</p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>COURSES</h6>
                            <p><a href='#!' className='text-reset'>COURSE 1</a></p>
                            <p><a href='#!' className='text-reset'>COURSE 2</a></p>
                            <p><a href='#!' className='text-reset'>COURSE 3</a></p>
                            <p><a href='#!' className='text-reset'>COURSE 4</a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>privacy policy</h6>
                            <p>Your privacy is important to us. Read our <a href='#!' className='text-reset' style={{backgroundColor: '#def8fd'}}>privacy policy</a> to understand how we collect and use your information.</p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />Newark, NJ 07103, USA
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                groupcbt@njit.edu
                            </p>
                            <p><MDBIcon icon="phone" className="me-3" /> + 1 (234) 567-8901</p>
                            <p><MDBIcon icon="print" className="me-3" /> + 1 (234) 567-8901</p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(50, 97, 167, 255)', color: 'white' }}>
                © 2023 Copyright: <a className='text-reset fw-bold' href='/'>{siteTitle}</a>
            </div>
        </MDBFooter>
    );
}

export default Footer;
