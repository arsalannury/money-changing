

// :::::::::::
// change background site
// ::::::::::
const changeBackground = {
    toggle : document.querySelector('.toggle') ,
    secondToggle : document.querySelector('.secondtoggle') ,
    price : document.querySelector('.price') ,
    points : document.querySelector('.pointnumber') ,
    crypto : document.querySelector('.crypto') ,
    colorBlue(){
        this.toggle.addEventListener('click',() => {
            this.toggle.style.display = 'none' ;
            document.body.style.backgroundColor = '#000495' ;

            let secondToggleStyle = [ 
            this.secondToggle.style.backgroundColor = '#000495' ,
            this.secondToggle.style.display = 'block' 
            ]

            let priceStyle = [
            this.price.style.background = 'linear-gradient(45deg, #000486, #00049f)' ,
            this.price.style.boxShadow = ' 20px -20px 26px #00036d,-20px 20px 26px #0005bd'
            ];
           
            let pointStyle = [
            this.points.style.background = 'linear-gradient(45deg, #000486, #00049f)' ,
            this.points.style.boxShadow = ' 20px -20px 26px #00036d,-20px 20px 26px #0005bd'
            ]
            
            let cryptoStyle = [
                this.crypto.style.background = 'linear-gradient(45deg, #000486, #00049f)' ,
                this.crypto.style.boxShadow = ' 20px -20px 26px #00036d,-20px 20px 26px #0005bd'
            ]

        })
    } ,

    colorPurple(){
    this.secondToggle.addEventListener('click',() => {
        this.secondToggle.style.display = 'none';
        this.toggle.style.display = 'block' ;
        document.body.style.backgroundColor = '#684275'

        let priceDefault = [
            this.price.style.background = 'linear-gradient(45deg, #5e3b69, #6f477d)' ,
            this.price.style.boxShadow = ' 22px -22px 44px #462c4e,-22px 22px 44px #8a589c'
        ] ;

        let pointDefault = [
            this.points.style.background = 'linear-gradient(45deg, #5e3b69, #6f477d)',
            this.points.style.boxShadow = ' 22px -22px 44px #462c4e,-22px 22px 44px #8a589c'
        ] ;

        let cryptoDefault = [
            this.crypto.style.background = 'linear-gradient(45deg, #5e3b69, #6f477d)',
            this.crypto.style.boxShadow = ' 22px -22px 44px #462c4e,-22px 22px 44px #8a589c'
        ]

    })
    }
} 
changeBackground.colorBlue();
changeBackground.colorPurple();


// :::::::::::::::
// show currency
// ::::::::::::::

const showCurrency = {
    cryptoElement : document.querySelector('.crypto') ,
    iconPlus : document.querySelector('.icon1') ,
    iconPulse : document.querySelector('.icon2') ,
    tron : document.querySelector('.tron') ,
    showMenu(){
        this.iconPlus.addEventListener('click',() => {
            this.iconPulse.style.top = '19px' ;
            this.iconPulse.style.display = 'block' ;

            this.iconPlus.style.display = 'none'
            
            this.cryptoElement.style.width = '13%' ;
            this.cryptoElement.style.height = '29vw' ;

            setTimeout(() => {
                this.tron.style.display = 'flex' ;
                this.cryptoElement.children[3].style.display = 'flex' ;
                this.cryptoElement.children[4].style.display = 'flex' ;
                this.cryptoElement.children[5].style.display = 'flex' ;
                this.cryptoElement.children[6].style.display = 'flex' ;
            },600)
          
        })
    } ,

    closeMenu(){
        this.iconPulse.addEventListener('click',() => {
            this.iconPulse.style.display = 'none' ;

            this.iconPlus.style.top = 'none' ;
            this.iconPlus.style.display = 'block' ;

            this.cryptoElement.style.width = '4%' ;
            this.cryptoElement.style.height = '4vw' ;

            this.tron.style.display = 'none' ;
            this.cryptoElement.children[3].style.display = 'none' ;
            this.cryptoElement.children[4].style.display = 'none' ;
            this.cryptoElement.children[5].style.display = 'none' ;
            this.cryptoElement.children[6].style.display = 'none' ;
        })
    }

}
showCurrency.closeMenu();
showCurrency.showMenu();


// ::::::::::::::::::::::::::::::::::::
// build cart for buy cryptoCurrency
// :::::::::::::::::::::::::::::::::::

const cart = document.createElement('i');
cart.setAttribute('class','fas fa-shopping-cart  cart  hvr-wobble-to-top-right');
document.body.appendChild(cart);



// ::::::::::::::::::::::::
// crypto add name after click
// ::::::::::::::::::::::::
const cryptoNames = {
    shopName : document.querySelector('.shopname') , // crypto name in cart
    containerCrypto : document.querySelector('.crypto') ,
    textPrice : document.querySelector('.textprice') ,

   addNameCrypto(){
       this.containerCrypto.children[2].addEventListener('click' ,(e) => {
          this.textPrice.innerText = 'Tron';
          show.innerText = 1;
          allprice.innerText = 1;
         // cart show ::::::::::::::::::::::
          this.shopName.innerText = 'Tron';
          shopPrice.innerText = 1;
       })

       this.containerCrypto.children[3].addEventListener('click',(e) => {
           this.textPrice.innerText = 'BitCoin';
           show.innerText = 1;
           allprice.innerText = 46000;
           // cart show ::::::::::::::::::::::
            this.shopName.innerText = 'BitCoin';
            shopPrice.innerText = 46000;
       })

       this.containerCrypto.children[4].addEventListener('click' ,(e) => {
           this.textPrice.innerText = 'Ethereum';
           show.innerText = 1;
           allprice.innerText = 3140;
           // cart show ::::::::::::::::::::::
           this.shopName.innerText = 'Ethereum';
           shopPrice.innerText = 3140;
       })

       this.containerCrypto.children[5].addEventListener('click',(e) => {
           this.textPrice.innerText = 'DogCoin';
           show.innerText = 1;
           allprice.innerText = 23;
           // cart show ::::::::::::::::::::::
           this.shopName.innerText = 'DogCoin';
           shopPrice.innerText = 23;
       })

       this.containerCrypto.children[6].addEventListener('click',(e) => {
           this.textPrice.innerText = 'Shibaino';
           show.innerText = 1;
           allprice.innerText = 2;
            // cart show ::::::::::::::::::::::
           this.shopName.innerText = 'Shibaino';
           shopPrice.innerText = 2;
       })
   }
}
cryptoNames.addNameCrypto();


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: plus minus numbers 
// ::::::::::::::: variables for this program
const show = document.querySelector('.show');
show.innerText = 0 ;
const iconFirst = document.querySelector('#icon1');
const iconSecond = document.querySelector('#icon2');
const textprice = document.querySelector('.textprice');
const allprice = document.querySelector('.allprice');
allprice.innerText = 0 ;
const shopPrice = document.querySelector('.shopprice'); // crypto price in cart


iconSecond.addEventListener('click', () => {
    // ::::::::::::::::: plus number of crypto currency
    show.innerText++ ; 
    show.innerText >= 101 ?  show.innerText = 0 : null;

  if(textprice.innerText === 'Tron'){
    allprice.innerText++
    shopPrice.innerText++
  }else if(textprice.innerText === 'BitCoin' ){
      allprice.innerText = show.innerText * 46000 
      shopPrice.innerText = show.innerText * 46000 

  }else if(textprice.innerText === 'Ethereum'){
      allprice.innerText = show.innerText * 3140
      shopPrice.innerText = show.innerText * 3140

  }else if(textprice.innerText === 'DogCoin'){
      allprice.innerText = show.innerText * 23
      shopPrice.innerText = show.innerText * 23

  }else if(textprice.innerText === 'Shibaino'){
      allprice.innerText = show.innerText * 2
      shopPrice.innerText = show.innerText * 2
  }
      
});

iconFirst.addEventListener('click', () => {
    // ::::::::::::::::: minus number of crypto currency
    show.innerText--
    show.innerText <= -1 ? show.innerText = 0 : null ;
    
   if(textprice.innerText === 'Tron'){
       allprice.innerText--;
       shopPrice.innerText--;
   }else if(textprice.innerText === 'BitCoin'){
       allprice.innerText = allprice.innerText - 46000;
       shopPrice.innerText = allprice.innerText - 46000;
   }else if(textprice.innerText === 'Ethereum'){
       allprice.innerText = allprice.innerText - 3140;
       shopPrice.innerText = allprice.innerText - 3140;
   }else if(textprice.innerText === 'DogCoin'){
       allprice.innerText = allprice.innerText - 23;
       shopPrice.innerText = allprice.innerText - 23;
   }else if(textprice.innerText === 'Shibaino'){
       allprice.innerText = allprice.innerText - 2;
       shopPrice.innerText = allprice.innerText - 2;
   }
   allprice.innerText < 1  ? allprice.innerText = 0 : null;
   shopPrice.innerText < 1  ? shopPrice.innerText = 0 : null;
});
// ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 

// :::::::::::::::::::::::::::::::::::
// welcome page functions
// :::::::::::::::::::::::::::::::::::
const welcomePage = document.querySelector('.containermessage');
const ghostAnime = document.querySelector('.container-ghost');

function loadPageMessage(){
    window.addEventListener('load',(e) => {
    welcomePage.style.display = 'flex';
    ghostAnime.style.display = 'unset';
    })
}
loadPageMessage();

function clickButtons(){
    const yes = document.querySelector('.yes');
    const no = document.querySelector('.no');

    yes.addEventListener('click',() => {
        document.write('<h1 style=color:#d00000;margin:20% 0 0 60%;>Sorry iranian user we should say good bye</h1>')
        setTimeout(() => {
            close()
        },4000)
    })

    no.addEventListener('click',() => {
        setTimeout(() => {
            welcomePage.style.display = 'none';
            ghostAnime.style.display = 'none' ;
        },2000)
    })
}
clickButtons();


// :::::::::::::::::::::
// show cart for buy crypto 
// :::::::::::::::::::::


const showAndCloseCart = {
   shoppingCart : document.querySelector('.shoppingcart') ,
   cartIcon : document.querySelector('.cart') ,
   closeIcon : document.querySelector('.closeiconcart') ,
   walletLink : document.querySelector('.walletlink') ,
   lengthLink : document.querySelector('.lengthlink') ,
   showCart(){
       this.cartIcon.addEventListener('click',(e) => {
       this.shoppingCart.style.display = 'flex';
       })
   } ,
   closeCart(){
       this.closeIcon.addEventListener('click',() => {
       this.shoppingCart.style.display = 'none';
       this.walletLink.value = null;
       this.lengthLink.innerText = 0
       })
   }
}
showAndCloseCart.showCart();
showAndCloseCart.closeCart();

// :::::::::::::::::: 
// wallet link section setting length and message for length of charecter
// :::::::::::::::::

const walletAddress = {
    input : document.querySelector('.walletlink') ,
    lengthLink : document.querySelector('.lengthlink') ,
    wallet(){
       
    this.input.addEventListener('input',(e) => {
      this.lengthLink.innerText = e.target.value.length ;
     if(e.target.value.length > 100){
        e.target.value = '' ;
        this.lengthLink.innerText = null ;
        document.querySelector('.warning').style.display = 'inline' ;
     }else{
        document.querySelector('.warning').style.display = 'none' ;
     }
    })
       
    }  
}
walletAddress.wallet()



// :::::::::::::
//  show error if link is invalid
// link value is 0 after loa page
// :::::::::::::

const buyButton = document.querySelector('.buybutton');
const walletLink = document.querySelector('.walletlink');
const alertLink = document.querySelector('.alertlink');
const alertButton = document.querySelector('.alertbutton');
const shopName = document.querySelector('.shopname');

buyButton.addEventListener('click',(e) => {
    if(shopName.innerText === '') return;
       
    if(walletLink.value.length <= 20){
     alertLink.style.display = 'flex';
    }else{
        location.href = '../html/bank.html'
        walletLink.value = null;
    }
     
})

alertButton.addEventListener('click',(e) => {
  alertLink.style.display = 'none'
})

window.addEventListener('load',(e) => {
    walletLink.value = null;
})