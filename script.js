const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

if (menuToggle && navList) {
  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
}

const scrollToTopButton = document.getElementById("scroll-to-top");

if (scrollToTopButton) {
  window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
  };

  scrollToTopButton.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
}

// dynamic footer year
var footerYear = document.getElementById('footer-year');
if (footerYear) {
  footerYear.textContent = new Date().getFullYear();
}
