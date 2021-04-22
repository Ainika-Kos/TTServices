import React, { FC } from 'react';
import './button.scss';

type ButtonProps = {
  buttonClass?: string;
  onClick?: () => void;
  text: string,
};

const Button:FC<ButtonProps> = ({ buttonClass, onClick, text }) => {
  return (
    <button type='button' className={`btn ${buttonClass}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;