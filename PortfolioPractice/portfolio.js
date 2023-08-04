
//make the "fname" input required 
let fnameInput = document.getElementById('fname')
fnameInput.setAttribute("required", "required");

//grab button and add event listener
document.getElementById('contact-form').addEventListener("submit", (event) => {
    event.preventDefault();

//Grab the inputs & values
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const stateyoulive = document.getElementById('stateyoulive').value;
    const zip = document.getElementById('zip').value;

//validate 
const firstdivError = document.getElementsByClassName("error")[0];
    if (fname === "" || email ==="") {
        firstdivError.innerText = "name and email field required" 
     } else {
        firstdivError.innerText = ""
    }
//validate email
const secErrorDiv = document.getElementsByClassName("error")[1];
const correctPattern =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!correctPattern.test(email)){
    secErrorDiv.innerText = "Please enter a valid email"
} else{
    secErrorDiv.innerText = "Thank You!"
}


    //console.log() to make sure you're grabbing the thing you want
    console.log(fname);
    console.log(lname);
    console.log(email);
    console.log(phone);
    console.log(address);
    console.log(stateyoulive);
    console.log(zip);


})

