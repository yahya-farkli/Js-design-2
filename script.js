/* 

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const currentState = button.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
      button.setAttribute("data-state", "opened");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("data-state", "closed");
      button.setAttribute("aria-expanded", "false");
    }
  });
});
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
 */

const button = document.querySelector('.btn');
let hoverTimeout;

button.addEventListener('mouseenter', () => {
    clearTimeout(hoverTimeout);
    hoverTimeout = setTimeout(() => {
        button.style.backgroundColor = 'var(--button-hover)';
    }, 200);
});

button.addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout);
    button.style.backgroundColor = 'var(--button-bg)';
});

document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        autoplay:false
      },
      // If you want pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      // Responsive breakpoints
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
    });
  });