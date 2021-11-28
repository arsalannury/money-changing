let orders = [];

function pushToOrderList(){ 
    if(walletLink.value.length <= 20) return;
    orders.push({name : shopName.innerText,
    price : shopPrice.innerText,
    amount : show.innerText,
    id : Math.floor(Math.random() * 100000)});
    localStorage.setItem('ordersInf',JSON.stringify(orders));
}
