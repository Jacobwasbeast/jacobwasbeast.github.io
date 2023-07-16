AOS.init();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var emailButton = document.getElementById('emailButton');
var email = document.getElementById('email');

emailButton.addEventListener('click', function() {
    if (emailButton.innerText === 'Show Email') {
        email.style.display = 'block';
        emailButton.innerText = 'Copy Email';
    } else if (emailButton.innerText === 'Copy Email') {
        var range = document.createRange();
        range.selectNode(email);
        window.getSelection().addRange(range);

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'Email copied to clipboard.' : 'Unable to copy email.';
            alert(msg);
        } catch(err) {
            console.log('Oops, unable to copy');
        }

        window.getSelection().removeAllRanges();
    }
});


const carouselViewport = document.querySelector('.projects-carousel-viewport');
const carouselInner = document.querySelector('.projects-carousel-inner');
const prevProjectsBtn = document.querySelector('.projects-prev-btn');
const nextProjectsBtn = document.querySelector('.projects-next-btn');

const cardWidth = carouselViewport.offsetWidth / 3;
let currentIndex = 0;

prevProjectsBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});

nextProjectsBtn.addEventListener('click', () => {
  const numCards = carouselInner.children.length;
  if (currentIndex < numCards - 3) {
    currentIndex++;
    carouselInner.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
});
