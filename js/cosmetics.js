/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
'use strict';
let cosmetics = [sunblock];

let AddCosmetic = function (path, name, desc) {
  this.path = `./img/cosmetics-img/${Name}.jpg`;

  this.name = name;
  this.desc = desc;
  AddCosmetic.all.push(this);

};
AddCosmetic.all = [];

function render() {
  let cards = document.getElementsByClassName('cards');
  let cardItem = document.createElement('cardItem');
  cards.appendChild(cardItem);
  let cardbox = createElement('cardbox');
  cardItem.appendChild(cardbox);

  let cardImg = createElement('cardImg');
  cardbox.appendChild(cardImg);

  //! cardImg.attribute

  let cardContent = getElementsByClassName('cardContent');
  let cardTitle = createElement('cardTitle');
  cardContent.appendChild(cardTitle);
  cardTitle.textcontent = AddCosmetic.all.name;

  let cardInfo = createElement('cardInfo');
  cardContent.appendChild(cardInfo);
  cardInfo.textcontent = AddCosmetic.all.desc;


}
