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



cosmeticsRender();

updateCounter();

