/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
'use strict';

function Product(name, desc, path, type, price) {
  this.name = name;
  this.path = path;
  this.desc = desc;
  this.type = type;
  this.price = price;
  Product.all.push(this);
}
Product.all = [];

Product.prototype.render = function () {
  let cards = document.getElementById('cards');

  let cardItem = document.createElement('div');
  cardItem.classList.add('cardItem');
  cards.appendChild(cardItem);

  let cardbox = document.createElement('div');
  cardbox.classList.add('cardbox');
  cardItem.appendChild(cardbox);

  let cardImgdiv = document.createElement('div');
  cardImgdiv.classList.add('cardImg');
  cardbox.appendChild(cardImgdiv);

  let cardImg = document.createElement('img');
  cardImg.classList.add('cardImg');
  cardImg.src = this.path;
  cardImg.alt = this.name;
  cardImg.title = this.name;
  cardImgdiv.appendChild(cardImg);

  let cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');
  cardbox.appendChild(cardContent);

  let cardTitle = document.createElement('div');
  cardTitle.classList.add('cardTitle');
  cardTitle.textContent = this.name;
  cardContent.appendChild(cardTitle);

  let cardInfo = document.createElement('p');
  cardInfo.classList.add('cardInfo');
  cardInfo.textContent = `${this.desc}`;
  cardContent.appendChild(cardInfo);

  let cardprice = document.createElement('p');
  cardprice.classList.add('cardInfo');
  cardprice.textContent = `Price : ${this.price} JD`;
  cardContent.appendChild(cardprice);
};

let name = ['Liftactiv  Collagen', 'Milk Shake Conditioner', 'Anthelios Sunscreen', 'Avene sunblock', 'La Roche-Posay Effaclar Gel', 'Garnier Light Complete', 'Keratin Gloss Serum', 'Normaderm Gel Cleanser', 'Micellar Cleansing Water', 'Panadol', 'Lansoprazole'];


let info = ['Day Cream- boosts the skin collagen production and fights ageing signs by lifting wrinkles and fine lines, redefining contours and bringing a more even skin tone.', 'A Unisex  hair care Conditioner, Imported from UK. It gives structure, Hold and maintains hairstyles without altering the natural movement of the hair It provides hair volume and shine without unwanted residue.', 'Anthelios sunscreen -suitable for sensitive skin- contains the exclusive Cell-Ox Shield® technology: broad spectrum UVA/UVB protection plus antioxidants to protect skin from free radicals.', 'Very high sun protection for dry sensitive skin on the face. Rich and moisturising texture to nourish the skin. Extremely broad-spectrum UVB-UVA protection.', 'La Roche-Posay Effaclar Gel is a delicately cleansing gel foam for oily skin and sensitive skin with content of La Roche-Posay Thermal Spring Water.', 'A brightening face cream enriched with Yuzu Lemon & Vitamin C serum, Gives spot-less, brighter skin in 1 week, contains UV filters to protect skin from sun.', 'A Serum  packed with natural keratin that fills the gaps in your hair structure leaving it mirror smooth in just one touch.  It’s also super light weight and non-greasy, so you can apply it with ease at home or on the go.', 'Deep cleansing gel for oily & acne-prone skin. Purifies skin and unclogs pores without dryness or irritation.', 'All-in-one Cleanser & Makeup Remover, clean, remove makeup and refreshes. No Need to rinse, or harsh rubbing, suitable for sensitive skin, for face and eyes.', 'info', 'info'];

let path = ['./img/cosmetics-img/1.jpg', './img/cosmetics-img/2.jpg', './img/cosmetics-img/3.jpg', './img/cosmetics-img/4.jpg', './img/cosmetics-img/5.jpg', './img/cosmetics-img/6.jpg', './img/cosmetics-img/7.jpg', './img/cosmetics-img/8.jpg', './img/cosmetics-img/9.jpg', './img/drugs/panadol.jpg', './img/drugs/lansoprazole.jpg'];

let type = ['cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'drugs', 'drugs'];

let price = [30, 15, 15, 20, 20, 15, 17, 20, 8, 4, 112.25];



function Cart(name, path, price, type, quantity) {
  this.name = name;
  this.path = path;
  this.price = price;
  this.type = type;
  this.quantity = quantity;
  this.total = this.price * this.quantity;
  Cart.all.push(this);
}
Cart.all = [];


Cart.prototype.render = function () {
  const cartTable = document.getElementById('cartTable');

  const newLine = document.createElement('tr');
  cartTable.appendChild(newLine);

  let deletedTd = document.createElement('td');
  deletedTd.textContent = 'remove';
  newLine.appendChild(deletedTd);

  const productName = document.createElement('td');
  productName.textContent = this.name;
  newLine.appendChild(productName);

  const productImg = document.createElement('td');
  newLine.appendChild(productImg);
  const productImgTag = document.createElement('img');
  productImgTag.src = this.path;
  productImgTag.width = 50;
  productImgTag.height = 50;
  productImg.appendChild(productImgTag);

  const productType = document.createElement('td');
  productType.textContent = this.type;
  newLine.appendChild(productType);

  const individualPrice = document.createElement('td');
  individualPrice.textContent = this.price;
  newLine.appendChild(individualPrice);

  const quantity = document.createElement('td');
  quantity.textContent = this.quantity;
  newLine.appendChild(quantity);

  const totalPrice = document.createElement('td');
  totalPrice.textContent = this.total;
  newLine.appendChild(totalPrice);

};
