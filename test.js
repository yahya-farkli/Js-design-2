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

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.from-bottom').forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true // This ensures the animation only happens once
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});


gsap.utils.toArray('.from-bottom-socials').forEach((element, index) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "sine.in",
    delay: index * 0.25 // Delays each animation by 0.5s more than the previous one
  });
});

gsap.from(".from-left", {
  scrollTrigger: { trigger: ".from-left", start: "top 80%" },
  x: -100, opacity: 0, duration: 1, ease: "power2.out"
});
gsap.from(".from-top", {
  scrollTrigger: { trigger: ".from-top", start: "top 80%" },
  y: -100, opacity: 0, duration: 1, ease: "power2.out"
});