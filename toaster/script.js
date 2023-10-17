// ----------------------------FOR GETTING INPUT VALUES------------
let userSelectedIcon;
let userSelectedColor;
// Get the input elements by name
var titleInput = document.querySelector("input[name='title']");
var messageInput = document.querySelector("input[name='message']");

// Get the select elements by name
var displayColorTxtElement = document.getElementById("display-color-text");
var displayIconTxtElement= document.getElementById("display-icon-text");
var colorSelectsOptions = document.querySelectorAll("#color-options .option");
var iconSelectsOptions = document.querySelectorAll("#icon-options .option");

// Define a function to handle the input change event
function handleInputChange(event) {
  // Get the name and value of the changed input
  var name = event.target.name;
  var value = event.target.value;

  // Log the name and value to the console
  console.log(name + ": " + value);
  updateToastDetails()
}



// Add event listeners to the input and select elements
titleInput.addEventListener("input", handleInputChange);
messageInput.addEventListener("input", handleInputChange);
colorSelectsOptions.forEach(colorSelectsOption =>{
  colorSelectsOption.addEventListener("click", ()=>{
    const color=colorSelectsOption.innerText;
    userSelectedColor=color;
    const icon=displayIconTxtElement.innerText;
    userSelectedIcon=icon;
    console.log(userSelectedColor)
    console.log(userSelectedIcon)
    updateToastDetails()

  })
})
iconSelectsOptions.forEach(iconSelectsOption =>{
  iconSelectsOption.addEventListener("click", ()=>{
    const icon=iconSelectsOption.innerText;
    console.log(icon)
    userSelectedIcon=icon;
    const color = displayColorTxtElement.innerText;
    userSelectedColor=color;
    console.log(userSelectedColor)
    console.log(userSelectedIcon)
    updateToastDetails()
  })
})



function whichIcon(){
if (userSelectedIcon==="Check icon"){
  return "fa-check"
} else if(userSelectedIcon==="Close icon"){
  return "fa-xmark"
} else if(userSelectedIcon==="Warning icon"){
  return   "fa-triangle-exclamation"
} else if(userSelectedIcon==="Danger icon"){
  return "fa-circle-exclamation"
} else if(userSelectedIcon==="Info icon"){
  return "fa-circle-info"
}
}
function whichColor() {
  if(userSelectedColor==="Primary"){
    return "#6D28D9"
  } else if(userSelectedColor==="Success"){
    return "#0F766E"
  } else if(userSelectedColor==="Info"){
    return "#0369A1"
  } else if(userSelectedColor==="Warning"){
    return "#B45309"
  } else if(userSelectedColor==="Danger"){
    return "#BE123C"
  } else if(userSelectedColor==="Muted"){
    return "#334155"
  }
}
function whichToastProgressClass() {
  if(userSelectedColor==="Primary"){
    return "toast-primary"
  } else if(userSelectedColor==="Success"){
    return "toast-success"
  } else if(userSelectedColor==="Info"){
    return "toast-info"
  } else if(userSelectedColor==="Warning"){
    return "toast-warning"
  } else if(userSelectedColor==="Danger"){
    return "toast-danger"
  } else if(userSelectedColor==="Muted"){
    return "toast-muted"
  }
}


//----------------------For making and displying toaster-----------------------------

const notifications = document.querySelector('.notifications'),
  showToasterBtn = document.getElementById('show-toaster-btn');



const removeToast = (toast) => {
  // const removeToastBTn = document.getElementById()
  toast.classList.add('hide');
  if (toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
  setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
};



// Object containing details for different types of toasts
const updateToastDetails=()=>{
  const toastDetails = {
      icon: whichIcon() || "fa-check",
      title: titleInput.value,
      message: messageInput.value,
      color:whichColor() || "#6D28D9",
      toastClassForProgress:whichToastProgressClass() || "toast-primary"
    
  }
  return toastDetails

}

const createToast = () => {
  // Getting the icon and text for the toast based on the id passed
  const { icon, title, message, color, toastClassForProgress } = updateToastDetails();
  const toast = document.createElement('div'); // Creating a new 'li' element for the toast
  toast.id="toast";
  toast.className = `toast ${toastClassForProgress}`; // Setting the classes for the toast
  
  // Setting the inner HTML for the toast
  toast.innerHTML = `
                        <div style="background:${color}" class="toast-icon">
                        <i class="fa-solid ${icon}"></i>
                        </div>
                         
                         <div class="toast-details">

                         <div class="toast-title">
                         ${title}
                         </div>
                         <div class="toast-message">
                         ${message}
                         </div>
                         </div>
                      <div class="toast-right">
                        <div id="remove-toast-btn" class="remove-icon">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                      </div>

                      `;


  notifications.appendChild(toast); // Append the toast to the notification ul
  // Setting a timeout to remove the toast after the specified duration
  const removeToastBtn = document.getElementById("remove-toast-btn");
  removeToastBtn.addEventListener("click", ()=> removeToast(toast))
  toast.timeoutId = setTimeout(() => removeToast(toast), 5000);

};

// Adding a click event listener to each button to create a toast when clicked
showToasterBtn.addEventListener('click', () => {
  if (document.getElementById("toast") === null){
    return createToast()
  } else {
    // Define a function that checks the condition and increments x
function checkCondition() {
  // If x is equal to 10, clear the interval and return
  if (document.getElementById("toast") === null) {
    
    clearInterval(interval);
    return createToast();
  }
  console.log(document.getElementById("toast"));
}

// Set an interval that calls the checkCondition function every one second
var interval = setInterval(checkCondition, 2000);
  }
  
});





