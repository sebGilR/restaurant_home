import './style.scss';
import * as Header from './modules/header';
import * as Home from './modules/home';
import * as Menu from './modules/menu';
import * as Reserve from './modules/contact';

const content = document.querySelector('#content');

// Header
Header.loadHeader();

// main wrapper

const cleanDOM = () => {
  content.innerHTML = "";
}

document.addEventListener('onload', Home.loadHome());

Home.cta.addEventListener('click', function () {
  cleanDOM();
  Menu.loadMenu()
})

Header.homeLi.addEventListener('click', function () {
  cleanDOM();
  Home.loadHome();
});

Header.menuLi.addEventListener('click', function () {
  cleanDOM();
  Menu.loadMenu();
});

Header.reserveLi.addEventListener('click', function () {
  cleanDOM();
  Reserve.loadContact();
});
