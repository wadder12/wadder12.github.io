
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



  async function updateBotStatus() {
    try {
      const response = await fetch("http://104.223.99.182:27030/api/bot-status");
      if (response.ok) {
        const statusData = await response.json();
        document.getElementById("status-text").innerText = `Status: ${statusData.status}`;
      } else {
        document.getElementById("status-text").innerText = "Error fetching status";
      }
    } catch (error) {
      document.getElementById("status-text").innerText = "Error fetching status";
    }
  }
  
  // Call the function when the page loads
  updateBotStatus();


  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    // Scroll-triggered animation for icons
    const icons = document.querySelectorAll('nav ul li a img');
    window.addEventListener('scroll', () => {
      icons.forEach(icon => {
        const iconTop = icon.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (iconTop < windowHeight * 0.8) {
          icon.classList.add('icon-fade-in');
        }
      });
    });
  
    // Dark mode toggle
    const darkModeToggle = document.createElement('button');
    darkModeToggle.textContent = 'Toggle Dark Mode';
    darkModeToggle.style.position = 'fixed';
    darkModeToggle.style.top = '20px';
    darkModeToggle.style.right = '20px';
    document.body.appendChild(darkModeToggle);
  
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  });


  document.addEventListener('DOMContentLoaded', () => {
    // Dynamic year in the footer
    const currentYear = new Date().getFullYear();
    const yearSpan = document.createElement('span');
    yearSpan.textContent = currentYear;
    document.querySelector('footer p').appendChild(yearSpan);
  
    // Mobile navigation menu
    const mobileNavButton = document.createElement('button');
    mobileNavButton.innerHTML = '&#9776;'; // Unicode character for "hamburger" menu icon
    mobileNavButton.classList.add('mobile-nav-button');
    document.body.appendChild(mobileNavButton);
  
    mobileNavButton.addEventListener('click', () => {
      const nav = document.querySelector('nav');
      nav.classList.toggle('mobile-nav');
    });
  
    // Animated progress bar
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#f5f5f5';
    progressBar.style.width = '0%';
    progressBar.style.zIndex = '1001';
    document.body.appendChild(progressBar);
  
    window.addEventListener('scroll', () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / windowHeight) * 100;
      progressBar.style.width = scrollPercentage + '%';
    });
  });
  