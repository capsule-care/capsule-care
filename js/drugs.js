'use strict';

for (let i = 0; i < name.length; i++) {
  let newProduct = new Product(name[i], info[i], path[i], type[i]);

  if (newProduct.type === 'drugs') {
    newProduct.render();
  }
}




