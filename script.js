/* import ScrollReveal from 'scrollreveal';
 */

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



/* transparent header */
document.addEventListener('DOMContentLoaded', function() {
  const header = document.getElementById('main-header');
  const hero = document.getElementById('header-section');
  
  // Only proceed if both header and hero elements exist
  if (header && hero) {
    function updateHeaderBackground() {
      const heroBottom = hero.getBoundingClientRect().bottom;
      
      if (heroBottom > 0) {
        header.classList.add('transparent');
        header.classList.remove('solid');
      } else {
        header.classList.remove('transparent');
        header.classList.add('solid');
      }
    }
    
    // Use passive listener for better scroll performance
    window.addEventListener('scroll', updateHeaderBackground, { passive: true });
    
    // Call once to set initial state
    updateHeaderBackground();
  }
});
document.addEventListener('DOMContentLoaded', function() {
    new Swiper('.swiper', {
      // Optional parameters
      loop: true,
      slidesPerView: 1.25,
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
          slidesPerView: 1.25,
        },
      },
    });
  });


/*   var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logo-slider").appendChild(copy);

 */
gsap.fromTo('.hero-img-img', {
  scaleX: 0,
  transformOrigin: 'left center'
}, {
  scaleX: 1,
  duration: 1,
  ease: 'power4'
});

gsap.fromTo('.hero-img-container-img', {
  scaleX: 0,
  transformOrigin: 'left center'
}, {
  scaleX: 1,
  duration: 1,
  ease: 'power4',
  delay: 0.5 // Small delay for a staggered effect
});

// Scroll animations
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

gsap.utils.toArray('.from-left').forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
      once: true // This ensures the animation only happens once
    },
    x: -100,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

gsap.utils.toArray('.from-center').forEach((element) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 90%",
      toggleActions: "play none none none",
      once: true // This ensures the animation only happens once
    },
    opacity: 0,
    duration: 2,
    ease: "power2.in"
  });
});


gsap.utils.toArray('.from-bottom-socials').forEach((element, index) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 100%",
      toggleActions: "play none none none"
    },
    y: 100,
    opacity: 0,
    duration: 0.5,
    ease: "sine.in",
    delay: index * 0.25 // Delays each animation by 0.5s more than the previous one
  });
});
gsap.utils.toArray('.from-right').forEach((element, index) => {
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 100%",
      toggleActions: "play none none none"
    },
    x: 100,
    opacity: 0,
    duration: 0.5,
    ease: "sine.in",
    delay: index * 0.25 // Delays each animation by 0.5s more than the previous one
  });
});
gsap.utils.toArray('.timeline-item').forEach((element, index) => {
  const direction = index % 2 === 0 ? '-100%' : '100%'; // Alternates direction for each element
  
  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: direction, // Moves the element from left or right based on the direction variable
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

/* 
gsap.from(".from-left", {
  scrollTrigger: { trigger: ".from-left", start: "top 80%" },
  x: -100, opacity: 0, duration: 1, ease: "power2.out"
}); */
gsap.from(".from-top", {
  scrollTrigger: { trigger: ".from-top", start: "top 80%" },
  y: -100, opacity: 0, duration: 1, ease: "power2.out"
});
/* 
const TitleBottomSmall = document.querySelectorAll(".TitleBottomSmall path");
for (let i = 0; i < TitleBottomSmall.length; i++) {
  console.log(`Letter ${i} is ${TitleBottomSmall[i].getTotalLength()}`);
} */

document.addEventListener('DOMContentLoaded', function() {
  const svg = document.querySelector(".titleBottomSmall");
  const originalDisplay = svg.style.display;
  svg.style.display = 'block';
  
  const paths = svg.querySelectorAll("path");
  for (let i = 0; i < paths.length; i++) {
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
  }
  
  svg.style.display = originalDisplay;
});
const comparaisonContainer = document.querySelector('.comparaison_container')
document.querySelector('.slider-range').addEventListener('input', (e)=>{
  comparaisonContainer.style.setProperty('--position',`${e.target.value}%`);
})

document.getElementById('cs-form-490').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  var name = document.getElementById('name-490').value;
  var email = document.getElementById('email-490').value;
  var phone = document.getElementById('phone-490').value;
  var findUs = document.getElementById('find-490').value;
  var message = document.getElementById('message-490').value;
  
  // Construct the message
  var whatsappMessage = "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Phone: " + phone + "\n" +
                        "How Did You Find Us: " + findUs + "\n" +
                        "Message: " + message;
  
  // Encode the message for URL
  var encodedMessage = encodeURIComponent(whatsappMessage);
  
  // Construct the WhatsApp URL
  var whatsappUrl = "https://wa.me/212781845710?text=" + encodedMessage;
  
  // Redirect to WhatsApp
  window.open(whatsappUrl, '_blank');
});