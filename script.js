// Debounce function for performance optimization
function debounce(func, wait = 20) {
  let timeout;
  return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// DOM elements
const uniqueButton = document.getElementById("unique-button");
const uniqueHamburger = document.querySelector("#unique-button .hamburger");
const uniqueNavMenu = document.getElementById("unique-nav-menu");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.getElementById('main-header');
const hero = document.getElementById('header-section');

// Hamburger menu functionality
uniqueButton.addEventListener("click", () => {
  const currentState = uniqueButton.getAttribute("data-state");
  const isOpened = !currentState || currentState === "closed";
  uniqueButton.setAttribute("data-state", isOpened ? "opened" : "closed");
  uniqueButton.setAttribute("aria-expanded", isOpened.toString());
});

function toggleMobileMenu() {
  uniqueHamburger.classList.toggle("active");
  uniqueNavMenu.classList.toggle("active");
}

uniqueHamburger.addEventListener("click", toggleMobileMenu);
navLinks.forEach(n => n.addEventListener("click", toggleMobileMenu));

// Transparent header
function updateHeaderBackground() {
  if (header && hero) {
      const heroBottom = hero.getBoundingClientRect().bottom;
      header.classList.toggle('transparent', heroBottom > 0);
      header.classList.toggle('solid', heroBottom <= 0);
  }
}

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
  fastScrollEnd: true,
  preventOverlaps: true
});

// Lazy load GSAP animations
function initGSAPAnimations() {
  // Hero image animation
  gsap.fromTo('.hero-img-img, .hero-img-container-img', {
      scaleX: 0,
      transformOrigin: 'left center'
  }, {
      scaleX: 1,
      duration: 1,
      ease: 'power4',
  });

  // Responsive animations
  let mm = gsap.matchMedia();

  mm.add("(min-width: 768px)", () => {
      // Desktop animations
      animateElements('.from-bottom, .from-left, .from-right, .from-top', true);
  });

  mm.add("(max-width: 767px)", () => {
      // Mobile animations
      animateElements('.from-bottom, .from-left, .from-right, .from-top', false);
  });

  // Common animations
  animateFromCenter();
  animateBottomSocials();
  animateTimelineItems();
}

function animateElements(selector, isDesktop) {
  gsap.utils.toArray(selector).forEach((element) => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: isDesktop ? "top 80%" : "top 90%",
              toggleActions: "play none none none",
              once: true
          },
          y: element.classList.contains('from-bottom') ? (isDesktop ? "10vh" : "5vh") : 0,
          x: element.classList.contains('from-left') ? (isDesktop ? "-10vw" : "-5vw") : 
             (element.classList.contains('from-right') ? (isDesktop ? "10vw" : "5vw") : 0),
          opacity: 0,
          duration: isDesktop ? 1 : 0.8,
          ease: "power2.out"
      });
  });
}

function animateFromCenter() {
  gsap.utils.toArray('.from-center').forEach((element) => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: "top 90%",
              toggleActions: "play none none none",
              once: true
          },
          opacity: 0,
          duration: 2,
          ease: "power2.in"
      });
  });
}

function animateBottomSocials() {
  gsap.utils.toArray('.from-bottom-socials').forEach((element, index) => {
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: "top 100%",
              toggleActions: "play none none none"
          },
          y: "5vh",
          opacity: 0,
          duration: 0.5,
          ease: "sine.in",
          delay: index * 0.25
      });
  });
}

function animateTimelineItems() {
  gsap.utils.toArray('.timeline-item').forEach((element, index) => {
      const direction = index % 2 === 0 ? '-5vw' : '5vw';
      gsap.from(element, {
          scrollTrigger: {
              trigger: element,
              start: "top 80%",
              toggleActions: "play none none none"
          },
          x: direction,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
      });
  });
}

// Form submission
function handleFormSubmission(e) {
  e.preventDefault();
  
  const formData = {
      name: document.getElementById('name-490').value,
      email: document.getElementById('email-490').value,
      phone: document.getElementById('phone-490').value,
      findUs: document.getElementById('find-490').value,
      message: document.getElementById('message-490').value
  };
  
  const whatsappMessage = Object.entries(formData)
      .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
      .join('\n');
  
  const encodedMessage = encodeURIComponent(whatsappMessage);
  const whatsappUrl = `https://wa.me/212781845710?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
  if (header && hero) {
      window.addEventListener('scroll', debounce(updateHeaderBackground), { passive: true });
      updateHeaderBackground();
  }

  // Swiper initialization
  new Swiper('.swiper', {
      loop: true,
      slidesPerView: 1.25,
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
          delay: 2500,
          disableOnInteraction: true,
      },
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      breakpoints: {
          600: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 1.25,
          },
      },
  });

  // Lazy load GSAP animations
  initGSAPAnimations();

  // Form submission
  const form = document.getElementById('cs-form-490');
  if (form) {
      form.addEventListener('submit', handleFormSubmission);
  }
});