// ::::::::::::
// after 9 second h1 change to check icon
// ::::::::::::
const title = document.querySelector('h1');
const doneIcon = document.createElement('i');
const container = document.querySelector('.thank');
const orderPage = document.querySelector('.order_page');
const loader = document.querySelector('.lds-facebook');
doneIcon.setAttribute('class','fas fa-check-circle doneicon')
window.addEventListener('load',(e) => {
    setTimeout(()=> {
        container.replaceChild(doneIcon,title);
    },9000)
})


const homeButton = document.querySelector('.buttonfinish');

homeButton.addEventListener('click',(e) => {
    changePath()
    setTimeout(() => {
    location.href = './index.html'
    },500)
})

orderPage.addEventListener('click',() => {
    changePath()
    setTimeout(function(){
      location.href = './orders.html'
    },3000)
   
})

function changePath(){
 loader.style.display = 'inline-block';
 container.style.display = 'none';
 document.body.style.overflow = 'hidden';
 orderPage.style.display = 'none';
}
