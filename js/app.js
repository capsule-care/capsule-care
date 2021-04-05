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

  let cardprice = document.createElement('p');
  cardprice.classList.add('card-price');
  cardprice.textContent = `Price : ${this.price} JD`;
  cardItem.appendChild(cardprice);

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

//  let addToCart =document.getElementsByClassName('btn')
// //  cardInfo.classList.add('cardButton');
//  cardcontent.appendChild('addToCart');
//  addToCart.textContent('ADD TO CART');

};

let name = ['Liftactiv  Collagen', 'Milk Shake Conditioner', 'Anthelios Sunscreen', 'Avene sunblock', 'La Roche-Posay Effaclar Gel', 'Garnier Light Complete', 'Keratin Gloss Serum', 'Normaderm Gel Cleanser', 'Micellar Cleansing Water', 'Vegan Protien', 'Serious Mass', 'Gold Standard Whey Elite', 'Gold Standard pre-workout', 'Micronised Creatine Pwoder', 'C4 Original', 'C4 Double', 'Protien Bar', 'Amino Energy', 'Gold Standard BCAA', 'Panadol', 'Lansoprazole'];


let info = ['Day Cream- boosts the skin collagen production and fights ageing signs by lifting wrinkles and fine lines, redefining contours and bringing a more even skin tone.', 'A Unisex  hair care Conditioner, Imported from UK. It gives structure, Hold and maintains hairstyles without altering the natural movement of the hair It provides hair volume and shine without unwanted residue.', 'Anthelios sunscreen -suitable for sensitive skin- contains the exclusive Cell-Ox Shield® technology: broad spectrum UVA/UVB protection plus antioxidants to protect skin from free radicals.', 'Very high sun protection for dry sensitive skin on the face. Rich and moisturising texture to nourish the skin. Extremely broad-spectrum UVB-UVA protection.', 'La Roche-Posay Effaclar Gel is a delicately cleansing gel foam for oily skin and sensitive skin with content of La Roche-Posay Thermal Spring Water.', 'A brightening face cream enriched with Yuzu Lemon & Vitamin C serum, Gives spot-less, brighter skin in 1 week, contains UV filters to protect skin from sun.', 'A Serum  packed with natural keratin that fills the gaps in your hair structure leaving it mirror smooth in just one touch.  It’s also super light weight and non-greasy, so you can apply it with ease at home or on the go.', 'Deep cleansing gel for oily & acne-prone skin. Purifies skin and unclogs pores without dryness or irritation.', 'All-in-one Cleanser & Makeup Remover, clean, remove makeup and refreshes. No Need to rinse, or harsh rubbing, suitable for sensitive skin, for face and eyes.', 'For energy focus power and performance. 175 mg caffeine from natural sources per serving. 3.4 g creatine monohydrate per serving. Now with 250 mg performelon® per serving ... 330 grams ( 30 doses ).', 'The World’s best-selling whey protein powder. 24 g of premium whey protein. Low in sugars and fat and less than 120 calories ... 266 grams ( 28 doses ).', 'Supports muscle building and weight gaining. More than 1260 kcal per serving to help boost your calorie intake. 50 g protein per serving to help build and maintain muscle. More than 250 g carbohydrates per serving to help support muscle Recovery... 5455 grams ( 16 Shakes ).', 'Pre-Workout from plant sources. Vegan Society approved. 85 mg caffeine from natural sources per serving... 240 grams ( 30 doses ).', 'For energy focus power and performance. 175 mg caffeine from natural sources per serving. 3.4 g creatine monohydrate per serving. Now with 250 mg performelon® per serving ... 330 grams ( 30 doses).', '1.6g CarnoSyn® Beta- Alanine. 1g Creatine Nitrate (NO3-T®). 150mg Caffeine. 1g Arginine AKG... 190 grams ( 30 doses ).', '3.6g CarnoSyn® Beta- Alanine. 3g Creatine Nitrate (NO3-T®). 150mg Caffeine. 1g Arginine AKG... 380 grams ( 60 doses ).', 'New delicious, milk chocolate coating. 20 g of high protein. Free from palm oil and suitable for vegetarians... 1 bar.', 'For anytime energy and improved focus. Supports amino acid intake with 5 g of amino acids per serving. 100 mg of Caffeine 270 grams ( 30 doses ).', 'For anytime energy and improved focus. Supports amino acid intake with 5 g of amino acids per serving. 100 mg of Caffeine... 270 grams ( 30 doses ).', 'Increase performance during high intensity training. 3.4 g of pure Creatine Monohydrate to increase muscle power. Mixes easily with no gritty taste... 634 grams ( 176 doses ).', 'For fatigue reduction and immune support. 5 g of high quality bcaas in 2:1:1 ratio per serving. 374 mg electrolytes per serving... 266 grams ( 28 doses .', 'info', 'info'];

let path = ['./img/cosmetics-img/1.jpg', './img/cosmetics-img/2.jpg', './img/cosmetics-img/3.jpg', './img/cosmetics-img/4.jpg', './img/cosmetics-img/5.jpg', './img/cosmetics-img/6.jpg', './img/cosmetics-img/7.jpg', './img/cosmetics-img/8.jpg', './img/cosmetics-img/9.jpg', './img/nutrition-img/1.jpg', './img/nutrition-img/2.jpg', './img/nutrition-img/3.jpg', './img/nutrition-img/4.jpg', './img/nutrition-img/5.jpg', './img/nutrition-img/6.jpg', './img/nutrition-img/7.jpg', './img/nutrition-img/8.jpg', './img/nutrition-img/9.jpg', './img/nutrition-img/10.jpg', './img/drugs/panadol.jpg', './img/drugs/lansoprazole.jpg'];

let type = ['cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'drugs', 'drugs'];

let price = [30, 15, 15, 20, 20, 15, 17, 20, 8, 28.4, 19.9, 15.6, 15.6, 12.1, 21.7, 47.6, 2.5, 14.2, 14.9, 4, 112.25];



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

