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

  console.log(addProduct);

  gettingItem();



  // Product.all.push(addProduct);



  settingItem();

  const alert = document.getElementById('alert');
  if (alert.classList === 'hide') {
    alert.classList.remove('hide');

  }

  setTimeout(function () {
    alert.classList.add('hide');
  }, 3000);

  addProductForm.reset();
}


//mk
//om
//lo
//mh
//eb
