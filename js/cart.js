'use strict';

let productName = ['moh', 'ab'];
let productPath = ['./img/cosmetics-img/1.jpg', './img/cosmetics-img/2.jpg'];
let productPrices = [3, 4];
let productType = ['drugs', 'cosmetics'];
let quantitys = [4, 5];

for (let i = 0; i < productName.length; i++) {
  let newCart = new Cart(productName[i], productPath[i], productPrices[i], productType[i], quantitys[i]);
  newCart.render();
  settingItems();
}


//______________________________storage


function settingItems() {
  let items = JSON.stringify(Cart.all);
  localStorage.setItem('Cart', items);
}

function gettingItems() {
  let asString = localStorage.getItem('Cart');
  let asObj = JSON.parse(asString);

  if (asObj !== null) {
    Cart.all = asObj;
    //render();
  }

}
gettingItems();
