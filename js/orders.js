const ordersList = document.querySelector(".container__orders");
let getOrderLocal = JSON.parse(localStorage.getItem("ordersInf"));
const confirmLocal = localStorage.getItem("order-result");
const clear_icon = document.querySelector(".clear_icon");

const swal = document.querySelector(".swal");
const swalIcon = document.querySelector('.swal_icon');
const swalText = document.querySelector('.text-swal');
const buttonsSwal = document.querySelector('.buttons');
const deleteBtn = document.querySelector(".delete");
const canselBtn = document.querySelector(".cansel");
const swalCont = document.querySelector(".swal_cont");
const homeIcon = document.querySelector(".home_icon");

const deleteOneByOneContainer = document.querySelector(
  ".swal_cont_delete_order_onebyone"
);
const deleteOneByOneModal = document.querySelector(".swal_delete");
const deleteOneByOneBtn = document.querySelector(".btn_delete");
const canselOneByOneBtn = document.querySelector(".btn_cansel_delete");
const deleteOneByOneIcon = document.querySelector(".delete_onebyone_icon");
const oneByOneText = document.querySelector(".text_swal_delete");
const allButtonsOneByOne = document.querySelector(".buttons_onebyone");
// :::::::::::::::::::::::
// set local storege in LI
// :::::::::::::::::::::::

const innerList = () => {
  getOrderLocal.forEach((element, i) => {
    ordersList.innerHTML += `<li class="order_item"> 
          <span>${i + 1}</span> ${element.name} <span>${element.amount}</span>
          <span class="price_order">${
            element.price
          } $</span>
          <i class="bi bi-trash trash_btn" id='${element.id}'></i> 
        </li>`;
  });
};

window.onload = function () {
  if (getOrderLocal) {
    innerList();
  }
  if (confirmLocal && ordersList.lastElementChild) {
    ordersList.lastElementChild.style.display = "flex";
  } else {
    if (ordersList.lastElementChild)
      ordersList.lastElementChild.style.display = "none";
  }
  trash();
};

// :::::::::::::::::::::::
// EVENTS for swal and buttons
// :::::::::::::::::::::::

clear_icon.addEventListener("click", (e) => {
  swalDelete();
});

deleteBtn.addEventListener("click", (e) => {
  localStorage.removeItem("ordersInf");
  localStorage.removeItem("order-result");
  location.reload();
  swal.style.display = "none";
  swalCont.style.display = "none";
});
canselBtn.addEventListener("click", (e) => {
 canselBtnSwalHide()
});

homeIcon.addEventListener("click", (e) => {
  setTimeout(() => {
    location.href = "./index.html";
  }, 1000);
});

var trashBtn = document.querySelector(".trash_btn");
var nGetOrderLocal;
function trash() {
  if (document.querySelector(".trash_btn")) {
    document.querySelectorAll(".trash_btn").forEach((elements, i) => {
      elements.addEventListener("click", (e) => {
        showHideModalOneByOne("flex");
        showModalChildrensOneByOne()
        deleteOneByOneBtn.addEventListener("click", (e) => {
          getOrderLocal.filter((localItems, i) => {
            if (elements.id == localItems.id) {
              const index = getOrderLocal.indexOf(localItems);
              nGetOrderLocal = getOrderLocal.splice(index, 1);
              const newOrderLists = localStorage.setItem(
                "ordersInf",
                JSON.stringify(getOrderLocal)
              );
              location.reload();
            }
          });
        });
      });
    });
  }
}

canselOneByOneBtn.addEventListener("click", (e) => {
  deleteOneByOneModal.style.transition = "all .5s ease";
  deleteOneByOneModal.style.width = "0%";
  oneByOneText.style.display = "none";
  deleteOneByOneIcon.style.display = "none";
  allButtonsOneByOne.style.display = "none";
  setTimeout(() => {
    showHideModalOneByOne("none");
  }, 800);
});


// functions Program : : : : : :  : : :  : : : : : :: : : : : : : : : : : 

function swalDelete() {
  if (!localStorage.getItem("ordersInf") || !getOrderLocal[0]) return;
  swalCont.style.display = "flex";
  swal.style.display = 'flex'
  swalIcon.style.display = 'unset';
  swalText.style.display = 'unset';
  buttonsSwal.style.display = 'flex';
  swal.style.width = '90%';
 
  if(innerWidth >= 501 && innerWidth <= 1150){
    swal.style.width = '70%';
  }else if (innerWidth > 1150){
    swal.style.width = '30%';
  }
}

function showHideModalOneByOne(display) {
  deleteOneByOneContainer.style.display = display;
}
function showModalChildrensOneByOne() {
  deleteOneByOneModal.style.width = '90%';
 
  if(innerWidth >= 501 && innerWidth <= 1150){
    deleteOneByOneModal.style.width = '70%';
  }else if (innerWidth > 1150){
    deleteOneByOneModal.style.width = '30%';
  }
  oneByOneText.style.display = "unset";
  deleteOneByOneIcon.style.display = "unset";
  allButtonsOneByOne.style.display = "flex";
}
function canselBtnSwalHide(){
  swalIcon.style.display = 'none';
  swalText.style.display = 'none';
  buttonsSwal.style.display = 'none';
  swal.style.width = '0';
  setTimeout(() => {
    swalCont.style.display = 'none';
  }, 800);
}
