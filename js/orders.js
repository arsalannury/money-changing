const ordersList = document.querySelector('.container__orders');
const getOrderLocal = JSON.parse(localStorage.getItem('ordersInf'));
const confirmLocal = localStorage.getItem('order-result');
const innerList = () => {
    getOrderLocal.forEach(element => {
        ordersList.innerHTML += 
        `<li class="order_item">${element.name} ${element.price}</li>`
    })
}

window.onload = function () {
    if(getOrderLocal && confirmLocal){
        innerList()
    }
}