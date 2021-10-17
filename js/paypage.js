// ::::::::::::
// after 9 second h1 change to check icon
// ::::::::::::
const title = document.querySelector('h1');
const doneIcon = document.createElement('i');
const container = document.querySelector('.thank');

doneIcon.setAttribute('class','fas fa-check-circle doneicon')
window.addEventListener('load',(e) => {
    setTimeout(()=> {
        container.replaceChild(doneIcon,title);
    },9000)
})


const homeButton = document.querySelector('.buttonfinish');

homeButton.addEventListener('click',(e) => {
    setTimeout(() => {
    location.href = './index.html'
    },500)
})