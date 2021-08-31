import React from 'react';
import './display.scss';

export const Display = ({ backgroundColor, displayText }) => (
  <div
    className="display"
    style={{
      backgroundColor: backgroundColor,
    }}
  >
    {displayText}
  </div>
);
