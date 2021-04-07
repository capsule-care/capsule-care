'use strict';

loadCart();
let quantityText;
let prices=0;
let total=0;


const calcTotalId = document.getElementById("calcTotal");

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
  quantityText.id=i;

 
  quantity.appendChild(quantityText);
  calcTotalId.addEventListener('click', calcTotal);
  
const totalPrice = document.createElement('td');
  totalPrice.textContent = cart.products[i].price * Number(quantityText.value);
  
  quantityText.addEventListener('keyup',(event)=>{
    event.preventDefault();
  let totalValue=event.target.value;
  prices=cart.products[i].price * Number(totalValue);
  total+=prices;
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
  } else {
    calcTotalId.classList.add('hide');
  }
}

function totalOfTotal() {
  const totalId = document.getElementById('total'); 
  if (!cart.products.length - 1) {
    totalId.textContent = `Total Price: ${total}`;
  } else {
    totalId.textContent = ``;
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
}


