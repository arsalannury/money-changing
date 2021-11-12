let orders = [];

function pushToOrderList(){ 
    if(walletLink.value.length <= 20) return;
    orders.push({name : shopName.innerText,price : shopPrice.innerText});
    localStorage.setItem('ordersInf',JSON.stringify(orders));
}
