export function createMenuItem(name, description) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const foodName = document.createElement('h2');
    foodName.textContent = name;

    const foodDescription = document.createElement('p');
    foodDescription.classList.add('food-des');
    foodDescription.textContent = description;

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const foodImg = document.createElement('img');
    foodImg.src = `images/${name.toLowerCase()}.jpg`;
    foodImg.alt = `${name}`;
    imgContainer.appendChild(foodImg);

    menuItem.appendChild(foodName);
    menuItem.appendChild(imgContainer);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

export function createParagraph(text) {
    const paragraph = document.createElement('p');
    paragraph.classList.add('paragraph');
    paragraph.textContent = text;
    return paragraph;
}
