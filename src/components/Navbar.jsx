import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav>
       <NavLink to="/"> <li>Home</li></NavLink>
       <NavLink to="/About"> <li>About</li></NavLink>
       <NavLink to="/LOgin"> <li>Login</li></NavLink>
       <NavLink to="/Home"> <li>Home</li></NavLink>
      </nav>
    </div>
  )
}

export default Navbar;
