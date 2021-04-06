'use strict';

loadCart();

function nutritionRender() {

  for (let i = 0; i < name.length; i++) {
    let newProduct = new Product(name[i], info[i], path[i], type[i], price[i]);

    if (newProduct.type.toLowerCase() === 'nutrition'.toLowerCase()) {
      newProduct.render(i);
    }
  }
}

gettingItem();

function nutritionRenderLocal() {
  for (let i = 0; i < productlength; i++) {

    if (Product.all[i].type.toLowerCase() === 'nutrition'.toLowerCase()) {
      let newProduct = new Product(Product.all[i].name, Product.all[i].info, Product.all[i].path, Product.all[i].type, Product.all[i].price);
      newProduct.render(i);
    }
  }
}

nutritionRender();

nutritionRenderLocal();

updateCounter();