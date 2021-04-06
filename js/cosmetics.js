'use strict';


loadCart();

function cosmeticsRender() {

  for (let i = 0; i < name.length; i++) {
    let newProduct = new Product(name[i], info[i], path[i], type[i], price[i]);

    if (newProduct.type.toLowerCase() === 'cosmetics'.toLowerCase()) {
      newProduct.render(i);
    }
  }
}

gettingItem();

function cosmeticsRenderLocal() {
  for (let i = 0; i < 20; i++) {

    if (Product.all[i].type.toLowerCase() === 'cosmetics'.toLowerCase()) {
      let newProduct = new Product(Product.all[i].name, Product.all[i].info, Product.all[i].path, Product.all[i].type, Product.all[i].price);
      newProduct.render(i);
    }
  }
}

cosmeticsRender();

cosmeticsRenderLocal();

updateCounter();

