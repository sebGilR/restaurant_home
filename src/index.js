import './style.scss';
import * as Header from './modules/header';
import * as Home from './modules/home';
import loadMenu from './modules/menu';
import loadContact from './modules/contact';

const content = document.querySelector('#content');

// Header
Header.loadHeader();

// main wrapper

const cleanDOM = () => {
  content.innerHTML = '';
};

document.addEventListener('onload', Home.loadHome());

Home.cta.addEventListener('click', () => {
  cleanDOM();
  loadMenu();
});

Header.homeLi.addEventListener('click', () => {
  cleanDOM();
  Home.loadHome();
});

Header.menuLi.addEventListener('click', () => {
  cleanDOM();
  loadMenu();
});

Header.reserveLi.addEventListener('click', () => {
  cleanDOM();
  loadContact();
});
