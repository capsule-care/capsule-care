/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable no-trailing-spaces */
'use strict';
let cosmetics = ['sunblock','desc','cosmetic','desc'];
console.log(cosmetics);
function AddCosmetic(name, desc ) {
  this.name = name;
  this.path = `./img/cosmetics-img/${name}.jpg`;
  //this.path=imgurl;
  
  this.desc = desc;
  AddCosmetic.all.push(this);
  //this.type=type;
};
AddCosmetic.all = [];

 AddCosmetic.prototype.render = function() {
  let cards = document.getElementById('cards');
  let cardItem = document.createElement('div');
  cardItem.classList.add('cardItem');
  cards.appendChild(cardItem);
  let cardbox =document.createElement('div');
  cardbox.classList.add('cardbox');
  cardbox.appendChild(cardItem);

  let cardImgdiv =document.createElement('div');
  cardImgdiv.classList.add('cardImg');
  cardImgdiv.appendChild(cardItem);
  let cardImg = document.createElement('img');
  cardImg.classList.add('cardImg');
  cardImg.appendChild(cardImgdiv);
  cardImg.src=AddCosmetic.all.path;

  let cardContent = document.createElement('div');
  cardContent.classList.add('cardContent');
  let cardTitle = document.createElement('div');
  cardTitle.classList.add('cardTitle');
  cardContent.appendChild(cardTitle);
  cardTitle.textcontent = AddCosmetic.all.name;

  let cardInfo = document.createElement('div');
  cardInfo.classList.add('cardInfo');
  cardContent.appendChild(cardInfo);
  cardInfo.textcontent = AddCosmetic.all.desc;
}
let counter=0;
/*for(let i=0 ; i<cosmetics.length ; i++)
{
  let newCosmatic = new AddCosmetic(cosmetics[counter],cosmetics[counter+1]);
  counter=counter+2;
  newCosmatic.render();
}*/
let newCosmatic = new AddCosmetic('sunblock','desc');
newCosmatic.render();
//let sunvlock = new AddCosmetic('sunblock','desc');