import React from 'react'
import logo from '../assets/favicon.svg';
import {NavLink} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="flex items-center gap-2 py-4 font-medium">
      <img src={logo} alt="Logo" className="h-10 w-10" />
      <h1 className="text-xl ">
        PhoolsiPyari
      </h1>
      <ul className="ml-auto flex items-center gap-6 text-gray-600">
        <li className="hover:text-gray-900 cursor-pointer transition">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-gray-900" : ""}>
            Home
          </NavLink>
        </li>
        <li className="hover:text-gray-900 cursor-pointer transition">
          <NavLink to="/collections" className={({ isActive }) => isActive ? "text-gray-900" : ""}>
            Collections
          </NavLink>
        </li>
        <li className="hover:text-gray-900 cursor-pointer transition">
          <NavLink to="/cart" className={({ isActive }) => isActive ? "text-gray-900" : ""}>
            Cart
          </NavLink>
        </li>
        <li className="hover:text-gray-900 cursor-pointer transition">
          <NavLink to="/orders" className={({ isActive }) => isActive ? "text-gray-900" : ""}>
            Orders
          </NavLink>
        </li>
        <li className="hover:text-gray-900 cursor-pointer transition">
          <NavLink to="/profile" className={({ isActive }) => isActive ? "text-gray-900" : ""}>
            Profile
          </NavLink>
        </li>
      </ul>
     </div>
  )
}

export default Navbar
