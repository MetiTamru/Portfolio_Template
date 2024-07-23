// script.js
const texts = ["Frontend Developer", "UI/UX Designer"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
let isDeleting = false;

(function type() {
  if (count === texts.length) {
    count = 0;
  }
  currentText = texts[count];
  if (isDeleting) {
    letter = currentText.slice(0, --index);
  } else {
    letter = currentText.slice(0, ++index);
  }

  document.querySelector(".typing-effect").textContent = letter;

  if (!isDeleting && letter.length === currentText.length) {
    isDeleting = true;
    setTimeout(type, 2000); // Pause before starting to delete
  } else if (isDeleting && letter.length === 0) {
    isDeleting = false;
    count++;
    setTimeout(type, 500); // Pause before starting to type new text
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
})();

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  document.getElementById(tabname).classList.add("active-tab");
  event.currentTarget.classList.add("active-link");
}
function Menu(e){
  let list = document.querySelector('ul');
  e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}

document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  const options = {
    threshold: 0.6 // Trigger when 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove('active-link');
          if (link.getAttribute('href').substring(1) === entry.target.id) {
            link.classList.add('active-link');
          }
        });
      }
    });
  }, options);
 
  sections.forEach(section => {
    observer.observe(section);
  });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});