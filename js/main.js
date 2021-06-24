// var elOpenModalButton = document.querySelector('.js-modal-open');
// var elCloseModalButton = document.querySelector('.js-close-modal-button');
// var elModal = document.querySelector('.js-modal');

// elOpenModalButton.addEventListener('click', function () {
//   elModal.classList.add('modal-open');
// });

// elCloseModalButton.addEventListener('click', function () {
//   elModal.classList.remove('modal-open');
// });


// Modalni ochuvchi hamma elementlarni topiladi
var elOpenModalbutton = document.querySelectorAll('.js-modal-open');
// Modal topiladi
var elModal = document.querySelector('.js-modal')
// Modalni yopuvchi element topiladi
var elCloseModalButton = document.querySelector('.js-close-modal-button')
// Modalni ochuvchi funksiya (modalga mos klassni qo'shadi)
var openModal = function(){
  elModal.classList.add('modal-open');
}
// Modalni yopuvchi funksiya (modaldan mos klassni olib tashlaydi)
var closeModal = function(){
  elModal.classList.remove('modal-open');
}

// Agar modalni ochuvchi tugmalar bo'lsa
if (elOpenModalbutton.length > 0){
  // Ularning har biriga link deb murojaat qiladi
  elOpenModalbutton.forEach( function(link){
    // va har biriga click hodisasida
    link.addEventListener('click', function(evt){
      // tabiiy reaksiyani to'xtatib
      evt.preventDefault();
      // Modalni ochish funksiyasini ishga tushiradi
      openModal();
    });
  });
}

// Agar modalni yopuvchi tugma bo'lsa
if (elCloseModalButton){
  // U tugmaga click hodisasida
  elCloseModalButton.addEventListener('click', function(evt){

    // Modalni yopish funksiyasini ishga tushirishni buyuradi
    closeModal();
  });
}


// TAB

var elsTabToggle = document.querySelectorAll('.tab__toggle');

elsTabToggle.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.closest('.tab').classList.toggle('tab--active');
  })
})


// article

elsArticleITem  = document.querySelectorAll('.article-card');
elsArticleLink = document.querySelectorAll('.article-card__link');

elsArticleLink.forEach(function (link) {
  link.addEventListener('click',function (evt) {
    evt.preventDefault();
    elsArticleITem.forEach(function (item) {
      item.classList.remove('article-card--open');

    })
    link.closest('.article-card').classList.add('article-card--open');
  })
})
