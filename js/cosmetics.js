'use strict';


loadCart();

for (let i = 0; i < name.length; i++) {
  let newProduct = new Product(name[i], info[i], path[i], type[i], price[i]);

  if (newProduct.type === 'cosmetics') {
    newProduct.render(i);
  }
}

updateCounter();

