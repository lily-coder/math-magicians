/* eslint no-unused-vars: 0 no-undef: 0 */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/home',
      text: 'Home',
    },
    {
      id: 2,
      path: '/calculator',
      text: 'Calculator',
    },
    {
      id: 3,
      path: '/quote',
      text: 'Quote',
    },
  ];
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setNavbarOpen(false);
  };
  return (
    <nav className='navBar'>
      <h1 className='math-magicians-header'>Math Magicians</h1>
      <ul className='navbar'>
        {links.map((link) => {
          const r = '';
          return (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName='active-link'
                onClick={() => closeMenu()}
                exact
              >
                {link.text}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
