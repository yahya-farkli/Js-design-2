const uniqueButton = document.getElementById("unique-button");

uniqueButton.addEventListener("click", () => {
    const currentState = uniqueButton.getAttribute("data-state");

    if (!currentState || currentState === "closed") {
        uniqueButton.setAttribute("data-state", "opened");
        uniqueButton.setAttribute("aria-expanded", "true");
    } else {
        uniqueButton.setAttribute("data-state", "closed");
        uniqueButton.setAttribute("aria-expanded", "false");
    }
});

const uniqueHamburger = document.querySelector("#unique-button .hamburger");
const uniqueNavMenu = document.getElementById("unique-nav-menu");

uniqueHamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    uniqueHamburger.classList.toggle("active");
    uniqueNavMenu.classList.toggle("active");
}

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    uniqueHamburger.classList.remove("active");
    uniqueNavMenu.classList.remove("active");
}


document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1.5,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: true,
        /* autoplay:false */
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
        
        600: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1.5,
        },
      },
    });
  });


  var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);