'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>`;

const header = document.querySelector('.header');

header.append(message);

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
  });

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //   const s1coords = section1.getBoundingClientRect();
  //   window.scrollTo(s1coords);
  //   console.log(e.target.getBoundingClientRect());
  //   console.log(window.scrollX, window.scrollY);
  //   console.log(
  //     document.documentElement.clientHeight,
  //     document.documentElement.clientWidth
  //   );

  // scrolling

  //   window.scrollTo(
  //     s1coords.left + window.scrollX,
  //     s1coords.top + window.screenY
  //   );

  //   window.scrollTo({
  //     left: s1coords.left + window.scrollX,
  //     top: s1coords.top + window.scrollY,
  //     behavior: "smooth",
  //   });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// mdn events - remove event listener

// random bg color

const randomInt = (min, max) => {
  Math.floor(Math.random() * (max - min + 1) + min);
};

const randomColor = `rgba(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
  0,
  255
)})`;

document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor;
  console.log(e.target, e.currentTarget);
  e.stopPropagation();
});

// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (e) {}, true);

// document.querySelector(".nav").addEventListener("click", function (e) {});
