
const cta = document.createElement('BUTTON');

const loadHome = () => {
  const elements = document.createElement('DIV');
  elements.setAttribute('id', 'home');
  elements.setAttribute('class', 'elements');
  const smallText = document.createElement('P');
  const mainLine = document.createElement('H2');

  const nav = document.querySelector('nav > ul');
  const navLis = nav.childNodes
  const pageBtn = document.querySelector('#home');
  for (let i = 0; i < navLis.length; i += 1) {
    navLis[i].classList.remove('active');
  }

  pageBtn.classList.add('active');

  mainLine.textContent = "Beer - Coffee - Snacks";
  smallText.innerText = "Get the best experience at Buggie Snacks";
  cta.innerText = 'View our Menu'
  elements.appendChild(smallText);
  elements.appendChild(mainLine);
  elements.appendChild(cta);

  content.appendChild(elements);
}

export { cta, loadHome }