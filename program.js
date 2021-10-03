

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


// ::::::::::::::::::::::::
// crypto add name after click
// ::::::::::::::::::::::::
const cryptoNames = {

    containerCrypto : document.querySelector('.crypto') ,
    textPrice : document.querySelector('.textprice') ,

   addNameCrypto(){
       this.containerCrypto.children[2].addEventListener('click' ,(e) => {
          this.textPrice.innerText = 'Tron';
          show.innerText = 1;
          allprice.innerText = 1;
       })

       this.containerCrypto.children[3].addEventListener('click',(e) => {
           this.textPrice.innerText = 'BitCoin';
           show.innerText = 1;
           allprice.innerText = 46000;
       })

       this.containerCrypto.children[4].addEventListener('click' ,(e) => {
           this.textPrice.innerText = 'Ethereum';
           show.innerText = 1;
           allprice.innerText = 3140;
       })

       this.containerCrypto.children[5].addEventListener('click',(e) => {
           this.textPrice.innerText = 'DogCoin';
           show.innerText = 1;
           allprice.innerText = 23;
       })

       this.containerCrypto.children[6].addEventListener('click',(e) => {
           this.textPrice.innerText = 'Shibaino';
           show.innerText = 1;
           allprice.innerText = 2
       })
   }
}
cryptoNames.addNameCrypto();


// ::::::::::::::::::::::
// point number section code
// ::::::::::::::::::::::

// ::::::::::::::: variables for this prpgram
const show = document.querySelector('.show');
show.innerText = 0 ;
const iconFirst = document.querySelector('#icon1');
const iconSecond = document.querySelector('#icon2');
const textprice = document.querySelector('.textprice');
const allprice = document.querySelector('.allprice');
allprice.innerText = 0 ;
// ::::::::::::::: end variables for this prpgram

iconSecond.addEventListener('click', () => {
    // ::::::::::::::::: plus number
    show.innerText++ ; 
    show.innerText >= 101 ?  show.innerText = 0 : null;
  if(textprice.innerText === 'Tron'){
    allprice.innerText++
  }else if(textprice.innerText === 'BitCoin' ){
      allprice.innerText = show.innerText * 46000
      
  }else if(textprice.innerText === 'Ethereum'){
      allprice.innerText = show.innerText * 3140
  }else if(textprice.innerText === 'DogCoin'){
      allprice.innerText = show.innerText * 23
  }else if(textprice.innerText === 'Shibaino'){
      allprice.innerText = show.innerText * 2
  }
      
});

iconFirst.addEventListener('click', () => {
    // ::::::::::::::::: minus number
    show.innerText--
    show.innerText <= -1 ? show.innerText = 0 : null ;
    
   if(textprice.innerText === 'Tron'){
       allprice.innerText--
   }else if(textprice.innerText === 'BitCoin'){
       allprice.innerText = allprice.innerText - 46000
   }else if(textprice.innerText === 'Ethereum'){
       allprice.innerText = allprice.innerText - 3140
   }else if(textprice.innerText === 'DogCoin'){
       allprice.innerText = allprice.innerText - 23
   }else if(textprice.innerText === 'Shibaino'){
       allprice.innerText = allprice.innerText - 2
   }
   allprice.innerText < 1  ? allprice.innerText = 0 : null;
});