



// ============= navbar humburger menu ============ 

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

// ------------------addition------------------substraction------------ 

// Get elements.
// const countDisplay = document.getElementById('count');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');

// Initial count.
// let count = 0;

// Function to update count display.
// function updateCount() {
//   countDisplay.textContent = count;
// }

// Event listener for increment button.
// incrementButton.addEventListener('click', function() {
//   count++;
//   updateCount();
// });

// Event listener for decrement button.
// decrementButton.addEventListener('click', function() {
//   count--;
//   updateCount();
// });

// Function to update count display ................
function updateCount(countDisplay, count) {
  countDisplay.textContent = count;
}

// Initialize counts for each card
// const counts = Array(12).fill(0);
// const countDisplays = document.querySelectorAll('.count');
// const incrementButtons = document.querySelectorAll('.increment');
// const decrementButtons = document.querySelectorAll('.decrement');

// // Event listeners for increment and decrement buttons
// incrementButtons.forEach((button, index) => {
//   button.addEventListener('click', function () {
//     counts[index]++;
//     updateCount(countDisplays[index], counts[index]);
//   });
// });

// decrementButtons.forEach((button, index) => {
//   button.addEventListener('click', function () {
//     // Check if the count is greater than 0 before decrementing
//     if (counts[index] > 0) {
//       counts[index]--;
//       updateCount(countDisplays[index], counts[index]);
//     }
//   });
// });
// .....................closeMenu.....
// -----------------------swipper card-------------------

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: true,
    navigationText: ["<", ">"],
    autoPlay: true
  });
});


// add to cart
document.addEventListener('DOMContentLoaded', function () {
  // Select all increment buttons
  const incrementButtons = document.querySelectorAll('.increment');
  // Select all decrement buttons
  const decrementButtons = document.querySelectorAll('.decrement');

  // Function to update the count and the bag2 span
  function updateCountAndBag(button, increment) {
    // Find the count element
    const countElement = button.parentElement.querySelector('.add');
    // Find the bag2 span
    const bag2Span = button.querySelector('.add');
    // Get the current count
    let count = parseInt(countElement.textContent, 10);
    // Update the count
    count = increment ? count + 1 : Math.max(count - 1, 0);
    // Update the count element's text content
    countElement.textContent = count;
    // Update the bag2 span's text content
    bag2Span.textContent = count;
  }

  // Add event listeners to increment buttons
  incrementButtons.forEach(button => {
    button.addEventListener('click', () => updateCountAndBag(button, true));
  });

  // Add event listeners to decrement buttons
  decrementButtons.forEach(button => {
    button.addEventListener('click', () => updateCountAndBag(button, false));
  });
});