(() => {
  const faq = document.querySelector('.faq');
  const buttons = faq.querySelectorAll('.faq-button');
  buttons.forEach((button) => {
    button.onclick = () => {
      button.parentElement.parentElement.classList.toggle('active');
    };
  });
})();
