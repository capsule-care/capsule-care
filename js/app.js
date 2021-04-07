'use strict';

function Cart(products) {
  this.products = products;
}

Cart.prototype.addProduct = function (name, path, price, type) {
  this.products.push(new CartProduct(name, path, price, type));
};

Cart.prototype.saveToLocalStorage = function () {
  localStorage.setItem('Cart', JSON.stringify(this.products));
};

Cart.prototype.removeProduct = function (product) {
  this.products.splice(product, 1);
};

function CartProduct(name, path, price, type) {
  this.name = name;
  this.path = path;
  this.price = price;
  this.type = type;
}

let cart = new Cart([]);


function loadCart() {
  const cartProducts = JSON.parse(localStorage.getItem('Cart')) || [];
  cart = new Cart(cartProducts);
}

function updateCounter() {
  const iconCart = document.getElementById('iconCart');
  const itemCount = document.getElementById('productCount');

  if (!cart.products.length - 1) {
    iconCart.classList.remove('cart-empty');
    iconCart.classList.add('cart-add');
    itemCount.textContent = `(${cart.products.length})`;
  }
  else {
    iconCart.classList.add('cart-empty');
    iconCart.classList.remove('cart-add');
    itemCount.textContent = ``;
  }
}

function Product(name, desc, path, type, price) {
  this.name = name;
  this.path = path;
  this.desc = desc;
  this.type = type;
  this.price = price;
  Product.all.push(this);
  //settingItem();
}
Product.all = [];

let productlength;

function gettingItem() {
  let stringObj = localStorage.getItem('Product');
  let normalObj = JSON.parse(stringObj);
  if (normalObj !== null) {
    Product.all = normalObj;

    productlength = Product.all.length;
  }
}

function settingItem() {
  let data = JSON.stringify(Product.all);
  localStorage.setItem('Product', data);
}

Product.prototype.render = function (i) {
  let cards = document.getElementById('cards');

  let cardItem = document.createElement('div');
  cardItem.classList.add('cardItem');
  cards.appendChild(cardItem);

  let cardbox = document.createElement('div');
  cardbox.classList.add('cardbox');
  cardItem.appendChild(cardbox);

  let cardprice = document.createElement('p');
  cardprice.classList.add('card-price');
  cardprice.textContent = `${this.price} JD`;
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

  let addToCart = document.createElement('button');
  cardbox.appendChild(addToCart);
  addToCart.classList.add('cardButton');
  addToCart.setAttribute('id', `${i}`);
  addToCart.textContent = 'ADD TO CART';

  addToCart.addEventListener('click', addcart);
  function addcart(event) {
    event.preventDefault();

    let id = event.target.id;
    let name = Product.all[id].name;
    let path = Product.all[id].path;
    let price = Product.all[id].price;
    let type = Product.all[id].type;

    cart.addProduct(name, path, price, type);
    cart.saveToLocalStorage();
    updateCounter();

    console.log(Product.all);
    addToCart.textContent = 'This Item In Your Cart';
    addToCart.setAttribute('class', 'cardButton disabled');
    addToCart.removeEventListener('click', addcart);
  }
};


let name = ['Liftactiv  Collagen', 'Milk Shake Conditioner', 'Anthelios Sunscreen', 'Avene sunblock', 'La Roche-Posay Effaclar Gel', 'Garnier Light Complete', 'Keratin Gloss Serum', 'Normaderm Gel Cleanser', 'Micellar Cleansing Water', 'Vegan Protien', 'Serious Mass', 'Gold Standard Whey Elite', 'Gold Standard pre-workout', 'Micronised Creatine Pwoder', 'C4 Original', 'C4 Double', 'Protien Bar', 'Amino Energy', 'Gold Standard BCAA', 'Panadol', 'Lansoprazole', 'Thiothixene', 'Advil', 'Paxil ', 'Prolia ', 'Spinraza ', 'Symbicort', 'Haldol ', 'Opana '];



let info = ['Day Cream- boosts the skin collagen production and fights ageing signs by lifting wrinkles and fine lines, redefining contours and bringing a more even skin tone.', 'A Unisex  hair care Conditioner, Imported from UK. It gives structure, Hold and maintains hairstyles without altering the natural movement of the hair It provides hair volume and shine without unwanted residue.', 'Anthelios sunscreen -suitable for sensitive skin- contains the exclusive Cell-Ox Shield® technology: broad spectrum UVA/UVB protection plus antioxidants to protect skin from free radicals.', 'Very high sun protection for dry sensitive skin on the face. Rich and moisturising texture to nourish the skin. Extremely broad-spectrum UVB-UVA protection.', 'La Roche-Posay Effaclar Gel is a delicately cleansing gel foam for oily skin and sensitive skin with content of La Roche-Posay Thermal Spring Water.', 'A brightening face cream enriched with Yuzu Lemon & Vitamin C serum, Gives spot-less, brighter skin in 1 week, contains UV filters to protect skin from sun.', 'A Serum  packed with natural keratin that fills the gaps in your hair structure leaving it mirror smooth in just one touch.  It’s also super light weight and non-greasy, so you can apply it with ease at home or on the go.', 'Deep cleansing gel for oily & acne-prone skin. Purifies skin and unclogs pores without dryness or irritation.', 'All-in-one Cleanser & Makeup Remover, clean, remove makeup and refreshes. No Need to rinse, or harsh rubbing, suitable for sensitive skin, for face and eyes.', 'For energy focus power and performance. 175 mg caffeine from natural sources per serving. 3.4 g creatine monohydrate per serving. Now with 250 mg performelon® per serving ... 330 grams ( 30 doses ).', 'The World’s best-selling whey protein powder. 24 g of premium whey protein. Low in sugars and fat and less than 120 calories ... 266 grams ( 28 doses ).', 'Supports muscle building and weight gaining. More than 1260 kcal per serving to help boost your calorie intake. 50 g protein per serving to help build and maintain muscle. More than 250 g carbohydrates per serving to help support muscle Recovery... 5455 grams ( 16 Shakes ).', 'Pre-Workout from plant sources. Vegan Society approved. 85 mg caffeine from natural sources per serving... 240 grams ( 30 doses ).', 'For energy focus power and performance. 175 mg caffeine from natural sources per serving. 3.4 g creatine monohydrate per serving. Now with 250 mg performelon® per serving ... 330 grams ( 30 doses).', '1.6g CarnoSyn® Beta- Alanine. 1g Creatine Nitrate (NO3-T®). 150mg Caffeine. 1g Arginine AKG... 190 grams ( 30 doses ).', '3.6g CarnoSyn® Beta- Alanine. 3g Creatine Nitrate (NO3-T®). 150mg Caffeine. 1g Arginine AKG... 380 grams ( 60 doses ).', 'New delicious, milk chocolate coating. 20 g of high protein. Free from palm oil and suitable for vegetarians... 1 bar.', 'For anytime energy and improved focus. Supports amino acid intake with 5 g of amino acids per serving. 100 mg of Caffeine 270 grams ( 30 doses ).', 'For anytime energy and improved focus. Supports amino acid intake with 5 g of amino acids per serving. 100 mg of Caffeine... 270 grams ( 30 doses ).', 'Increase performance during high intensity training. 3.4 g of pure Creatine Monohydrate to increase muscle power. Mixes easily with no gritty taste... 634 grams ( 176 doses ).', 'For fatigue reduction and immune support. 5 g of high quality bcaas in 2:1:1 ratio per serving. 374 mg electrolytes per serving... 266 grams ( 28 doses .', 'Thiothixene is a thioxanthene derivative. Specifically, it is the cis isomer of N,N-dimethyl-9-[3-(4- methyl-1-piperazinyl)propylidene]thioxanthene-2-sulfonamide. It may be represented by the following structural formula', 'Use Advil exactly as directed on the label, or as prescribed by your doctor. Use the lowest dose that is effective in treating your condition.', 'ake Paxil exactly as prescribed by your doctor. Follow all directions on your prescription label and read all medication guides or instruction sheets. Your doctor may occasionally change your dose.', 'Prolia is injected under the skin of your stomach, upper thigh, or upper arm. A healthcare provider will give you this injection.', 'Spinraza is injected directly into the fluid that surrounds the brain and spinal cord (cerebrospinal fluid). A healthcare provider will give you this injection.', 'Symbicort comes with a medication guide for safe and effective use, and directions for priming and cleaning the Symbicort inhaler device. Ask your doctor or pharmacist if you have any questions.', 'Taking too much Haldol can cause a serious heart rhythm disorder or sudden death. Never take more than your prescribed dose.', 'Take Opana exactly as prescribed. Follow all directions on your prescription label. Opana can slow or stop your breathing, especially when you start using this medicine or whenever your dose is changed. Never take Opana in larger amounts, or for longer than prescribed.'];



let path = ['./img/cosmetics-img/1.jpg', './img/cosmetics-img/2.jpg', './img/cosmetics-img/3.jpg', './img/cosmetics-img/4.jpg', './img/cosmetics-img/5.jpg', './img/cosmetics-img/6.jpg', './img/cosmetics-img/7.jpg', './img/cosmetics-img/8.jpg', './img/cosmetics-img/9.jpg', './img/nutrition-img/1.jpg', './img/nutrition-img/2.jpg', './img/nutrition-img/3.jpg', './img/nutrition-img/4.jpg', './img/nutrition-img/5.jpg', './img/nutrition-img/6.jpg', './img/nutrition-img/7.jpg', './img/nutrition-img/8.jpg', './img/nutrition-img/9.jpg', './img/nutrition-img/10.jpg', './img/drugs/panadol.jpg', './img/drugs/lansoprazole.jpg', 'https://www.drugs.com/pro/images/b067b400-66cd-422d-a631-9ce0c935d2b2/thio5mg1000.jpg', 'https://i-cf5.gskstatic.com/content/dam/cf-consumer-healthcare/bp-advil/en_US/products/advil-gel-caplets-new_0_0.png?auto=format', 'https://www.inhousepharmacy.vu/i-m-1951-paxil-paroxetine-20mg.jpeg', 'https://almalomat.com/wp-content/uploads/2020/02/1000060707a__t670-630x279.jpg', 'https://smanewstoday.com/wp-content/uploads/2018/08/Spinraza-box-700x475@2x.jpg', 'https://www.3lagak.com/wp-content/uploads/2019/09/83310a05c49e76d402340658ae4af91a3e84adfb6329921f7015a722541db0cd.jpg', 'https://worabia.com/wp-content/uploads/2020/11/haldol.jpg', 'https://cdn.cnn.com/cnnnext/dam/assets/170921152007-opana-er-endo-opioid-large-169.jpg'];

let type = ['cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'cosmetics', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'nutrition', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs', 'drugs'];

let price = [30, 15, 15, 20, 20, 15, 17, 20, 8, 28, 19, 15, 15, 12, 21, 47, 2, 14, 14, 4, 11, 12, 10, 13, 43, 18, 32, 14, 4];



