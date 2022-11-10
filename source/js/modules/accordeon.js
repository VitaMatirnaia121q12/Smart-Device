let sectionsOpen = document.querySelector('.sections__plus');
let sectionsClose = document.querySelector('.sections__minus');
let contactsOpen = document.querySelector('.contacts__plus');
let contactsClose = document.querySelector('.contacts__minus');
let sectionsContainer = document.querySelector('.sections');
let contactsContainer = document.querySelector('.contacts');

export const switchBlocks = () => {
  if (sectionsOpen !== null && sectionsClose !== null && sectionsContainer !== null && contactsOpen !== null && contactsClose !== null && contactsContainer !== null) {
    sectionsOpen.addEventListener('click', function () {
      contactsContainer.classList.remove('contacts-active');
      sectionsContainer.classList.add('sections-active');
    });

    sectionsClose.addEventListener('click', function () {
      contactsContainer.classList.add('contacts-active');
      sectionsContainer.classList.remove('sections-active');
    });

    contactsOpen.addEventListener('click', function () {
      contactsContainer.classList.add('contacts-active');
      sectionsContainer.classList.remove('sections-active');
    });

    contactsClose.addEventListener('click', function () {
      contactsContainer.classList.remove('contacts-active');
      sectionsContainer.classList.add('sections-active');
    });
  }
};
