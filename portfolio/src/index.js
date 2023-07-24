const burger = document.querySelector(".burger")
const nav = document.querySelector(".nav-links")
const navLinks = document.querySelectorAll(".nav-links li");
console.log(navLinks);
burger.addEventListener("click", () =>{
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) =>{
    link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.4}s`;
  });
});

const logos = document.querySelectorAll('.logo');
    
    logos.forEach((logo) => {
      logo.addEventListener('mouseover', () => {
        logo.style.backgroundColor = '#ff8a00';
      });

      logo.addEventListener('mouseout', () => {
        logo.style.backgroundColor = '#fff';
      });
    });
