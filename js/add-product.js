'use strict';

loadCart();

updateCounter();


const addProductForm = document.getElementById('addProduct');

addProductForm.addEventListener('submit', addNewProduct);


function addNewProduct(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let ProductDesc = event.target.ProductDesc.value;
  let ProductImg = event.target.ProductImg.value;
  let ProductType = event.target.ProductType.value.toLowerCase();
  let ProductPrice = Number(event.target.ProductPrice.value);


  let addProduct = new Product(name, ProductDesc, ProductImg, ProductType, ProductPrice);


  gettingItem();
  Product.all.push(addProduct);
  settingItem();

  addProductForm.reset();
}

function settingItem() {
  let data = JSON.stringify(Product.all);
  localStorage.setItem('Product', data);
}

