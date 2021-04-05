'use strict';
const addProductForm = document.getElementById('addProduct');

addProductForm.addEventListener('submit', addNewProduct);

function addNewProduct(event) {
  event.preventDefault();
  let name = event.target.name.value;
  let ProductDesc = event.target.ProductDesc.value;
  let ProductImg = event.target.ProductImg.value;
  let ProductType = event.target.ProductType.value;
  let ProductPrice = Number(event.target.ProductPrice.value);


  let addProduct = new Product(name, ProductDesc, ProductImg, ProductType, ProductPrice);
  addProductForm.reset();
  console.log(addProduct);
}



// Local storage

function settingItems() {
  let items = JSON.stringify(Product.all);
  localStorage.setItem('Products', items);
}

function gettingItems() {
  let asString = localStorage.getItem('Products');
  let asObj = JSON.parse(asString);

  if (asObj !== null) {
    Product.all = asObj;
    //render();
  }

}
gettingItems();

// We will link the from to the local storage
