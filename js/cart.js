'use strict';

loadCart();
let quantityText;
let prices = 0;
let total = 0;

const calcTotalId = document.getElementById('calcTotal');
const theaderId = document.getElementById('theader');

function render(i) {
  const cartTable = document.getElementById('cartTable');

  const newLine = document.createElement('tr');
  cartTable.appendChild(newLine);

  let deletedTd = document.createElement('td');
  newLine.appendChild(deletedTd);

  let deletedIcon = document.createElement('span');
  deletedIcon.setAttribute('class', 'iconRemove remove');
  deletedIcon.id = i;
  deletedTd.appendChild(deletedIcon);

  const deleteMM = document.getElementById(`${i}`);
  deleteMM.addEventListener('click', removeProductFromCart);

  const productName = document.createElement('td');
  productName.textContent = cart.products[i].name;
  newLine.appendChild(productName);

  const productImg = document.createElement('td');
  newLine.appendChild(productImg);
  const productImgTag = document.createElement('img');
  productImgTag.src = cart.products[i].path;
  productImgTag.width = 50;
  productImgTag.height = 50;
  productImg.appendChild(productImgTag);

  const productType = document.createElement('td');
  productType.textContent = cart.products[i].type;
  newLine.appendChild(productType);

  const individualPrice = document.createElement('td');
  individualPrice.textContent = cart.products[i].price;
  newLine.appendChild(individualPrice);

  const quantity = document.createElement('td');
  quantity.textContent = cart.products[i].quantity;

  newLine.appendChild(quantity);

  quantityText = document.createElement('input');
  quantityText.value = 0;
  quantityText.id = i;


  quantity.appendChild(quantityText);
  calcTotalId.addEventListener('click', calcTotal);

  const totalPrice = document.createElement('td');
  totalPrice.textContent = cart.products[i].price * Number(quantityText.value);

  quantityText.addEventListener('keyup', (event) => {
    event.preventDefault();
    let totalValue = event.target.value;
    prices = cart.products[i].price * Number(totalValue);
    total += prices;
    totalPrice.textContent = prices;
  });

  newLine.appendChild(totalPrice);
}

function showRender() {
  for (let i = 0; i < cart.products.length; i++) {
    render(i);
  }
  if (!cart.products.length - 1) {
    calcTotalId.classList.remove('hide');
    theaderId.classList.remove('hide');
  } else {
    calcTotalId.classList.add('hide');
    theaderId.classList.add('hide');
  }
}

function totalOfTotal() {
  const priceId = document.getElementById('price');
  if (!cart.products.length - 1) {
    priceId.value = `${total}`;
  } else {
    priceId.value = ``;
  }

}
showRender();
updateCounter();

function removeProductFromCart(event) {
  cart.removeProduct(event.target.id);
  cart.saveToLocalStorage();
  loadCart();
  removeProduct();
  updateCounter();

  showRender();
}

function removeProduct() {
  let table = document.getElementById('cartTable');
  let tableRows = table.getElementsByTagName('tr');

  let rowCount = tableRows.length;

  for (let i = rowCount - 1; i > 0; i--) {
    table.removeChild(tableRows[i]);
  }
}


function calcTotal() {
  totalOfTotal();
  tuggle();

}

const cartSection = document.getElementById('cartSection');

const submittion = document.getElementById('submittion');

function tuggle() {
  if (submittion.classList.contains('hide')) {

    cartSection.classList.add('hide');
    submittion.classList.remove('hide');

  }
  else {
    cartSection.classList.remove('hide');
    submittion.classList.add('hide');
  }
}
const order = document.getElementById('order');

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

order.addEventListener('submit', (event) => {
  event.preventDefault();
  let fname = event.target.fname.value;
  let lname = event.target.lname.value;
  let loc = event.target.loc.value;
  let phnum = event.target.phnum.value;
  let price = event.target.price.value;
  tuggle();
  order.reset();
  localStorage.setItem('Cart', '[]');
  calcTotalId.classList.add('hide');
  theaderId.classList.add('hide');
  const iconCart = document.getElementById('iconCart');
  const itemCount = document.getElementById('productCount');
  iconCart.classList.add('cart-empty');
  iconCart.classList.remove('cart-add');
  itemCount.textContent = ``;
  removeProduct();

  const alertsubmition = document.getElementById('alert');

  const urname = document.getElementById('urname');

  const urloc = document.getElementById('urloc');

  const deliverytime = document.getElementById('deliverytime');

  const urphone = document.getElementById('urphone');

  const recipt = document.getElementById('recipt');

  alertsubmition.classList.remove('hide');
  urname.textContent = `Name: ${fname} ${lname}`;
  urloc.textContent = `Location: ${loc}`;
  deliverytime.textContent = `Expected time of Delivery ${getRndInteger(1, 7)} days`;
  urphone.textContent = `Phone number ${phnum}`;
  recipt.textContent = `Total Price ${price}`;
  setTimeout(function () {
    alertsubmition.classList.add('hide');
  }, 10000);
});
