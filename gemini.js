import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

//Navbar active changing
var navContainer = document.getElementById("navbarNav");

// Get all buttons with class="btn" inside the container
var btns = navContainer.getElementsByClassName("nav-link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}

let mybutton = document.getElementById("scrollTopBtn");

// When the user scrolls down 220px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 220 ||
    document.documentElement.scrollTop > 220
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const scrolltracker = document.querySelector(".scroll-tracker");
const scrollTrackingTimeline = new ScrollTimeline({
  source: document.scrollingElement,
  orientation: "block",
  scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

scrolltracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)'],
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }
);
//Manufacturing cards fade in
window.addEventListener('scroll', reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 50;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('revealsactive');
    }
    else{
      reveals[i].classList.remove('revealsactive');
    }
  }
}


