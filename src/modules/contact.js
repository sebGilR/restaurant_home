const content = document.querySelector('#content');

const loadContact = () => {
  const nav = document.querySelector('nav > ul');
  const navLis = nav.childNodes;
  const pageBtn = document.querySelector('#contact');
  for (let i = 0; i < navLis.length; i += 1) {
    navLis[i].classList.remove('active');
  }

  pageBtn.classList.add('active');

  const elements = document.createElement('DIV');
  elements.setAttribute('id', 'contact');
  elements.setAttribute('class', 'elements');
  content.appendChild(elements);

  const hours = document.createElement('DIV');
  hours.innerHTML = `<i class="fas fa-clock"></i>
                   <p>10:00am - 11:00pm</p>`;
  elements.appendChild(hours);

  const contact = document.createElement('P');
  contact.innerHTML = `<i class="fas fa-headset"></i>
                     <p>Call our reservation line:<br>1800-000-000</p>`;
  elements.appendChild(contact);
  content.appendChild(elements);
};

export default loadContact;