import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer'
import Navbar from 'components/Navbar';
import { Container} from 'reactstrap';

export default function Layout() {
  return (
    <Container fluid className='g-0'>
       <Navbar data-testid='navbar'/>
           <Outlet />
       <Footer data-testid='footer'/>
    </Container>
  )
}
