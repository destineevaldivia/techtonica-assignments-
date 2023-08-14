//Grab display titles
let displayYourChoice = document.getElementById("your-choice");
let displayComputerChoice = document.getElementById('computer-choice');
let displayResults = document.getElementById("result");
//grab all buttons
let displayBtns = document.querySelectorAll('.buttons');
//Add Event listener to the buttons and manipulate
let yourChoice;

displayBtns.forEach(displayBtns => displayBtns.addEventListener('click', (event) => {
    yourChoice = event.target.id
    displayYourChoice.innerHTML = yourChoice;
}));

//generate computer choice
function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
}
generateComputerChoice();

 //results function

 //keep score function best of 3
