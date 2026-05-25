import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import Contact from './pages/Contact';
import About from './pages/About';
import NavSwitch from './components/NavSwitch';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7.5vw] lg:px-[2vw]'>
      <>
    
     < NavSwitch />
   
    </>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collection />} />
        <Route path='/products/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
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
