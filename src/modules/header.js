const body = document.querySelector('body');
const homeLi = document.createElement('LI');
const menuLi = document.createElement('LI');
const reserveLi = document.createElement('LI');

const loadHeader = () => {

  const header = document.createElement('HEADER');
  header.setAttribute('id', 'header');

  const logo = document.createElement('h1');
  logo.innerText = "Buggie Snacks";

  const nav = document.createElement('NAV');
  const ul = document.createElement('UL');

  homeLi.textContent = "Home";
  homeLi.setAttribute('id', 'home');
  menuLi.textContent = "Menu";
  menuLi.setAttribute('id', 'menu');
  reserveLi.textContent = "Contact us";
  reserveLi.setAttribute('id', 'contact');

  const navItems = [homeLi, menuLi, reserveLi];

  for (let i = 0; i < navItems.length; i += 1) {
    ul.appendChild(navItems[i]);
  }
  nav.appendChild(ul);
  header.appendChild(logo);
  header.appendChild(nav);

  body.insertBefore(header, content);
}

export { homeLi, menuLi, reserveLi, loadHeader }