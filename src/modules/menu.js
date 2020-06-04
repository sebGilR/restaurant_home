const loadMenu = () => {
  const elements = document.createElement('DIV');
  elements.setAttribute('id', 'menu');
  let ul = document.createElement('UL');

  const beer = ul.cloneNode(false);
  const beerTitle = document.createElement('H3');
  beerTitle.innerText = "Beers";
  beer.appendChild(beerTitle);

  const coffee = ul.cloneNode(false);
  const coffeeTitle = document.createElement('H3');
  coffeeTitle.innerText = "Coffees";
  coffee.appendChild(coffeeTitle);

  const snacks = ul.cloneNode(false);
  const snacksTitle = document.createElement('H3');
  snacksTitle.innerText = "Snacks";
  snacks.appendChild(snacksTitle);

  const menuLists = [snacks, beer, coffee];

  const beerItems = ['Guinness', 'Corona', 'Heineken', 'Budweiser', 'Busch'];
  const coffeeItems = ['Americano', 'Latte', 'Mocha', 'Cappuccino', 'Cold Brew Coffee'];
  const snackItems = ['Waffle Fries', 'Chicken Nuggets', 'Cheese Burger', 'Tacos'];

  beerItems.map(item => {
    let li = document.createElement('LI');
    li.innerText = item;
    beer.appendChild(li);
  });
  coffeeItems.map(item => {
    let li = document.createElement('LI');
    li.innerText = item;
    coffee.appendChild(li);
  });
  snackItems.map(item => {
    let li = document.createElement('LI');
    li.innerText = item;
    snacks.appendChild(li);
  });

  menuLists.map(list => {
    elements.appendChild(list)
  });

  content.appendChild(elements)
}

export { loadMenu }