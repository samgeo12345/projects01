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