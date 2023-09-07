const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");
const mobileOutputEl = document.getElementById("mobileOutput");
const mobileInputEl = document.getElementById("mobileInput");

displayWelcome();
mobileWelcome();

// Command handler
function handleCommand(input) {
  const command = input.trim().toLowerCase();
  switch (command) {
    case "info":
      // Display game synopsis
      output(
        "Echoes of Despair is a retro styled survival horror game that demands strategic teamwork"
      );
      output("as players navigate a cursed mansion.");
      output("With each player controlling a unique character,");
      output(
        "you collaborate and combine your distinct abilities to uncover the mansion's sinister past,"
      );
      output(
        "confront otherworldly threats, and break free from the cycle of terror"
      );
      break;
    case "credits":
      // Display game credits
      output("Director                   : Justin Hymer");
      output("Lead Programmer            : Justin Hymer");
      output("3D Designer                : Justin Hymer");
      output("Monster Voice Actor        : Justin Hymer");
      output("Producer                   : Jake Boerner");
      output("Assistant Programmer       : Kyle Noll");
      output("Website developer          : Andrew Moody");
      output("Original music             : Trace Davidson");
      output("Concept Art                : Brian Hymer");
      output("Boss Voice Actor           : Brian Hymer");
      output("Female Voice Actor         : Makayla Fowler");
      output("Synthesizer Specialist     : Jack P");
      output(
        "Playtesters                : Makayla Fowler, Jack P, RJ Lorenz, Nick Lind, Brandon Ellis"
      );
      break;
    case "concept art":
      // Display ASCII art
      displayConceptArt();
      break;
    case "help":
      // Display available commands
      displayCommands();
      break;
    case "contact":
      // Collect and send an email
      collectEmailInfo();
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
      output(
        "Echoes of Despair is a retro styled survival horror game that demands strategic teamwork"
      );
      output("as players navigate a cursed mansion.");
      output("With each player controlling a unique character,");
      output(
        "you collaborate and combine your distinct abilities to uncover the mansion's sinister past,"
      );
      output(
        "confront otherworldly threats, and break free from the cycle of terror"
      );
      break;

    default:
      // Invalid command
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
  displayWelcome();
  mobileWelcome();
}

function displayWelcome() {
  outputElement.textContent +=
    "Echoes of Despair terminal" +
    "\n" +
    "type 'help' for list of commands and directories";
}

// added different welcome prompt for mobile to simplify the UX w/out losing interactive terminal
function mobileWelcome() {
  mobileOutputEl.textContent +=
    "Echoes of Despair terminal" + "\n" + "type 'uname' for more information";
}

// Function to display available commands
function displayCommands() {
  output("\nAvailable Commands:");
  // List your commands here

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

// This currently doesn't fit correctly on my screen so may need to be redone and made smaller
// -----
// this sizing fits onto an iPhone SE (375px wide). If they've got a mobile smaller than that, it might be time for a new phone. -- Moody
function displayTitle() {
  output(" ______ ______ _   _ _____ ______ ______");
  output("|      |      | | | |     |      |      | ");
  output("|   ___|      | |_| |  _  |    __|  ____| ");
  output("|  |___|     _|     | | | |   |__| |____  ");
  output("|   ___|    | |     | |_| |    __|_____ | ");
  output("|  |___|    |_|  _  |     |   |__ ____| | ");
  output("|______|______|_| |_|_____|______|______| ");
  output("");
  output(" _____ ______");
  output("|     |      | ");
  output("|  _  |   ___| ");
  output("| | | |  |___  ");
  output("| |_| |   ___| ");
  output("|     |  |     ");
  output("|_____|__|    ");
  output("");
  output(" ____  _____ _____ ______ _____ __ _____");
  output("|    ||     |     |      |  _  |  |  _  |   ");
  output("|  _  |  ___|  ___|   _  | |_| |  | | | |   ");
  output("| | | | |___| |___|  |_| |     |  | |_| |_  ");
  output("| |_| |  ___|____ |   ___|     |  |  __   | ");
  output("|     | |___ ___| |  |   |  _  |  | |  |  | ");
  output("|____||_____|_____|__|   |_| |_|__|_|  |__| ");
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
    output(">" + inputText);
    handleCommand(inputText);
    inputElement.value = "";
  }
});

mobileInputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let inputText = mobileInputEl.value;
    output(">" + inputText);
    handleCommand(inputText);
    mobileInputEl.value = "";
  }
});
