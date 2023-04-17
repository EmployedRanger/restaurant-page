

function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = description;

    const foodDescription = document.createElement('p')
    foodDescription.textContent = description;

    const foodImg = document.createElement('img');
    foodImg.src = `images/${name.toLowerCase()}.png`;
    foodImg.alt = `${name}`;

    menuItem.appendChild(foodImg);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export default createMenuItem;