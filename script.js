const outputElement = document.getElementById('output');
const inputElement = document.getElementById('input');

// Command handler
function handleCommand(input) {
    const command = input.trim().toLowerCase();
    switch (command) {
        case 'info':
            // Display game synopsis
            output("This is the game synopsis.");
            break;
        case 'credits':
            // Display game credits
            output("Game credits go here.");
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

// Function to display available commands
function displayCommands() {
    output("Available Commands:");
    // List your commands here
    output("ls : show directory");
    output("cd : change directory" );
    output("help:show commands")
    //3. Concept Art\n4. Help\n5. Contact\n6. Clear");
    output("\n");
    output("Available Directories:");
    output("info\ncredits\nconcept_art\ncontact")
}

// Function to collect email information
function collectEmailInfo() {
    // Implement email collection logic here
}

// Function to display concept art (modify as needed)
function displayConceptArt() {
    // Implement ASCII art display logic here
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
