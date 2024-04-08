



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

// Function to update count display
function updateCount(countDisplay, count) {
  countDisplay.textContent = count;
}

// Initialize counts for each card
const counts = Array(12).fill(0);
const countDisplays = document.querySelectorAll('.count');
const incrementButtons = document.querySelectorAll('.increment');
const decrementButtons = document.querySelectorAll('.decrement');

// Event listeners for increment and decrement buttons
incrementButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    counts[index]++;
    updateCount(countDisplays[index], counts[index]);
  });
});

decrementButtons.forEach((button, index) => {
  button.addEventListener('click', function () {
    // Check if the count is greater than 0 before decrementing
    if (counts[index] > 0) {
      counts[index]--;
      updateCount(countDisplays[index], counts[index]);
    }
  });
});

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