// ::::::::::::::
// variables
// ::::::::::::::
const banksInformation = document.querySelector('.banks');
const fBankName = document.querySelector('.fbankname');
const sBankName = document.querySelector('.sbankname');
const tBankName = document.querySelector('.tbankname');


const paymentForm = document.querySelectorAll('.payment input');
const cartNumber = document.querySelector('.cartnumber');
const cv2 = document.querySelector('.cv2');
const passwordForm = document.querySelector('.password');
const passwordCreate = document.querySelector('.passwordcreate');
const otherPayment = document.querySelector('.other-payment');
const expirationOne = document.querySelector('.expiration1'); 
const expirationTwo = document.querySelector('.expiration2'); 
const safeCodeSync = document.querySelector('.syncicon');
const safetyCodeCreate = document.querySelector('.safetycode');
const safetyCodeUser = document.querySelector('.safetycodeuser');
const buttonsform = document.querySelector('.submitbuttons');

const alertBank = document.querySelector('.alertbank');
const alertButton = document.querySelector('.alertbutton');

// :::::::::::::::
// change color bank name
// :::::::::::::::
let userBank = [];
banksInformation.addEventListener('click',(e)=> {
 if(e.target.nodeName === 'SPAN'){
     if(e.target.className === 'fbankname'){
        fBankName.style.color = '#38b000';
        sBankName.style.color = '#000';
        tBankName.style.color = '#000';
        userBank = ['Central USA Bank '];
     }else if(e.target.className === 'sbankname'){
        sBankName.style.color = '#38b000'
        fBankName.style.color = '#000';
        tBankName.style.color = '#000';
        userBank = ['Bank of America'];
     }else if(e.target.className === 'tbankname'){
        tBankName.style.color = '#38b000';
        fBankName.style.color = '#000';
        sBankName.style.color = '#000';
        userBank = ['Citi Bank']
     }
 }
})

// ::::::::::::::::::::
// error show , please choose a bank 
// ::::::::::::::::::::
paymentForm.forEach(nodeElement => {
    nodeElement.addEventListener('click',(e) => {
       if(userBank.length === 0){
          alertBank.style.display = 'flex';
       }
    })
})

alertButton.addEventListener('click',(e) => {
    alertBank.style.display = 'none'
})
// :::::::::::::
// remove input value after refresh page
// ::::::::::::
const inputsValue = [cartNumber,cv2,passwordForm,safetyCodeCreate,safetyCodeUser,expirationOne,expirationTwo];
inputsValue.forEach(nodeElement => {
    window.addEventListener('load',(e) => {
        nodeElement.value = ''
    })
})

// :::::::::::::::::::
// create password for user
// :::::::::::::::::::
passwordCreate.addEventListener('click',(e) => {
    e.preventDefault();

    if(userBank.length === 0){
        alertBank.style.display = 'flex';
        return
     }

    setTimeout(() => {
        passwordForm.value = Math.floor(Math.random() * 437689456864)
    },1000)
    setTimeout(() => {
        passwordForm.value = ''
    },20000)
})

// ::::::::::::::::::::::
// create safe code
// ::::::::::::::::::::::
safetyCodeCreate.value = '';

safeCodeSync.addEventListener('click',(e) => {
    if(userBank.length === 0){
        alertBank.style.display = 'flex';
        return
     }
    safetyCodeCreate.value = Math.floor(Math.random() * 309745 )
})
// ::::::::::::::::::::
// safe code check  - submit - cansel button
// ::::::::::::::::::::
buttonsform.addEventListener('click',(e) => {
    if(e.target.nodeName != 'BUTTON') return;
        // submit button :::::::::::::::::::::::::::::::::
    if(e.target.className === 'submit'){
        e.preventDefault();

        if(userBank.length === 0){
            alertBank.style.display = 'flex';
            return;
         }

        if(!cartNumber.value  || !passwordForm.value || !cv2.value || !expirationOne.value || !expirationTwo.value || !safetyCodeUser.value ){
           inputsValue.filter(nodeElement => {
               nodeElement.style.border = '1px solid rgba(255, 0, 0, 0.452)'
           })
            return;
        }  

        if(safetyCodeUser.value !== safetyCodeCreate.value){
            safetyCodeCreate.value = Math.floor(Math.random() * 309745 );
            document.querySelector('.alertsafecode').style.display = 'unset';
            return;
        }else{
            document.querySelector('.alertsafecode').style.display = 'none'; 
           
        }  

        stylesForSubmitBtn();
        setTimeout(() => {
            location.href = '../html/paypage.html';
        },4000)
       
    }
    
   // cansel button :::::::::::::::::::::::::::::::::::::
   if(e.target.className === 'canselsubmit'){
    inputsValue.forEach(nodeElement => { 
            nodeElement.value = ''
    })
    setTimeout(() => {
    location.href = '../html/index.html';
    },1000)
   }
})

function stylesForSubmitBtn(){
    document.querySelector('.lds-facebook').style.display = 'inline-block';
   document.querySelector('.payment').style.display = 'none';
    banksInformation.style.display = 'none';
}

// ::::::::::::::::::::
// visa - paypal - amazonPay
// ::::::::::::::::::::
otherPayment.addEventListener('click',(e) => {
    if(e.target.nodeName !== 'I') return ;

    if(e.target.className === 'fab fa-cc-paypal paypal'){
        location.href = 'https://www.paypal.com'
    }
    if(e.target.className === 'fab fa-cc-visa visa'){
        location.href = 'https://www.usa.visa.com'
    }
    if(e.target.className === 'fab fa-cc-amazon-pay amazon'){
        location.href = 'https://www.pay.amazon.com'
    }
})