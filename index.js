const fs = require("fs");

function prepFiles() {
  if (!checkFiles()) {
    //✅
    console.log(
      "This isn't a fresh CRA app. Remember to use cra-prep straight after you use create-react-app!"
    );
  }
  console.log(
    "Sweet, this is a fresh CRA app. Let's get started tidying it up so you can code! 😎"
  );
  makeComponentFolders(); //✅
  moveAppFiles(); //✅
  clearOutStarterCode();
}

prepFiles();

//----- Helper functions: -----

function checkFiles() {
  const expectedCraFiles = [
    ".git",
    ".gitignore",
    "README.md",
    "node_modules",
    "package-lock.json",
    "package.json",
    "public",
    "src",
  ];
  const actualFiles = fs.readdirSync("./");
  const fileCheck = expectedCraFiles.reduce((acc, cur) => {
    if (!actualFiles.includes(cur)) {
      return false;
    }
    return acc;
  }, true);

  const readmeCheck = fs
    .readFileSync("./README.md", "utf-8")
    .includes("# Getting Started with Create React App");

  const srcFiles = fs.readdirSync("./src");
  const noComponentsFolderCheck =
    !srcFiles.map((file) => file.toLowerCase()).includes("components") &&
    srcFiles.includes("App.js") &&
    srcFiles.includes("logo.svg");

  return [fileCheck, readmeCheck, noComponentsFolderCheck].every(
    (check) => check === true
  );
}

function makeComponentFolders() {
  fs.mkdirSync("./src/components");
  fs.mkdirSync("./src/components/App");
}

function moveAppFiles() {
  const oldPaths = ["./src/App.js", "./src/App.css", "./src/App.test.js"];
  const newPaths = [
    "./src/components/App/index.js",
    "./src/components/App/App.css",
    "./src/components/App/App.test.js",
  ];
  oldPaths.forEach((path, i) => {
    fs.renameSync(path, newPaths[i]);
  });
}

function clearOutStarterCode() {
  // TODO: in root index.js, update line 4 import path to './components/App'
  // TODO: delete logo.svg

  const oldAppContents = fs.readFileSync(
    "./src/components/App/index.js",
    "utf-8"
  );
  let newAppContents = oldAppContents.replace(
    `import logo from './logo.svg';`,
    ""
  );
  if (newAppContents[0] === `\n`) {
    newAppContents = newAppContents.slice(1);
  }
  const oldJSX = newAppContents
    .split('<div className="App">')[1]
    .split("</div>")[0];
  const newJSX = "<h1>Hello world!</h1>";
  newAppContents = newAppContents.replace(oldJSX, newJSX);
  fs.writeFileSync("./src/components/App/index.js", newAppContents);

  const newAppCSSContents = `.App {

}`;
  fs.writeFileSync("./src/components/App/App.css", newAppCSSContents);

  const newAppTestContents = `describe("Your first describe block", () => {
    test("Your first test string", () => {
      const expected = 2;
      const actual = 1 + 1;
      expect(expected).toBe(actual);
    });
  });
  `;
  fs.writeFileSync("./src/components/App/App.test.js", newAppTestContents);
}
