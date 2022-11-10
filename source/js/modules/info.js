let showButton = document.querySelector('.about__show');
let wrapButton = document.querySelector('.about__wrap');
let hiddenText = document.querySelector('.about__wrapper');

export const openInfo = () => {
  if (showButton !== null && hiddenText !== null) {
    showButton.addEventListener('click', function () {
      hiddenText.classList.replace('about__close', 'about__open');
      showButton.classList.replace('about__open', 'about__close');
    });
  }
};

export const closeInfo = () => {
  if (wrapButton !== null && hiddenText !== null && showButton !== null) {
    wrapButton.addEventListener('click', function () {
      hiddenText.classList.replace('about__open', 'about__close');
      showButton.classList.replace('about__close', 'about__open');
    });
  }
};
