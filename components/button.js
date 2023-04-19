import React from 'react';
import styles from '../styles/HeroSection.module.css';
function Button(props) {
  return (
    <button className = "Button" onClick={props.onClick}>
      {props.label}
    </button>
  );
}

export default Button;