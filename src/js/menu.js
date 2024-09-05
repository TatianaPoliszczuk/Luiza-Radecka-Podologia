const mediaMenu = document.querySelector('.media-menu');

const burgerButton = document.querySelector('.burger-menu');

const closeMediaButton = document.querySelector('.close-menu');

const buttonItemMenu1 = document.querySelector('.for-close-1');
const buttonItemMenu2 = document.querySelector('.for-close-2');
const buttonItemMenu3 = document.querySelector('.for-close-3');
const buttonItemMenu4 = document.querySelector('.for-close-4');
const buttonItemMenu5 = document.querySelector('.for-close-5');

//1 open menu
burgerButton.addEventListener('click', () => {
  mediaMenu.classList.toggle('is-open-menu');
});
//2 close menu
closeMediaButton.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});

// About Us close menu
buttonItemMenu1.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Catalog close menu
buttonItemMenu2.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Sale close menu
buttonItemMenu3.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Reviews close menu
buttonItemMenu4.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});
// Contact Us close menu
buttonItemMenu5.addEventListener('click', () => {
  mediaMenu.classList.remove('is-open-menu');
});

const scrollUp = document.querySelector('.scroll-up');

window.addEventListener('scroll', function () {
  scrollUp.classList.toggle('is-open-scroll', window.scrollY > 500);
});

// (() => {
//   // добавили доп класс на контейнер менюшки
//   const mobileMenu = document.querySelector('.js-menu-container');
//   // добавили доп класс на кнопку открывать менюшку
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   // добавили доп класс на кнопку закрывать менюшку
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   // добавили доп класс что бы закрыть после нажатия на ссылку
//   const menuLinks = document.querySelectorAll('.mobile-modal-link');
//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');
//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   //  добавили что бы закрывалось при нажатии на ссылку
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', toggleMenu);
//   });
//   // стандартно из скрипта от Репеты
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);
//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 1280px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();

document.querySelector('.catalog-btn').addEventListener('click', function () {
  // Pobierz wszystkie ukryte elementy listy
  const hiddenItems = document.querySelectorAll(
    '.catalog-list li:nth-child(n + 5)'
  );

  hiddenItems.forEach(function (item) {
    // Jeśli element jest ukryty, pokaż go
    if (item.style.display === 'none' || item.style.display === '') {
      item.style.display = 'block';
    } else {
      // Jeśli element jest widoczny, ukryj go ponownie
      item.style.display = 'none';
    }
  });

  // Zmień tekst przycisku na "Pokaż mniej" lub "Pokaż więcej"
  if (this.textContent === 'Pokaż więcej') {
    this.textContent = 'Pokaż mniej';
  } else {
    this.textContent = 'Pokaż więcej';
  }
});
