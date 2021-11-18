// ::::::::::::::
// variables
// ::::::::::::::
const banksInformation = document.querySelector('.banks');
const fBankName = document.querySelector('.fbankname');
const sBankName = document.querySelector('.sbankname');
const tBankName = document.querySelector('.tbankname');
const fBank = document.querySelector('.fbank');
const sBank = document.querySelector('.sbank');
const tBank = document.querySelector('.tbank');
const readOnlyes = [fBank,sBank,tBank];

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

const contSetNameInput = document.querySelector('.cont_setname_input');
const buttonAddName = document.querySelector('.add_name');
const inputAddName = document.getElementById('set__name');
const errorFullName = document.querySelector('.error_full_name');
const nameUserSection = document.querySelector('.name');
const innerInputNameValue = document.querySelector('.inner_inputname_value');
const checkNameContainer = document.querySelector('.check_name_section');
const errorTypeName = document.querySelector('.error_type_name');
const loadCheckNameIcon = document.querySelector('.spinner_icon');

const banksMobileMenu = document.querySelector('#banks_mobile_menu')
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
            document.querySelector('#alertsafecode').style.display = 'unset';
            return;
        }else{
            document.querySelector('#alertsafecode').style.display = 'none'; 
           
        }  
        stylesForSubmitBtn();
        setTimeout(() => {
            localStorage.setItem('order-result','confirm')
            location.href = '../html/paypage.html';
        },4000)
       
    }
    
   // cansel button :::::::::::::::::::::::::::::::::::::
   if(e.target.className === 'canselsubmit'){
       e.preventDefault();
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
    document.querySelector('.name__user').style.display = 'none';
    banksMobileMenu.style.display = 'none';
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

// ::::::::::::::::::::
// set function for add name section after load window
// ::::::::::::::::::::

 function showModalForSetUserName(){
 banksInformation.style.display = 'none';
 document.querySelector('.payment').style.display = 'none';
 banksMobileMenu.style.display = 'none';
 setTimeout(() => { contSetNameInput.style.display = 'flex'},50);
}

function hideModalForSetUserName(){
    if(loadCheckNameIcon.className === 'spinner_icon fas fa-spinner fa-spin') return
    if(inputAddName.value.length <= 2){
        errorFullName.style.display = 'unset';
        inputAddName.value = null;
        setTimeout(() => {errorFullName.style.display = 'none'},3000)
        return;
    };
    if(innerWidth <= 500){
        banksInformation.style.display = 'none';
    }else{
        banksInformation.style.display = 'unset';
    }
    document.querySelector('.payment').style.display = 'flex';
    innerWidth <= 500 ? banksMobileMenu.style.display = 'unset' : banksMobileMenu.style.display = 'none'
    contSetNameInput.style.display = 'none';
}

function resultEnterName(){
    if(loadCheckNameIcon.className === 'spinner_icon fas fa-spinner fa-spin') return
    let setInfLocal = localStorage.setItem('name',JSON.stringify(inputAddName.value));
    let getInfLocal = JSON.parse(localStorage.getItem('name'));
    if(inputAddName.value.length <= 2) return ;
    nameUserSection.innerText = getInfLocal;
    inputAddName.value = null;
 }   
 
function checkName(){
   
    if(inputAddName.value.length > 2){
        innerInputNameValue.innerText = inputAddName.value;
        checkNameContainer.style.display = 'unset';
    }else{
        innerInputNameValue.innerText = null;
        checkNameContainer.style.display = 'none';
    }

    if(innerWidth <= 500){
        if(inputAddName.value.length >= 30) inputAddName.value = ''
    }

}

function keyDownCheckName(){
    
    loadCheckNameIcon.setAttribute('class','spinner_icon fas fa-spinner fa-spin')      
}

function keyUpCheckName(){
   
    if(inputAddName.value){
      setTimeout(() => {loadCheckNameIcon.setAttribute('class','spinner_icon bi bi-check')},3000)
    }
}

// ::::::::::::::::::::
// listener for add name section
// ::::::::::::::::::::
let minutes = 100;
window.addEventListener('DOMContentLoaded',(e) => {
   showModalForSetUserName();
   setInterval(() => {minutes--; minutes === 0 ? location.replace('./index.html') : null},1000)
})

buttonAddName.addEventListener('click',(e) => {
  hideModalForSetUserName();
  resultEnterName();
})

inputAddName.addEventListener('input',(e) => {
  checkName();
})

window.addEventListener('keydown',(e) => {
    keyDownCheckName();
})
window.addEventListener('keyup',(e) => {
    keyUpCheckName()
})

// ::::::::::::::::::::
// style box shadow container
// ::::::::::::::::::::

inputAddName.addEventListener('focus',(e) =>{
    contSetNameInput.style.boxShadow = '0 0 10px #222';
})
inputAddName.addEventListener('blur',(e) =>{
    contSetNameInput.style.boxShadow = '0 0 70px #bbb';
})


// ::::::::::::::::::::
// you can not use numbers to  set name box
// ::::::::::::::::::::
function errorSweetAlert(){
    Swal.fire({
        title: 'Atention...',
        text: 'You can not use numbers!',
      })
}
let number = ['0','1','2','3','4','5','6','7','8','9'];
inputAddName.addEventListener('beforeinput',(e) => {
  
    number.forEach(num => {
       
       if(inputAddName.value.includes(num)){
           e.preventDefault();
           errorSweetAlert()
           inputAddName.value = null;
       }

    })

})

// menu mobile banks infomration ::::::::::::::::::

const iconTimes = document.createElement('i');
innerWidth > 500 ? banksMobileMenu.style.display = 'none' : banksMobileMenu.style.display = 'unset';
// ::::::::::::::
// icon times for show banks information menu 
// ::::::::::::::
function appnedTimesBnaks(){
    if(innerWidth <= 500){
        iconTimes.setAttribute('class','bi bi-x');
        iconTimes.style.position = 'absolute';
        iconTimes.style.top = '5px';
        iconTimes.style.right = '5px';
        iconTimes.style.fontSize = '1.5em';
        banksInformation.appendChild(iconTimes);
    }
}

let namesBank = [fBank,sBank,tBank,otherPayment]
// show menu : : : : : : : : : : : : : : : : : : : 
banksMobileMenu.addEventListener('click',(e) => {
    if(alertBank.style.display === 'flex') return;
    namesBank.forEach(styles => {
        styles.style.display = 'flex'
    })
    banksInformation.style.display = 'unset'
    banksInformation.style.left = '0'
    banksInformation.style.top = '0'
    banksInformation.style.width = '80%'
    banksInformation.style.height = '100vh'
    banksInformation.style.zIndex = '1'
    banksInformation.classList.add('slideInLeft')
    appnedTimesBnaks();
    
})
// hide mneu : : : : : : : : : : : : : : : : : : :
iconTimes.addEventListener('click',(e) => {
   namesBank.forEach(styles => {
        styles.style.display = 'none'
    })
    banksInformation.style.width = '0';
    setTimeout(() => {banksInformation.style.display = 'none';},800)
})