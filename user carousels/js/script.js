
var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  navigation: {
    nextEl: "#carousel-btn-next",
    prevEl: "#carousel-btn-prev",
  },

  breakpoints:{
      0: {
          slidesPerView: 1,
      },
      600: {
          slidesPerView: 2,
      },
      950: {
          slidesPerView: 3,
      },
  },
});
































// for setting hover to not alowed when at the end
// Select the elements
const cards = document.querySelectorAll("li");
const nextBtn = document.getElementById("carousel-btn-next");
const prevBtn = document.getElementById("carousel-btn-prev");

// Define the current index
let currentIndex = 0;


// Define the next function
function nextCard() {
  prevBtn.disabled = false;
  prevBtn.style.cursor = "pointer";
console.log(currentIndex)
   // Check if the next button should be disabled
   if (currentIndex === cards.length - 3) {
    nextBtn.disabled = true;
    nextBtn.style.cursor = "not-allowed";
    
  } else {
    
    nextBtn.disabled = false;
    nextBtn.style.cursor = "pointer";
    currentIndex++;
  }
  
}

// Define the previous function
function prevCard() {
  nextBtn.disabled = false;
  nextBtn.style.cursor = "pointer";
  console.log(currentIndex)
  // Check if the previous button should be disabled
  if (currentIndex === 0) {
    prevBtn.disabled = true;
    prevBtn.style.cursor = "not-allowed";
  } else {
    prevBtn.disabled = false;
    prevBtn.style.cursor = "pointer";
  currentIndex--;
  }
 
}

// Add event listeners to the buttons
nextBtn.addEventListener("click", nextCard);
prevBtn.addEventListener("click", prevCard);









// // for swiping carousel 
// // Select the elements
// const cards = document.querySelectorAll("li");
// const nextBtn = document.getElementById("carousel-next");
// const prevBtn = document.getElementById("carousel-prev");

// // Define the current index
// let currentIndex = 0;

// // Define the update function
// function updateCards() {
//     console.log(currentIndex)
//   // Loop through the cards
//   for (let i = 0; i < cards.length; i++) {
//     // Check if the card is within the visible range
//     if (i >= currentIndex && i < currentIndex + 3) {
//       // Show the card
//       cards[i].style.display = "block";
//     } else {
//       // Hide the card
//       cards[i].style.display = "none";
//     }
    
//   }
// }

// // Define the next function
// function nextCard() {


//    // Check if the next button should be disabled
//    if (currentIndex === cards.length - 3) {
//     // Disable the next button
//     nextBtn.disabled = true;
//     // Change the hover to not-allowed
//     nextBtn.style.cursor = "not-allowed";
    
//   } else {
    
//     // Enable the next button
//     nextBtn.disabled = false;
//     // Change the hover to default
//     nextBtn.style.cursor = "pointer";
//     // Increment the current index
//     currentIndex++;
//   }
//   updateCards();
// }

// // Define the previous function
// function prevCard() {

//   // Check if the previous button should be disabled
//   if (currentIndex === 0) {
//     // Disable the previous button
//     prevBtn.disabled = true;
//     // Change the hover to not-allowed
//     prevBtn.style.cursor = "not-allowed";
//   } else {
//     // Enable the previous button
//     prevBtn.disabled = false;
//     // Change the hover to default
//     prevBtn.style.cursor = "pointer";
//       // Decrement the current index
//   currentIndex--;
//   }
 
//   // Update the display of the cards
//   updateCards();
// }

// // Add event listeners to the buttons
// nextBtn.addEventListener("click", nextCard);
// prevBtn.addEventListener("click", prevCard);

// // Call the update function initially
// updateCards();








// // for swiping carousel 
// // Select the elements
// const cards = document.querySelectorAll("li");
// const nextBtn = document.getElementById("carousel-next");
// const prevBtn = document.getElementById("carousel-prev");

// // Define the current index
// let currentIndex = 0;

// // Define the update function
// function updateCards() {
//     console.log(currentIndex)
//   // Loop through the cards
//   for (let i = 0; i < cards.length; i++) {
//     // Check if the card is within the visible range
//     if (i >= currentIndex && i < currentIndex + 3) {
//       // Show the card
//       cards[i].style.display = "block";
//     } else {
//       // Hide the card
//       cards[i].style.display = "none";
//     }
    
//   }
// }

// // Define the next function
// function nextCard() {

// console.log(currentIndex)
//    // Check if the next button should be disabled
//    if (currentIndex === cards.length - 3) {
//     // Disable the next button
//     nextBtn.disabled = true;
//     // Change the hover to not-allowed
//     nextBtn.style.cursor = "not-allowed";
    
//   } else {
    
//     // Enable the next button
//     nextBtn.disabled = false;
//     // Change the hover to default
//     nextBtn.style.cursor = "pointer";
//     // Increment the current index
//     currentIndex++;

//     for (let i = 0; i < cards.length; i++) {
//         cards[i].classList.add = "move-next";
      
//     }
//   }
// }

// // Define the previous function
// function prevCard() {

//   // Check if the previous button should be disabled
//   if (currentIndex === 0) {
//     // Disable the previous button
//     prevBtn.disabled = true;
//     // Change the hover to not-allowed
//     prevBtn.style.cursor = "not-allowed";
//   } else {
//     // Enable the previous button
//     prevBtn.disabled = false;
//     // Change the hover to default
//     prevBtn.style.cursor = "pointer";
//       // Decrement the current index
//   currentIndex--;

//   for (let i = 0; i < cards.length; i++) {
//     cards[i].classList.add = "move-prev";
  
// }

  
//   }

// }

// // Add event listeners to the buttons
// nextBtn.addEventListener("click", nextCard);
// prevBtn.addEventListener("click", prevCard);


