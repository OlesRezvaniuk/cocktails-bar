const refsMenu = {
  headerBtnMenu: document.querySelector('.header__button-menu'),
  headerMenu: document.querySelector('.header__menu'),
  menuIcon: document.querySelector('.header__icon-menu'),
  closeIcon: document.querySelector('.header__icon-menu--close'),
  headerIconMenu: document.querySelector('.header__icon-menu'),
  headerIconMenuClose: document.querySelector('.header__icon-menu--close'),
  searchForm: document.querySelector(
    '#header > div > div.header-container.container > div > form'
  ),
};
const inputIsHidden = document.querySelector('.header__input-box--menu');
const favoriteMenuEl = document.querySelector('.header__favorite-box');

const buttonImg = refsMenu.searchForm[0].children[0];
buttonImg.style.pointerEvents = 'none';

refsMenu.headerBtnMenu.addEventListener('click', onClickMenuButton);
refsMenu.searchForm.addEventListener('click', onClickSearchButton);

function onClickMenuButton() {
  refsMenu.headerMenu.classList.toggle('header__menu--is-hidden');
  refsMenu.menuIcon.classList.toggle('header__icon-menu--is-hidden');
  refsMenu.closeIcon.classList.toggle('header__icon-menu--is-hidden');
  favoriteMenuEl.classList.add('header__favorite-box--is-hidden');
  inputIsHidden.classList.toggle('inputMenu--is-hidden');
}

function onClickSearchButton(e) {
  if (e.target === refsMenu.searchForm[0]) {
    onClickMenuButton();
  }
  // console.dir(refsMenu.searchForm[0]);
}

// refsMenu.headerBtnMenu.addEventListener('mouseover', onMenuBtnMouseOver);
// refsMenu.headerBtnMenu.addEventListener('mouseout', onMenuBtnMouseOut);

// function onMenuBtnMouseOver() {
//   refsMenu.headerIconMenu.style.fill = '#fd5103';
//   refsMenu.headerIconMenuClose.style.fill = '#fd5103';
// }
// function onMenuBtnMouseOut() {
//   refsMenu.headerIconMenu.style.fill = 'black';
//   refsMenu.headerIconMenuClose.style.fill = 'black';
// }
