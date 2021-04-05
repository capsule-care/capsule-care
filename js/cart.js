'use strict';

loadCart();

function render(i) {
  const cartTable = document.getElementById('cartTable');

  const newLine = document.createElement('tr');
  cartTable.appendChild(newLine);

  let deletedTd = document.createElement('td');
  deletedTd.textContent = 'remove';
  deletedTd.id = i;
  newLine.appendChild(deletedTd);

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

  const totalPrice = document.createElement('td');
  totalPrice.textContent = cart.products[i].price * 1;
  newLine.appendChild(totalPrice);
}

for (let i = 0; i < cart.products.length; i++) {
  render(i);
}

updateCounter();

function removeProductFromCart(event) {
  cart.removeProduct(event.target.id);
  cart.saveToLocalStorage();
  loadCart();
  updateCounter();
  console.log(event.target.id);
  // removeProduct(event.target.id);
  render(event.target.id);
}

function removeProduct(i) {
  let table = document.getElementById('cart');
  let tableRows = table.getElementsByTagName('tr');

  table.removeChild(tableRows[i]);
}

console.log(cart.products.length);


