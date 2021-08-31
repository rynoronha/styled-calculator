# Styled Calculator App

This is a front-end styled calculator app, built using React.js and SASS.

## Start the app

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage

Note that this app does not perform calculations. The `handleClick()` handler will be hooked into the stubbed out`readInput()` function that will be responsible for processing the inputs and performing calculations.

- There are two available themes to choose from, `default` and `alt`. Click the "TOGGLE THEME" button to toggle between them.
- Any number button that is pressed should be registered in the display. Note that like most calculators, leading zeros will not display unless followed by a decimal.
- Any non-number button will clear the screen when pressed, and will remain in a "pressed" state until pressed again.
- The calculator should be useable across different screen/viewport sizes, and should maintain its dimensions.
