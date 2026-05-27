import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import ProductDetail from './pages/ProductDetail';
import NavSwitch from './components/NavSwitch';
import PaymentSuccess from "./pages/PaymentSuccess";
import PaymentFailed from "./pages/PaymentFailed";
import Orders from "./pages/Orders";
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7.5vw] lg:px-[2vw] '>
      <>
    
     < NavSwitch />
   
    </>
      <Routes>
        <Route path="/payment-success" element={<PaymentSuccess />}/>
        <Route path="/payment-failed" element={<PaymentFailed />}/>
        <Route path='/' element={<Home />} />
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/collections' element={<Collection />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/orders/:id' element={<OrderDetails />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
  
      </Routes>
      
    </div>
  ) 
}

export default App
