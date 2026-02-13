/*
1.Variable
1a. Data types (it is required in TypeScript)
1b. Scope
2.Functions - Arguments/Parameters 
2a. Types of functions
  1. Function that have Parameters
  2. Functions that dont have parameters
  3. Function that have a return value
  4. Functions that dont have a return value


3.Conditional Statements
4.Loops
5.Event Listener
6.Error Handling - Debug
7. Pop Ups - alert, confirm, prompt. 
*/

// let gender = prompt("what is your gender");
// alert("your gender is " + gender);
// let name_of_user = prompt("Hi, what is your name:");
// alert("Have a good day " + name_of_user);

//Rules to name your variables
// let name = "Farhan"; //String
// let age = 27; //Integer
// let city = "bangalore";
// let gender = "male";
// let height = 176.34; //Float
// let plays_football = true; //Boolean

// function greet() {
//   //Commands that the function is supposed to execute
//   alert("Your greeting in coming in");
//   alert("3....");
//   alert("2....");
//   alert("1....");
//   alert("Hello there!! I hope you like my web app!");
// }

// function wash_utensils(){
//   //1. Pick up the utensil
//   //2. Apply soap
//   //3. wash it
//   //4. Wash with water
//   //5. Dry it off
// }

// // greet();

// function add_two_numbers(a, b){
//   //If you are expecting an output from a function,
//   // then you will have to put a return in it.
//   // let result = 3 + 4; //Hardcoded
//   // let result = ;
//   return a + b;
// }

// // let output_from_function = add_two_numbers(10,40); //Arguments OR Parameters

// // console.log("The value that was returned from the function is " + output_from_function);

// // let gender = prompt("Hi, are you a girl or a boy?");

// // if (gender == "boy") {
// //   alert("Hi Handsome!");
// // }
// // else if (gender == "girl"){
// //   alert("Hi Beautiful!");
// // }

// // else{
// //   alert("please enter a valid input!");
// // }

// let day = parseInt(prompt("Which day number?"));
// //Whenever you store any input, gets stored as a String

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//  case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//  case 7:
//     console.log("Sunday");
//     break;
//  default:
//     console.log("Please enter a valid input");
//     break;
// }

// const students = ["Raj", "Priya", "Neha", "Sonal", "Isha", "Raju", "Midhila", "Lakshay"];

// for(let i=0; i < 5; i++ ) {
//   console.log("name of the student is "+ students[i]);
// }

// Event Listeners

// Main JavaScript Code starts below

//Task 1 - Make admin login button work

//1.Get the control of the admin login section from HTML to JS
//we will have to store in a javascript variable.

//2.Define a function that changes the style property 'display' to 'block' using the same variable in which you stored the control of the admin-login section.

//3. Either call the function using onClick in HTML (OR) define a click event listener to make it work.

let control_of_adminlogin_section = document.getElementById("admin-login");

function show_admin_login() {
  control_of_adminlogin_section.style.display = "block";
}

// control_of_adminlogin_section.addEventListener('click', function(){
//   control_of_adminlogin_section.style.display = 'block';
// })

//Task 2 - Make admin login section work - check username and password and show user responses.
//1. get the control of the FORM in order to put a SUBMIT event listener on top of it.
//2. Get the data that the user writes in the username and password text boxes
//3.Set the type of the login button as -> submit button, to trigger submit event listener when it is clicked.

let control_of_admin_form = document.getElementById("admin-form");

control_of_admin_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let username = document.getElementById("input_user").value.trim();
  let password = document.getElementById("input_pass").value.trim();

  let storedUsername = "Smriti";
  let storedPassword = "kiarachan";

  //decision to be taken based on a certain condition - using if to find that out
  //If you have 2 equal signs - normal comparison / You only check the value 1 and "1" will be the same
  //If you have 3 equal signs - Strict comparison / You check for the TYPE of the data as well / 1 and "1" will NOT be the same.

  //LOGIC GATES????
  if (username == storedUsername && password == storedPassword) {
    alert("login successful!");
    //You have to hide the admin login section and display the user responses section.
    control_of_adminlogin_section.style.display = "none";
    document.getElementById("user-responses").style.display = "block";

    //We will have to call a function that will fetch all the user responses from the backend.
    fetchUserResponses();
  } else {
    alert("Access Denied!");
  }
});

//Task - make the Contact me section work.
//You will have to store the responses from the users that they write in the name, email and the message textboxes.

//Get the values stored in the 3 textboxes
//Send it to the Chrome local storage that we are using as our temp backend.

//get the control of the contact me form.
let control_of_contactme_form = document.getElementById("contact-form");

control_of_contactme_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("input_name").value.trim();
  let email = document.getElementById("input_email").value.trim();
  let message = document.getElementById("input_msg").value.trim();
  let date = new Date().toLocaleString(); //converting date to String

  let response = { name, email, message, date };

  //-----The part where we interact with the backend starts here------

  //We will maintain a JAVASCRIPT LIST which will hold responses from the backend.
  //We will add the response item at the end of this LIST and send the entire updated list back to the DB.

  //When something comes from the DB it is in JSON format, so to convert into JS object we use JSON.parse()
  let database_list = JSON.parse(localStorage.getItem("tempDB")) || [];

  database_list.push(response); //Updating the list with the current user response object.

  localStorage.setItem("tempDB", JSON.stringify(database_list)); //Sending the entire updated list to localStorage.

  //alert("Thank you for your message, will get back to you soon!");
  this.reset();
  document.getElementById("confirm-response").style.color = "green";
  document.getElementById("confirm-response").innerHTML =
    "Thank you for your message, will get back to you soon!";
});

//Task - Make toggle theme button work.
//TASK - Getting responses back from the DB and showing them in User Responses section.

function fetchUserResponses() {
  let control_of_userResponses = document.getElementById("user-messages");
  let database_list = JSON.parse(localStorage.getItem("tempDB")) || [];

  database_list.forEach((response) => {
    let control_of_newDiv = document.createElement("div");

    control_of_newDiv.innerHTML = `
      <p> Name: ${response.name}</p>
      <p> Email: ${response.email}</p>
      <p> Message: ${response.message}</p>
      <p> Date: ${response.date}</p>
      <hr>
      `;

    control_of_userResponses.append(control_of_newDiv);
  });
}

//Making the toggle theme button work!!

let control_of_toggleTheme = document.getElementById("toggle-theme");
control_of_toggleTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
  
  // Toggle button text
  if (document.body.classList.contains("dark-theme")) {
    control_of_toggleTheme.textContent = "Light theme";
  } else {
    control_of_toggleTheme.textContent = "Dark theme";
  }
});
