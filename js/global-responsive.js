const iconPlus = document.querySelector('.icon1');
const iconPulse = document.querySelector('.icon2');
const  cryptoElement = document.querySelector('.crypto');

function loadEventHandle(){
    window.addEventListener('load',(e) => {
        if(innerWidth <= 500) 
            cryptoElement.setAttribute('class','crypto  animated infinite pulse');
    })
}
loadEventHandle();

