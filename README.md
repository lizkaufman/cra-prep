# CRA-prep

![npm version](https://img.shields.io/npm/v/cra-prep)

Are you tired of the chores you need to do after you run create-react-app before you can start coding? This package automates the first few chores after running create-react-app, including making a components folder, setting up App folder, moving relevant files, and cleaning out extraneous demo code bits.

## Usage

1. Spin up a React app with create-react-app.
2. Before changing any of the files, make sure you're in your app's root directory, and then run `npx cra-prep`. This will:
   - Set up your component folder (`./src/components/`)
   - Move your app files into `./src/components/App` and update imports
   - Clear out the starter code in the app index.js, CSS, and test files
   - Delete the `logo.svg` file
3. Code your app without the initial drudgery!
