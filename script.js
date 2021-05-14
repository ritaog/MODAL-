'use strict';
window.onload = modal;
function modal() {

//variables
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

//click event on buttons to show popup
for (let button of Array.from(btnsOpenModal)) {
  button.addEventListener('click', showPopup);
}

//click event on button to hide popup
btnCloseModal.addEventListener('click', hidePopup);

//click event on overlay to hide popup
overlay.addEventListener('click', hidePopup);

//keypress event to hide popup
document.addEventListener('keydown', event => {
  //if the escape key is pressed and the popup is visible
  if (event.key === 'Escape' && !modal.classList.contains('hidden'))
    hidePopup();
});

//handles showing of popup and overlay
function showPopup() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
  // modal.style.display = 'block';
  // overlay.style.display = 'block';
}

//handles closing of popup and overlay
function hidePopup() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
  //modal.style.display = 'none';
  //overlay.style.display = 'none';
}

}
