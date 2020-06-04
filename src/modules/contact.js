const loadContact = () => {
  const elements = document.createElement('DIV');
  content.appendChild(elements);

  const hours = document.createElement('DIV');
  hours.innerHTML = `<i class="fas fa-clock"></i>
                   <p>10:00am - 11:00pm</p>`;
  elements.appendChild(hours);

  const contact = document.createElement('P');
  contact.innerHTML = `<i class="fas fa-headset"></i>
                     <p>Call us and make a reservation at:<br>1800-000-000</p>`;
  elements.appendChild(contact);
  content.appendChild(elements);
}

export { loadContact }