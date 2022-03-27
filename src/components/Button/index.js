import React, { useState } from 'react';
import styles from './style.module.css';

const Button = ({ onClick, text }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <button className={styles.button} onClick={onClick} type='button'>
        {text}
      </button>
    </>
  );
};

export default Button;
