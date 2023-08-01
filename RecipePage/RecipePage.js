//centered the heading using JS
let headingEl = document.querySelector("#heading");
heading.style.textAlign = "center";

//centered the description using JS
let descriptionEl = document.querySelector("#description");
descriptionEl.style.textAlign = "center";

//created img element for the other recipes, <img>
let otherRecipesEls = document.createElement("img")
    otherRecipesEls.src = "http://www.cannellevanille.com/wp-content/uploads/2013/07/Frittata_AranGoyoaga_edoc2784.jpg";
    otherRecipesEls.alt = "Photo of Ricotta Fritatta";

    document.body.appendChild("MoreRecipesTitle");
    
//button
// let bodyParagraph = document.getElementsByTagName('body')

// document.addEventListener("click", function() {
//     let userInput = prompt("What's your favorite color", "type basic color here");

//     let changeBackGroundColor = function(input) {
//       document.body.style.backgroundColor = input;
//     };
  
//     changeBackGroundColor(userInput);
//   });

  //
  let bodyParagraph = document.getElementsByTagName('body');
document.addEventListener("click", function() {
  let userInput = prompt("What's your favorite color?", "type here");
  let userInput2 = prompt("What text color do you want?", "type here");
  let changeBackGroundColor = function(input) {
    document.body.style.backgroundColor = input;
  }
  let changeTextColor = function(input) {
    document.body.style.color = input;
  }
  changeBackGroundColor(userInput);
  changeTextColor(userInput2);
});
    



