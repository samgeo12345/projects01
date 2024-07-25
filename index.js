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
document.addEventListener("DOMContentLoaded", function() {
    const hireme = document.getElementById("hireme");

    // Retrieve the stored click count from localStorage, or set it to 0 if it doesn't exist
    let clickCount = localStorage.getItem('hireMeClickCount') || 0;

    hireme.onclick = function() {
        if (confirm("Do you want to send a notification for Hiring?")) {
            window.alert("Notification for Hire is sent!");
            hireme.innerHTML = 'Hired <i class="fa-solid fa-check"></i>';
            hireme.style.color = "limegreen";
            hireme.style.backgroundColor="black";

            // Increment the click count and store it in localStorage
            clickCount++;
            localStorage.setItem('hireMeClickCount', clickCount);

            console.log(`HireMe button clicked ${clickCount} times`);  // This log will be visible in the browser console
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const photos = document.getElementById("photos");
    const tooltip = document.getElementById("tooltip");

    photos.addEventListener("mouseover", function(event) {
        tooltip.style.display = "block";
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + "px";
    });

    photos.addEventListener("mousemove", function(event) {
        tooltip.style.left = event.pageX + "px";
        tooltip.style.top = event.pageY + "px";
    });

    photos.addEventListener("mouseout", function() {
        tooltip.style.display = "none";
    });
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
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("buton");
    button.onclick = function() {
        if (confirm("Do you want to download the resume?")) {
            const link = document.createElement('a');
            link.href = 'img/Resume.pdf';
            link.download = 'Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
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
        msg.textContent = 'Sending message....';
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
