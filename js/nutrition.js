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


nutritionRender();


updateCounter();
