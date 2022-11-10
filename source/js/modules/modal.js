let popupOpenBtn = document.querySelector('.header__button');
let modal = document.querySelector('.modal');
let focusField = document.querySelector('#yourname');

export const closeModal = () => {
  if (popupOpenBtn !== null && modal !== null) {
    modal.addEventListener('click', (evt) => {
      if (evt.target.closest('.modal__exit')) {
        modal.classList.remove('modal__active');
      }
      if (!evt.target.closest('.modal__feedback')) {
        modal.classList.remove('modal__active');
      }
    });
    document.addEventListener('keydown', (evt) => {
      if (modal.classList.contains('modal__active')) {
        if (evt.key === 'Escape') {
          modal.classList.remove('modal__active');
        }
      }
    });
  }
};

export const openModal = () => {
  if (popupOpenBtn !== null && modal !== null && focusField !== null) {
    popupOpenBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      modal.classList.add('modal__active');
      focusField.focus();
    });
  }
};
