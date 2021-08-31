import React, { useRef } from 'react';
import './button.scss';

export const Button = ({
  value,
  buttonClass,
  width = '25%',
  justifyContent = 'center',
  alignItems = 'center',
  onClick,
}) => {
  const buttonRef = useRef(null);

  return (
    <button
      ref={buttonRef}
      className={`button button-${buttonClass}`}
      style={{
        width: width,
        justifyContent: justifyContent,
        alignItems: alignItems,
      }}
      onClick={() => onClick(value, buttonRef)}
    >
      {value}
    </button>
  );
};
