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






drugsRender();


updateCounter();
