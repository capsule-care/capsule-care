/* eslint-disable no-undef */
'use strict';

for (let i = 0; i < name.length; i++) {
  let newProduct = new Product(name[i], info[i], path[i], type[i], price[i]);

  if (newProduct.type === 'drugs') {
    newProduct.render(i);
  }
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