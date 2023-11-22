import { Route , Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import HomePage from './Pages/HomePage/HomePage';
import ShoppingCart from './Pages/ShoppingCart/ShoppingCart';
import Checkout from "./Pages/Checkout/Checkout";
import NotFound from './Components/NotFound'


function App() {
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
      </Route>
      <Route path="/shoppingCart" element={<ShoppingCart/>}/>
      <Route path="/checkout" element={<Checkout />}/>
      <Route path="*" element={<NotFound />}/>
    </Routes>
 
  );
}

export default App;
