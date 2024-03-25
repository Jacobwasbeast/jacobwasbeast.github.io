const externalLinkPopup = document.getElementById('externalLinkPopup');
const cancelButton = document.getElementById('cancelButton');
const continueButton = document.getElementById('continueButton');
const externalLinks = document.querySelectorAll('.external-link');

externalLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault(); 
    const url = link.getAttribute('href');
    const popupLink = document.getElementById('popupLink');
    popupLink.textContent = url;
    popupLink.setAttribute('href', url);
    externalLinkPopup.style.display = 'block';
  });
});

cancelButton.addEventListener('click', () => {
  externalLinkPopup.style.display = 'none';
});

continueButton.addEventListener('click', (event) => {
  event.preventDefault();
  
  const popupLink = document.getElementById('popupLink');
  const url = popupLink.getAttribute('href');
  window.open(url, '_blank');
  externalLinkPopup.style.display = 'none'; 
});
