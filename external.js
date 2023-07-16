const externalLinkPopup = document.getElementById('externalLinkPopup');
const cancelButton = document.getElementById('cancelButton');
const continueButton = document.getElementById('continueButton');
const externalLinks = document.querySelectorAll('.external-link');

externalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    externalLinkPopup.style.display = 'block';
    continueButton.dataset.url = link.getAttribute('href');
  });
});

cancelButton.addEventListener('click', () => {
  externalLinkPopup.style.display = 'none';
});

continueButton.addEventListener('click', () => {
  const url = continueButton.dataset.url;
  window.open(url, '_blank');
  externalLinkPopup.style.display = 'none';
});
