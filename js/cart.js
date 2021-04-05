/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
'use strict';
function Cart2(name, price, quantity) {
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.total = this.price * this.quantity;
}
Cart2.prototype.render = function () {
  const productName = document.createElement('td');
  cartTable.appendChild(productName);
  productName.textContent = this.name;
  const individualPrice = document.createElement('td');
  cartTable.appendChild(individualPrice);
  individualPrice.textContent = this.price;
  const quantity = document.createElement('td');
  cartTable.appendChild(quantity);
  quantity.textContent = this.quantity;
  const totalPrice = document.createElement('td');
  cartTable.appendChild(totalPrice);
  totalPrice.textContent = this.total;
  const newLine = document.createElement('tr');
  cartTable.appendChild(newLine);
};

let cartName = ['moh', 'ab'];
let prices = [3, 4];
let quantitys = [4, 5];

for (let i = 0; i < cartName.length; i++) {
  let newCart = new Cart2(cartName[i], prices[i], quantitys[i]);
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
