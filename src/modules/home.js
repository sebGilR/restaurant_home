
const elements = document.createElement('DIV');
const smallText = document.createElement('P');
const mainLine = document.createElement('H2');
const cta = document.createElement('BUTTON');

const loadHome = () => {
  mainLine.textContent = "Beer - Coffee - Snacks";
  smallText.innerText = "Get the best experience at Buggie Snacks";
  cta.innerText = 'View our Menu'
  elements.appendChild(smallText);
  elements.appendChild(mainLine);
  elements.appendChild(cta);

  content.appendChild(elements);
}

export { cta, loadHome }