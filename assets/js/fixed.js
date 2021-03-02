const fixed = document.querySelector('.fixed');
const activator = document.getElementById('fixed-activator');
const activatorY = activator.offsetTop + window.innerHeight / 2;

window.onscroll = (event) => {
  const { pageYOffset } = window;
  if (pageYOffset > activatorY) fixed.classList.add('active');
  else fixed.classList.remove('active');
};
