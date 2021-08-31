import React, { useState } from 'react';
import './calculator.scss';
import { Button } from '../button';
import { Display } from '../display';

export const Caluclator = () => {
  const [theme, setTheme] = useState('default');
  const [displayText, setDisplayText] = useState('');

  const togglegTheme = () => {
    theme === 'default' ? setTheme('alt') : setTheme('default');
  };

  const handleClick = (value, buttonRef) => {
    // call reacInput function that will process the value
    // readInput(value)

    const numberButtons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '•'];

    // only display value from number buttons
    if (numberButtons.includes(value)) {
      if (value === '•') {
        value = '.';
      }

      let newDisplayText = '' + displayText.replace(/,/g, '') + value;

      // remove leading 0 if not followed by a decimal
      if (
        newDisplayText.length > 1 &&
        newDisplayText.charAt(0) === '0' &&
        newDisplayText.charAt(1) !== '.'
      ) {
        newDisplayText = newDisplayText.substring(1);
      }
      // limit max number of characters on display
      if (newDisplayText.length >= 7) {
        newDisplayText = newDisplayText.substring(0, 7);
      }
      // format number with thousand separator
      const formattedDisplayText = newDisplayText.replace(
        /\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,
        ','
      );
      setDisplayText(formattedDisplayText);
    } else resetDisplay();

    handleSelectedButton(buttonRef);
  };

  const resetDisplay = () => {
    setDisplayText('');
  };

  // this function keeps the operator buttons selected when pressed by applying the 'active' class
  const handleSelectedButton = (buttonRef) => {
    if (
      (buttonRef.current.classList.contains('button-secondary') ||
        buttonRef.current.classList.contains('button-accent')) &&
      !buttonRef.current.classList.contains('active')
    ) {
      // if any of the accent/operator buttons are selected, unselect them
      if (buttonRef.current.classList.contains('button-accent')) {
        const selectedAccentButtons = document.getElementsByClassName('active');
        for (const element of selectedAccentButtons) {
          element.classList.remove('active');
        }
      }

      buttonRef.current.classList.add('active');
    } else if (
      (buttonRef.current.classList.contains('button-secondary') ||
        buttonRef.current.classList.contains('button-accent')) &&
      buttonRef.current.classList.contains('active')
    ) {
      buttonRef.current.classList.remove('active');
    }
  };

  return (
    <div className="wrapper">
      <h1 className="title">Calculator App</h1>
      <button className="toggle-theme-button" onClick={togglegTheme}>
        TOGGLE THEME
      </button>
      <h2 className="theme-name">Theme: {theme}</h2>
      <div className={`calculator ${theme}-theme`}>
        <Display displayText={displayText} />
        <div className="row">
          <Button
            buttonClass={'secondary'}
            value={'AC'}
            onClick={resetDisplay}
          />
          <Button buttonClass={'secondary'} value={'±'} onClick={handleClick} />
          <Button buttonClass={'secondary'} value={'%'} onClick={handleClick} />
          <Button buttonClass={'accent'} value={'÷'} onClick={handleClick} />
        </div>
        <div className="row">
          <Button buttonClass={'primary'} value={7} onClick={handleClick} />
          <Button buttonClass={'primary'} value={8} onClick={handleClick} />
          <Button buttonClass={'primary'} value={9} onClick={handleClick} />
          <Button buttonClass={'accent'} value={'×'} onClick={handleClick} />
        </div>
        <div className="row">
          <Button buttonClass={'primary'} value={4} onClick={handleClick} />
          <Button buttonClass={'primary'} value={5} onClick={handleClick} />
          <Button buttonClass={'primary'} value={6} onClick={handleClick} />
          <Button buttonClass={'accent'} value={'−'} onClick={handleClick} />
        </div>
        <div className="row">
          <Button buttonClass={'primary'} value={1} onClick={handleClick} />
          <Button buttonClass={'primary'} value={2} onClick={handleClick} />
          <Button buttonClass={'primary'} value={3} onClick={handleClick} />
          <Button buttonClass={'accent'} value={'+'} onClick={handleClick} />
        </div>
        <div className="row">
          <Button
            buttonClass={'primary'}
            justifyContent="flex-start"
            width={'50%'}
            value={0}
            onClick={handleClick}
          />
          <Button
            buttonClass={'primary'}
            alignItems="flex-end"
            value={'•'}
            onClick={handleClick}
          />
          <Button buttonClass={'accent'} value={'='} onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};
