const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");
const mobileOutputEl = document.getElementById("mobileOutput");
const mobileInputEl = document.getElementById("mobileInput");
const directoryEl = document.getElementsByClassName("directory");
const directoryContents =
  document.getElementsByClassName("directory").innerHTML;
const root = `C:\\`;
const info = `${root}info >`;
const credits = `${root}credits >`;
const concept_art = `${root}concept_art >`;
const contact = `${root}contact >`;

// animation vars
let txt = null;
let i = 0;
let speed = 35;

// directory vars
const directoriesArr = ["root", "info", "credits", "concept_art", "contact"];
let currentDirectory = null;

const animate = (text) => {
  if (i < txt.length) {
    mobileOutputEl.textContent += txt.charAt(i);
    i++;
    setTimeout(animate, speed);
  } else if (i == txt.length) {
  }
};

displayWelcome();
mobileWelcome();

function directoryHandler(input) {
  const command = input.trim().toLowerCase();
  switch (command) {
    case "help":
      // Display available commands
      displayCommands();
      break;
    case "clear":
      // Clear the console
      clearConsole();
      break;
    case "info":
      // Display game synopsis
      output("");
      output(
        "Echoes of Despair is a retro styled survival horror game that demands strategic teamwork"
      );
      output("as players navigate a cursed mansion.");
      output("");
      output("With each player controlling a unique character,");
      output(
        "you collaborate and combine your distinct abilities to uncover the mansion's sinister past,"
      );
      output(
        "confront otherworldly threats, and break free from the cycle of terror."
      );
      break;
    case "credits":
      // Display game credits
      output("");
      output("Director                : Justin Hymer");
      output("");
      output("Lead Programm           : Justin Hymer");
      output("");
      output("3D Designer             : Justin Hymer");
      output("");
      output("Monster Voice Actor     : Justin Hymer");
      output("");
      output("Producer                : Jake Boerner");
      output("");
      output("Assistant Programmer    : Kyle Noll");
      output("");
      output("Website developer       : Andrew Moody");
      output("");
      output("Original music          : Trace Davidson");
      output("");
      output("Concept Art             : Brian Hymer");
      output("");
      output("Boss Voice Actor        : Brian Hymer");
      output("");
      output("Female Voice Actor      : Makayla Fowler");
      output("");
      output("Synthesizer Specialis   : Jack P");
      output("");
      output(
        "Playtesters             : Makayla Fowler, Jack P, RJ Lorenz, Nick Lind, and Brandon Ellis"
      );
      break;
    case "concept art":
      // Display ASCII art
      displayConceptArt();
      break;
    case "contact":
      // Collect and send an email
      collectEmailInfo();
      break;
    // Directory Navigation
    case "cd ..":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${root}>`;
      }
      output("");
      currentDirectory = directoriesArr[0];
      break;
    default:
      // Invalid command
      output("");
      output("Invalid command. Type 'help' for available commands.");
  }
}

// Command handler
function handleCommand(input) {
  const command = input.trim().toLowerCase();
  switch (command) {
    case "help":
      // Display available commands
      displayCommands();
      break;
    case "clear":
      // Clear the console
      clearConsole();
      break;
    case "uname":
      // Display Game Info
      output("");
      displayTitle();
      output("");
      txt = `Echoes of Despair is a retro styled survival horror game that demands strategic teamwork\nas players navigate a cursed mansion.\n\nWith each player controlling a unique character,\nyou collaborate and combine your distinct abilities to uncover the mansion's sinister past,\nconfront otherworldly threats, and break free from the cycle of terror.`;
      animate(txt);
      break;
    // Directory Navigation
    case "cd info":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${info}`;
      }
      output("");
      output("in the info directory");
      currentDirectory = directoriesArr[1];
      break;
    case "cd credits":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${credits}`;
      }
      output("");
      output("in the credits directory");
      currentDirectory = directoriesArr[2];
      break;
    case "cd concept_art":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${concept_art}`;
      }
      output("");
      output("in the concept_art directory");
      currentDirectory = directoriesArr[3];
      break;
    case "cd contact":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${contact}`;
      }
      output("");
      output("in the contact directory");
      currentDirectory = directoriesArr[4];
      break;
    case "cd ..":
      for (i = 0; i < directoryEl.length; i++) {
        directoryEl[i].textContent = `${root}>`;
      }
      output("");
      currentDirectory = directoriesArr[0];
      break;
    default:
      // Invalid command
      output("");
      output("Invalid command. Type 'help' for available commands.");
  }
}

// Function to display output in the console
function output(text) {
  outputElement.textContent += text + "\n";
  mobileOutputEl.textContent += text + "\n";
}

// Function to clear the console
function clearConsole() {
  outputElement.textContent = "";
  mobileOutputEl.textContent = "";
  location.reload();
  displayWelcome();
  mobileWelcome();
}

function displayWelcome() {
  outputElement.textContent +=
    "Echoes of Despair terminal" +
    "\n" +
    "type 'help' for list of commands and directories";
  currentDirectory = directoriesArr[0];
}

function mobileWelcome() {
  mobileOutputEl.textContent +=
    "Echoes of Despair terminal" + "\n" + "type 'uname' for more information";
  currentDirectory = directoriesArr[0];
}

// Function to display available commands
function displayCommands() {
  output("\nAvailable Commands:");

  // only shows directory list when in "root"
  if (currentDirectory !== "root") {
    output("ls             : show directory");
    output("cd             : change directory");
    output("pwd            : show the present directory");
    output("help           : show commands");
    output("{command} help : Shows help for a specific command");
    output("clear          : clears the screen");
  } else {
    output("uname          : show system information");
    output("ls             : show directory");
    output("cd             : change directory");
    output("pwd            : show the present directory");
    output("help           : show commands");
    output("{command} help : Shows help for a specific command");
    output("clear          : clears the screen");
    output("\n");
    output("Available Directories:");
    output("info\ncredits\nconcept_art\ncontact");
  }
}
// Function to display title art
function displayTitle() {
  output(" ____ ____ _   _ _____ ____ _____");
  output("|    |    | | | |     |    |     | ");
  output("|  __|    | |_| |  _  |  __|  ___| ");
  output("| |__|   _|     | | | | |__| |___  ");
  output("|  __|  | |     | |_| |  __|____ | ");
  output("| |__|  |_|  _  |     | |__ ___| | ");
  output("|____|____|_| |_|_____|____|_____| ");
  output("");
  output(" _____ ______");
  output("|     |      | ");
  output("|  _  |   ___| ");
  output("| | | |  |___  ");
  output("| |_| |   ___| ");
  output("|     |  |     ");
  output("|_____|__|    ");
  output("");
  output(" ____  ____ _____ _____ _____ _ _____");
  output("|    ||    |     |     |  _  | |  _  |   ");
  output("|  _  |  __|  ___|  _  | |_| | | | | |   ");
  output("| | | | |__| |___| |_| |     | | |_| |_  ");
  output("| |_| |  __|____ |  ___|     | |  __   | ");
  output("|     | |__ ___| | |   |  _  | | |  |  | ");
  output("|____||____|_____|_|   |_| |_|_|_|  |__| ");
}

// Function to collect email information
function collectEmailInfo() {
  // Implement email collection logic here
}

// Function to display concept art (modify as needed)
function displayConceptArt() {
  // Implement ASCII art display logic here
  // todo: have it just display an image that takes up the entire console
  // if user presses any key while on this page, take back to console with same content as before
}

// Event listener for user input
inputElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let inputText = inputElement.value;
    output(`${root}` + ` ${inputText}`);
    handleCommand(inputText);
    inputElement.value = "";
  }
});

mobileInputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let inputText = mobileInputEl.value;
    output(` > ${inputText}`);

    if (currentDirectory === "root") {
      console.log(currentDirectory);
      handleCommand(inputText);
      mobileInputEl.value = "";
    } else {
      // harder limits on directory-specific commands, see `10.9.2023 EoD Notes` for example
      console.log(currentDirectory);
      directoryHandler(inputText);
      mobileInputEl.value = "";
    }
  }
});

// 10.9.2023 EoD Notes - Moody
// ------------------------------------
// Directory functionality Updates:
// - "cd .." works in both root and subfolders
// - commands are being limited to specific directories
//  = example: "info" is invalid in root, but displays game info when in info directory
//  = further limitation may be desirable
//    - example: "credits" will run in ANY directory outside of root
// - Available Directories only displays in root
// ------------------------------------
// To-Do:
// - harder limits on directory-specific commands per above example with "credits" (function for each directory's commands?)
// - program "pwd"
// - program "ls"
