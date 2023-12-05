import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../../components/footer/Footer'
import Navbar from '../../../components/navbar/Navbar';
import { Container} from 'reactstrap';

export default function Layout() {
  return (
    <Container fluid className='g-0'>
       <Navbar />
           <Outlet />
       <Footer />
    </Container >
  )
}
