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

let name = ['sunblock', 'mohammad'];
let info = ['desc', 'pow pow'];
let path = ['./img/cosmetics-img/sunblock.jpg', 'https://media.voltron.alhurra.com/Drupal/01live-106/styles/sourced/s3/2019-12/001D439A-FD4A-4B12-AFFD-07380DA8C295.jpg?itok=WHQITdkq'];
let type = ['cosmetics', 'drugs'];

