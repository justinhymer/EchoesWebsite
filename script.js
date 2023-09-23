const outputElement = document.getElementById("output");
const inputElement = document.getElementById("input");
const inputSection = document.getElementById("inputContainer");
const mobileOutputEl = document.getElementById("mobileOutput");
const mobileInputEl = document.getElementById("mobileInput");
const mobileSection = document.getElementById("mobileInputContainer");
const workingDirectory = document.getElementsByClassName("directory");
const directoryContents =
  document.getElementsByClassName("directory").innerHTML;
const root = `C:\\`;
const info = `${root}info`;
const credits = `${root}credits >`;
const concept_art = `${root}concept_art >`;
const contact = `${root}contact >`;

const insertAfter = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode);
};

let textToAnimate = document.createElement("span");
textToAnimate.classList = "pre";
let txt = null;
let i = 0;
let speed = 35;

const animate = () => {
  if (i < txt.length) {
    document.querySelector("span").innerHTML += txt.charAt(i);
    i++;
    setTimeout(animate, speed);
  }
};

// document.addEventListener('DOMContentLoaded',function(e){
//   // array with texts to type in typewriter
//   var dataText = [ "Utrecht.", "Full Service.", "Webdevelopment.", "Wij zijn Codefield!"];

//   // type one text in the typwriter
//   // keeps calling itself until the text is finished
//   function typeWriter(text, i, fnCallback) {
//     // chekc if text isn't finished yet
//     if (i < (text.length)) {
//       // add next character to h1
//      document.querySelector("span").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

//       // wait for a while and call this function again for next character
//       setTimeout(function() {
//         typeWriter(text, i + 1, fnCallback)
//       }, 100);
//     }
//     // text finished, call callback if there is a callback function
//     else if (typeof fnCallback == 'function') {
//       // call callback after timeout
//       setTimeout(fnCallback, 700);
//     }
//   }
//   // start a typewriter animation for a text in the dataText array
//    function StartTextAnimation(i) {
//      if (typeof dataText[i] == 'undefined'){
//         setTimeout(function() {
//           StartTextAnimation(0);
//         }, 20000);
//      }
//      // check if dataText[i] exists
//     if (i < dataText[i].length) {
//       // text exists! start typewriter animation
//      typeWriter(dataText[i], 0, function(){
//        // after callback (and whole text has been animated), start next text
//        StartTextAnimation(i + 1);
//      });
//     }
//   }
//   // start the text animation
//   StartTextAnimation(0);
// });

displayWelcome();
mobileWelcome();

// Directory Command handler -- WRITE LOGIC TO CHECK DIRECTORY BEFORE EXECUTING A COMMAND
function directoryHandler() {
  const command = input.trim().toLowerCase();
  switch (command) {
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
      // Added spaces between lines for "easier to read" text. Helpful when outputting large amounts of text. -- Moody
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
      insertAfter(textToAnimate, mobileSection);
      animate();
      break;
    // Users can naviagte directories. Console directory updates accordingly -- Moody
    case "cd info":
      for (i = 0; i < workingDirectory.length; i++) {
        workingDirectory[i].textContent = `${info}`;
      }
      output("");
      output("in the info directory");
      break;
    case "cd credits":
      for (i = 0; i < workingDirectory.length; i++) {
        workingDirectory[i].textContent = `${credits}`;
      }
      output("");
      output("in the credits directory");
      break;
    case "cd concept_art":
      for (i = 0; i < workingDirectory.length; i++) {
        workingDirectory[i].textContent = `${concept_art}`;
      }
      output("");
      output("in the concept_art directory");
      break;
    case "cd contact":
      for (i = 0; i < workingDirectory.length; i++) {
        workingDirectory[i].textContent = `${contact}`;
      }
      output("");
      output("in the contact directory");
      break;
    case "cd ..":
      for (i = 0; i < workingDirectory.length; i++) {
        workingDirectory[i].textContent = `${root}`;
      }
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
  text = null;
  textToAnimate.remove();
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

// this sizing fits onto an iPhone SE (375px wide). -- Moody
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
    output(">" + ` ${inputText}`);
    handleCommand(inputText);
    inputElement.value = "";
  }
});

mobileInputEl.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    let inputText = mobileInputEl.value;
    output(">" + ` ${inputText}`);
    handleCommand(inputText);
    mobileInputEl.value = "";
  }
});

// document.body.insertBefore(fragment, document.body.childNodes[0]);
