var elOpenModalButton = document.querySelector('.js-modal--open');
var elCloseModalButton = document.querySelector('.js-close-modal-button');
var elModal = document.querySelector('.js-modal');

elOpenModalButton.addEventListener('click', function () {
  elModal.classList.add('modal-open');
});

elCloseModalButton.addEventListener('click', function () {
  elModal.classList.remove('modal-open');
});


// TAB

var elsTabToggle = document.querySelectorAll('.tab__toggle');

elsTabToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.tab').classList.toggle('tab--active');
  })
})