(() => {
  const faq = document.querySelector('.faq');
  const headers = faq.querySelectorAll('.faq-item-header');
  headers.forEach((header) => {
    header.onclick = () => {
      header.parentElement.classList.toggle('active');
    };
  });
})();
