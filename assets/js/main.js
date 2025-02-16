  // Animación del contador optimizada
  document.addEventListener("DOMContentLoaded", () => {
      const counter = document.querySelector(".tree-counter");
      const target = parseInt(counter.dataset.count);
      let current = 0;

      // Precalcular ancho
      counter.textContent = target;
      const fixedWidth = counter.offsetWidth;
      counter.style.minWidth = `${fixedWidth}px`;
      counter.textContent = "0";

      const animateCounter = () => {
          if (current < target) {
              current = Math.min(current + Math.ceil(target / 40), target);
              counter.textContent = current;
              requestAnimationFrame(animateCounter);
          }
      };
      requestAnimationFrame(animateCounter);
  });
  document.addEventListener("DOMContentLoaded", () => {
      const typedText = document.getElementById("typed-text");
      const text = "Matías";
      let index = 0;
      const speed = 130;

      function typeCharacter() {
          if (index < text.length) {
              typedText.textContent += text.charAt(index);
              index++;
              setTimeout(typeCharacter, speed);

              // Start cursor animation when typing begins
              if (!typedText.classList.contains("typing-active")) {
                  typedText.classList.add("typing-active");
              }
          }
      }

      // Initialize with empty text
      typedText.textContent = "";

      setTimeout(() => {
          typeCharacter();
      }, 500);
  });

  // Personal tag hover effect
  document.querySelectorAll(".personal-tag").forEach((tag) => {
      tag.addEventListener("mouseover", () => {
          tag.style.transform = "rotate(-2deg) scale(1.05)";
      });

      tag.addEventListener("mouseout", () => {
          tag.style.transform = "none";
      });
  });

  function calculateAge() {
      const birthYear = 2004;
      const birthMonth = 7; // August (0-indexed: 0=January, 7=August)
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const currentMonth = currentDate.getMonth();

      let age = currentYear - birthYear;

      // Subtract 1 if birthday hasn't occurred yet this year
      if (currentMonth < birthMonth) {
          age--;
      }

      return age;
  }

  // Update age display
  document.getElementById("age-display").textContent = `${calculateAge()} años`;

 document.addEventListener("DOMContentLoaded", () => {
     // Counter animation
     const treeCounter = document.querySelector(".metric-value");
     const target = parseInt(treeCounter.dataset.count);
     let current = 0;

     const updateCounter = () => {
         if (current < target) {
             current += Math.ceil(target / 50);
             treeCounter.textContent = Math.min(current, target);
             requestAnimationFrame(updateCounter);
         }
     };

     setTimeout(() => requestAnimationFrame(updateCounter), 500);

     // Particle animation
     setInterval(() => {
         const particle = document.createElement("div");
         particle.className = "particle";
         particle.style.cssText = `
            left: ${Math.random() * 80 + 10}%;
            width: ${Math.random() * 2 + 2}px;
            height: ${Math.random() * 2 + 2}px;
        `;
         document.querySelector(".metric-icon").appendChild(particle);

         anime({
             targets: particle,
             opacity: [0.8, 0],
             translateY: [-15, 0],
             translateX: () => anime.random(-5, 5),
             duration: 1000,
             easing: "easeOutExpo",
             complete: () => particle.remove(),
         });
     }, 1200);
 });
