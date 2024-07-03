//index.html
//(Deactivated for now)
document.addEventListener("DOMContentLoaded",function(){
    const changetext=document.querySelector(".changetext");
    const texts=['Web Developer.','CSE Engineer.','Software Developer.'];
    let textletter=0;
    function change(){
        textletter=(textletter+1)%texts.length;
        changetext.textContent=texts[textletter];
    }
    setInterval(change,1500);
});
document.addEventListener("DOMContentLoaded",function(){
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxUWYmzJx9b9GHy-hNa03kMzCzk1CKNXOI_0-R9UAj0ZfKiK7u0HKOrzZc9ZRtKD4ZvDQ/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById('successmsg');

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Clear previous message and remove shake class
        msg.textContent = '';
        msg.className = '';

        // Trigger shake on every click
        triggerShake();

        // Validate form inputs in order
        if (!form['Name'].value) {
            msg.textContent = 'Name is required!';
            msg.className = 'error';
            triggerShake();
            return;
        }

        if (!form['Email'].value) {
            msg.textContent = 'Email is required!';
            msg.className = 'error';
            triggerShake();
            return;
        }

        if (!form['Your message'].value) {
            msg.textContent = 'Message is required!';
            msg.className = 'error';
            triggerShake();
            return;
        }

        // If all validations pass, show loading message
        msg.textContent = 'Sending....';
        msg.className = 'loading';

        // Submit form
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.textContent = 'Sent successfully!';
                msg.className = 'success';
                setTimeout(function () {
                    msg.textContent = '';
                    msg.className = '';
                }, 4000);
                form.reset();
            })
            .catch(error => {
                msg.textContent = 'Error!';
                msg.className = 'error';
                console.error('Error!', error.message);
            });
    });

    function triggerShake() {
        // Force reflow to restart the animation
        msg.classList.remove('shake');
        void msg.offsetWidth;
        msg.classList.add('shake');
    }
});
