'use strict';

function Product(name, desc, path, type) {
  this.name = name;
  this.path = path;
  this.desc = desc;
  this.type = type;
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
  cardImgdiv.appendChild(cardImg);

  let cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');
  cardbox.appendChild(cardContent);

  let cardTitle = document.createElement('div');
  cardTitle.classList.add('cardTitle');
  cardTitle.textContent = this.name;
  cardContent.appendChild(cardTitle);

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');
  cardInfo.textContent = this.desc;
  cardContent.appendChild(cardInfo);
};

let name = ['sunblock', 'Panadol','Lansoprazole'];
let info = ['desc', 'The Ingredients in Panadol Extra with Optizorb relieves pain 3 times more effective than standard paracetamol.','This compound is also offered as part of Sigma′s Library of Pharmacologically Active Compounds (LOPAC®1280), a biologically annotated collection of high-quality, ready-to-screen compounds. Click here to learn more.'];
let path = ['./img/cosmetics-img/sunblock.jpg', 'https://i-cf3.gskstatic.com/content/dam/cf-consumer-healthcare/panadol/en_ae/Products/Panadol%20Extra%20455x455.jpg?auto=format','https://www.doctor-4-u.co.uk/media/catalog/product/cache/4846c044a117da5cf73523315de05422/l/a/lansoprazole-2.1.jpg'];
let type = ['cosmetics', 'drugs','drugs'];

