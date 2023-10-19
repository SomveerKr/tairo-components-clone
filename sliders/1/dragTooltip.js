// Get the sliderContainer element
var sliderContainer = document.getElementById("slider-tooltip");

// Get the sliderTooltip element
var sliderTooltip = document.getElementById("slider-container");



// Declare some variables to store the mouse position and the element position
var mouseX = 0;
var elemX = 0;

// Declare a variable to store whether the element is being dragged or not
var isDragging = false;

// Declare a variable to store the range value
var range = 0;

// Add a function to calculate the range value based on the element position and the sliderContainer width
function getRange(x) {
  return Math.round((x / (sliderContainer.offsetWidth - sliderTooltip.offsetWidth)) * 100);
}

// Add a function to update the text inside the sliderTooltip id div with the range value
function updateText() {
  sliderTooltip.innerHTML = "Range: " + range;
}

// Add a mousedown event listener to the sliderTooltip element
sliderTooltip.addEventListener("mousedown", function(e) {
  // Set the isDragging flag to true
  isDragging = true;

  // Get the current mouse position
  mouseX = e.clientX;

  // Get the current element position
  elemX = sliderTooltip.offsetLeft;
});

// Add a mousemove event listener to the document
document.addEventListener("mousemove", function(e) {
  // Check if the element is being dragged
  if (isDragging) {
    // Calculate the new mouse position
    var newMouseX = e.clientX;

    // Calculate the new element position
    var newElemX = elemX + (newMouseX - mouseX);

    // Limit the new element position within the sliderContainer boundaries
    if (newElemX < 0) {
      newElemX = 0;
    }
    if (newElemX + sliderTooltip.offsetWidth > sliderContainer.offsetWidth) {
      newElemX = sliderContainer.offsetWidth - sliderTooltip.offsetWidth;
    }
 
    // Set the new element position
    sliderTooltip.style.left = newElemX + "px";

    // Calculate and update the range value
    range = getRange(newElemX);
    updateText();
  }
});

// Add a mouseup event listener to the document
document.addEventListener("mouseup", function(e) {
  // Set the isDragging flag to false
  isDragging = false;
});

// Update the text once at the beginning
updateText();