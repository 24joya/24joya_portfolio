const logos = document.querySelectorAll('.logo');
    
    logos.forEach((logo) => {
      logo.addEventListener('mouseover', () => {
        logo.style.backgroundColor = '#ff8a00';
      });

      logo.addEventListener('mouseout', () => {
        logo.style.backgroundColor = '#fff';
      });
    });

   
    