const ordersList = document.querySelector('.container__orders');
const getOrderLocal = JSON.parse(localStorage.getItem('ordersInf'));
const confirmLocal = localStorage.getItem('order-result');
const clear_icon = document.querySelector('.clear_icon');
const swal = document.querySelector('.swal');
const deleteBtn = document.querySelector('.delete');
const canselBtn = document.querySelector('.cansel');
const swalCont = document.querySelector('.swal_cont');
const homeIcon = document.querySelector('.home_icon');

// :::::::::::::::::::::::
// set local storege in LI
// :::::::::::::::::::::::

const innerList = () => {
    getOrderLocal.forEach(element => {
        ordersList.innerHTML += 
        `<li class="order_item">${element.name} <span class="price_order">${element.price} $</span><i class="bi bi-check-circle-fill"></i> </li>`
    })
}

window.onload = function () {
    if(getOrderLocal && confirmLocal){
        innerList()
    }
}

// :::::::::::::::::::::::
// EVENTS for swal and buttons
// :::::::::::::::::::::::

clear_icon.addEventListener('click',(e) => {
    swalDelete();
  })

function swalDelete(){
   if(!localStorage.key('ordersInf')) return;
   swal.style.display = 'flex';
   swalCont.style.display = 'flex';
}

deleteBtn.addEventListener('click',(e) => {
    localStorage.clear();
    location.reload();
    swal.style.display = 'none';
    swalCont.style.display = 'none';
})
canselBtn.addEventListener('click',(e) => {
    swal.style.display = 'none';
    swalCont.style.display = 'none';
})

homeIcon.addEventListener('click' ,(e) => {
    setTimeout(() => {location.href = './index.html'},1000)
})