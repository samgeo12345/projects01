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
