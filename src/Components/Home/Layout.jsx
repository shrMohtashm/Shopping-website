import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer'
import Navbar from '../Navbar';
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
