import React from 'react';
import { Row, Col } from 'reactstrap';
import AboutUs from './AboutUs';
import Links from './Links';
import Contact from './Contact';
import SocialMedia from './SocialMedia';
export default function Footer() {

  const links = [
    { path: 'https://www.google.com/', title: 'گوگل',id:'1' },
    { path: 'https://www.digikala.com/', title: 'دیجی کالا',id:'2' },
    { path: 'https://www.google.com/', title: 'گوگل',id:'3' },
    { path: 'https://www.digikala.com/', title: 'دیجی کالا',id:'4' },
  ]
  const linkSection = links.map((link) => <Links key={link.id} path={link.path} title={link.title} />)
  
  return (
    <Row>
      <footer className="text-white mt-2 bg-dark" >
        <Row className='p-3 mt-2'>
          <AboutUs />
          <Col lg='3' md='6' className='mb-4 mb-md-0 p-2'>
            <h5>لینک های مرتبط</h5>
            <ul className="list-unstyled mb-0" style={{ fontSize: '14px' }}>
              {linkSection}
            </ul>
          </Col>
          <AboutUs />
          <Contact />
        </Row>
        <SocialMedia /> 
      </footer>
    </Row>

  )
}
