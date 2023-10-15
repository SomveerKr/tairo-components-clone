const form = document.getElementById("form");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const textarea = document.getElementById("textarea");


form.addEventListener("submit", e => {
  e.preventDefault();
  checkInputs();
  const allSuccessElements =document.querySelectorAll(".success");
  allSuccessElements.length ===4 && setTimeout(showToast, 1000)

});

function checkInputs() {
  //Get the value the form field.
  const firstNameValue = firstName.value.trim(); //trim to delete blanc space.
  const lastNameValue = lastName.value.trim(); //trim to delete blanc space.
  const emailValue = email.value.trim();
  const textareaValue = textarea.value.trim();

  if (firstNameValue === "") {
    setErrorInput(firstName, "First Name can't be empty.");
  } else {
    setSuccessInput(firstName);
  }
  if (lastNameValue === "") {
    setErrorInput(lastName, "Last Name can't be empty.");
  } else {
    setSuccessInput(lastName);
  }

  //###################################
  if (emailValue === "") {
    setErrorInput(email, "Enter a valid email address");
  } else {
    validateEmail(emailValue) && setSuccessInput(email);
  }

  //###################################
  if (textareaValue === "") {
    setErrorInput(textarea, "Message connot be empty");
  } else {
    setSuccessInput(textarea);
  }

}

function setErrorInput(input, errorMessage) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = errorMessage;
  formControl.className = "form__control error";
}

function setSuccessInput(input) {
  const formControl = input.parentElement;
  formControl.className = "form__control success";
}

function validateEmail(email) {
  let regular_expressions = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regular_expressions.test(String(email).toLocaleLowerCase());
}

// display toaster function
// JavaScript code for showing and hiding the display-toaster element
// Get the display-toaster element by its id
var displayToaster = document.getElementById("display-toaster");

// Get the remove-toast element by its id
var removeToast = document.getElementById("remove-toast");

// Define a function to show the display-toaster element
function showToast() {
  // Add the toast-show class to the display-toaster element
  displayToaster.classList.add("toast-show");
  
  // Set a timeout to hide the display-toaster element after 5 seconds
  setTimeout(hideToast, 5000);
}

// Define a function to hide the display-toaster element
function hideToast() {
  // Remove the toast-show class from the display-toaster element
  displayToaster.classList.remove("toast-show");
 
}

// Add a click event listener to the remove-toast element
removeToast.addEventListener("click", hideToast);


