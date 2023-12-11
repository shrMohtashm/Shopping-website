import { React } from 'react';
import { Row, Navbar as BootstrapNavbar} from 'reactstrap';
import ShoppingCartButton from './ShoppingCartButton';

export default function Navbar() {
  return (
    <Row>
      <BootstrapNavbar expand='md' color="light" light fixed='top' className='shadow'>
        <ShoppingCartButton/>
      </BootstrapNavbar>
    </Row>
  )
}
