const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelectorAll('nav a');

menuBtn.addEventListener('click', () => {
  navLinks.forEach(link => {
    if (link.style.display === 'block') {
      link.style.display = 'none';
    } else {
      link.style.display = 'block';
    }
  });
});
