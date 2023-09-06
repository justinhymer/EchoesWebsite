const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');
displayWelcome();

// Command handler
function handleCommand(input) {
    const command = input.trim().toLowerCase();
    switch (command) {
        case 'info':
            // Display game synopsis
            output("Echoes of Despair is a retro styled survival horror game that demands strategic teamwork as players navigate a cursed mansion.");
            output("With each player controlling a unique character, you collaborate and combine your distinct abilities to uncover the mansion's sinister past, confront otherworldly threats, and break free from the cycle of terror");
            break;
        case 'credits':
            // Display game credits
            output("Director                   : Justin Hymer");
            output("Lead Programmer            : Justin Hymer");
            output("3D Designer                : Justin Hymer");
            output("Monster Voice Actor        : Justin Hymer");
            output("Producer                   : Jake Boerner")
            output("Assistant Programmer       : Kyle Noll")
            output("Website developer          : Andrew Moody");
            output("Original music             : Trace Davidson");
            output("Concept Art                : Brian Hymer");
            output("Boss Voice Actor           : Brian Hymer");
            output("Female Voice Actor         : Makayla Fowler");
            output("Synthesizer Specialist     : Jack P")
            output("Playtesters                : Makayla Fowler, Jack P, RJ Lorenz, Nick Lind, Brandon Ellis")
            break;
        case 'concept art':
            // Display ASCII art
            displayConceptArt();
            break;
        case 'help':
            // Display available commands
            displayCommands();
            break;
        case 'contact':
            // Collect and send an email
            collectEmailInfo();
            break;
        case 'clear':
            // Clear the console
            clearConsole();
            break;
        default:
            // Invalid command
            output("Invalid command. Type 'help' for available commands.");
    }
}

// Function to display output in the console
function output(text) {
    outputElement.textContent += text + '\n';
}

// Function to clear the console
function clearConsole() {
    outputElement.textContent = '';
}

function displayWelcome() {
    output("Echoes of Despair terminal")
    output("type help for list of commands and directories")
}

// Function to display available commands
function displayCommands() {
    output("\nAvailable Commands:");
    // List your commands here
    output("ls             : show directory");
    output("cd             : change directory" );
    output("pwd            : show the present directory")
    output("help           : show commands");
    output("{command} help : Shows help for a specific command")
    output("clear          : clears the screen")
    output("\n");
    output("Available Directories:");
    output("info\ncredits\nconcept_art\ncontact")
}

// This currently doesn't fit correctly on my screen so may need to be redone and made smaller
function displayTitle() {
    output("|       |       |  | |  |       |       |       | |       |       | |      ||       |       |       |   _   |   |    _ |  ");
    output("|    ___|       |  |_|  |   _   |    ___|  _____| |   _   |    ___| |  _    |    ___|  _____|    _  |  |_|  |   |   | ||  ");
    output("|   |___|       |       |  | |  |   |___| |_____  |  | |  |   |___  | | |   |   |___| |_____|   |_| |       |   |   |_||_ ");
    output("|    ___|      _|       |  |_|  |    ___|_____  | |  |_|  |    ___| | |_|   |    ___|_____  |    ___|       |   |    __  |");
    output("|   |___|     |_|   _   |       |   |___ _____| | |       |   |     |       |   |___ _____| |   |   |   _   |   |   |  | |");
    output("|_______|_______|__| |__|_______|_______|_______| |_______|___|     |______||_______|_______|___|   |__| |__|___|___|  |_|");
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
inputElement.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        const inputText = inputElement.value;
        output('>' + inputText);
        handleCommand(inputText);
        inputElement.value = '';
    }
});
