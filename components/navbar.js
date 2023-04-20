
import React from 'react';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

 function Navbar() {
  return (
    <nav className = {styles.Navbar}>
    <container className = "container">
        <ul>
          <li>
            <a href="/">MyWebClass.org</a>
          </li>
          <li>
            <a href="/courses">Courses</a>

          </li>
          <li>
             <a href="/about">About Us</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
          <li>
             <a href="">Log In</a>
          </li>
        </ul>
    </container>
    </nav>

  );
}

export default Navbar;