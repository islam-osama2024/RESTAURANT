const menuToggle = document.getElementById('menu-toggle');
const navList = document.getElementById('nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

window.onscroll = function() {
  let scrollToTopButton = document.getElementById("scroll-to-top");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      scrollToTopButton.style.display = "block";
  } else {
      scrollToTopButton.style.display = "none";
  }
};

document.getElementById("scroll-to-top").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
