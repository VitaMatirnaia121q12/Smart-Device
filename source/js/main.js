let showButton = document.querySelector('.about__show');
let wrapButton = document.querySelector('.about__wrap');
let hiddenText = document.querySelector('.about__wrapper');
let popupOpenBtn = document.querySelector('.header__button');
let modal = document.querySelector('.modal');
let sectionsOpen = document.querySelector('.sections__plus');
let sectionsClose = document.querySelector('.sections__minus');
let sectionsList = document.querySelector('.sections__list');
let contactsOpen = document.querySelector('.contacts__plus');
let contactsClose = document.querySelector('.contacts__minus');
let contactsList = document.querySelector('.contacts__list');

sectionsOpen.addEventListener('click', function () {
  sectionsList.style.display = 'block';
  sectionsClose.style.display = 'block';
  sectionsOpen.style.display = 'none';
  contactsList.style.display = 'none';
  contactsOpen.style.display = 'block';
  contactsClose.style.display = 'none';
});

sectionsClose.addEventListener('click', function () {
  sectionsList.style.display = 'none';
  sectionsClose.style.display = 'none';
  sectionsOpen.style.display = 'block';
  contactsClose.style.display = 'none';
  contactsList.style.display = 'block';
  contactsOpen.style.display = 'none';
});

contactsOpen.addEventListener('click', function () {
  contactsList.style.display = 'block';
  contactsClose.style.display = 'block';
  contactsOpen.style.display = 'none';
  sectionsList.style.display = 'none';
  sectionsClose.style.display = 'none';
  sectionsOpen.style.display = 'block';
});

contactsClose.addEventListener('click', function () {
  contactsList.style.display = 'none';
  contactsClose.style.display = 'none';
  contactsOpen.style.display = 'block';
  sectionsList.style.display = 'block';
  sectionsClose.style.display = 'block';
  sectionsOpen.style.display = 'none';
});


showButton.addEventListener('click', function () {
  hiddenText.style.display = 'block';
  showButton.style.display = 'none';
});

wrapButton.addEventListener('click', function () {
  hiddenText.style.display = 'none';
  showButton.style.display = 'block';
});

const closeModal = () => {
  modal.addEventListener('click', (evt) => {
    if (evt.target.closest('.modal__exit')) {
      modal.classList.remove('modal__active');
    }
    if (!evt.target.closest('.modal__feedback')) {
      modal.classList.remove('modal__active');
    }
  });
};

popupOpenBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal__active');
});

closeModal();
