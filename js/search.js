'use strict';
let searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keyup', search);
let cards = document.querySelectorAll('.page .cardItem');
let searchTerm = '';
let title = '';
function search(e) {
  searchTerm = e.target.value.toLowerCase();
  cards.forEach((card) => {
    title = card.firstElementChild.textContent.toLowerCase();
    title.includes(searchTerm) ? card.style.display = 'flex' : card.style.display = 'none';
  });
}
