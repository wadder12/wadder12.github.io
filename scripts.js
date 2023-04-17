
document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
      const main = document.querySelector('main');
      const scrollPosition = window.scrollY;
      main.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    const mainHeading = document.querySelector('main h2');
    const text = mainHeading.textContent;
    let index = 0;
  
    mainHeading.textContent = '';
  
    function typeWriter() {
      if (index < text.length) {
        mainHeading.textContent += text.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
      }
    }
  
    typeWriter();
  });


  const backToTopButton = document.createElement('button');
  backToTopButton.textContent = 'Back to Top';
  backToTopButton.style.position = 'fixed';
  backToTopButton.style.bottom = '20px';
  backToTopButton.style.right = '20px';
  backToTopButton.style.display = 'none';
  document.body.appendChild(backToTopButton);
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });
  
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });



  document.addEventListener('DOMContentLoaded', () => {
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
      <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
      </div>`;
    document.body.appendChild(loader);
  
    setTimeout(() => {
      loader.classList.add('fade-out');
      loader.addEventListener('transitionend', () => {
        loader.remove();
      });
    }, 1000);
  });