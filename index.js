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

        // Clear previous message
        msg.textContent = '';
        msg.className = '';

        // Validate form inputs in order
        if (!form['Name'].value) {
            msg.textContent = 'name is required!';
            msg.className = 'error';
            return;
        }

        if (!form['Email'].value) {
            msg.textContent = 'email is required!';
            msg.className = 'error';
            return;
        }

        if (!form['Your message'].value) {
            msg.textContent = 'message is required!';
            msg.className = 'error';
            return;
        }

        // If all validations pass
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
                msg.textContent = 'sent successfully!';
                msg.className = 'success';
                setTimeout(function () {
                    msg.textContent = '';
                    msg.className = '';
                }, 2000);
                form.reset();
            })
            .catch(error => console.error('Error!', error.message));
    });
});
