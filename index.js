function prepFiles() {
  // TODO: Check to make sure the correct files are where CRA puts them before running the helper functions to make sure that this isn't accidentally run on the wrong folder
  makeComponentFolders();
  moveAppFiles();
  emptyStarterCode();
}

prepFiles();

//----- Helper functions: -----

function makeComponentFolders() {
  // TODO: create components folder in ./src
  // TODO: create App folder in ./src/components
}

function moveAppFiles() {
  // TODO: move App.js, App.test.js, and App.css into ./src/components/App
  // TODO: rename App.js to index.js
  // TODO: in root index.js, update line 4 import path to './components/App'
  // TODO: remove line 1 of App/index.js (import logo from './logo.svg';)
}

function emptyStarterCode() {
  // TODO: remove line 1 of App/index.js (import logo from './logo.svg';)
  // TODO: delete logo.svg
  // TODO: remove starter code JSX and CSS from App
  // TODO: add in a simple <h1>Hello world!</h1> to the App's JSX to render on the page
}
