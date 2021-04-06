'use strict';

loadCart();

function drugsRender() {

  for (let i = 0; i < name.length; i++) {
    let newProduct = new Product(name[i], info[i], path[i], type[i], price[i]);

    if (newProduct.type.toLowerCase() === 'drugs'.toLowerCase()) {
      newProduct.render(i);
    }
  }

}

gettingItem();

function drugsRenderLocal() {
  for (let i = 0; i < 20; i++) {

    if (Product.all[i].type.toLowerCase() === 'drugs'.toLowerCase()) {
      let newProduct = new Product(Product.all[i].name, Product.all[i].info, Product.all[i].path, Product.all[i].type, Product.all[i].price);
      newProduct.render(i);
    }
  }
}



drugsRender();

drugsRenderLocal();

updateCounter();
