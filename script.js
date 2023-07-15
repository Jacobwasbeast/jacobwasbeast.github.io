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
