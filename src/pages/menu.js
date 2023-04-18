import { createMenuItem } from "../creation-segments";

const loadMenu = function() {
    console.log('loadMenu ran');
    const mainArea = document.querySelector('.main-area');
    mainArea.textContent = '';
    
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');
    mainArea.appendChild(menuDiv);

    menuDiv.appendChild(createMenuItem(
        'Margherita',
        'Tomatoes, Mozzarella cheese, Garlic, fresh Basil, and extra-virgin Olive oil'
    ));
    menuDiv.appendChild(createMenuItem(
        'Pepperoni',
        'Thinly sliced Pepperoni'
    ));
    menuDiv.appendChild(createMenuItem(
        'Neapolitan',
        'Tomato sauce, fresh Basil, Parmesan cheese, Olive oil, Black pepper'
    ));
    menuDiv.appendChild(createMenuItem(
        'Mixed',
        'Choose up to 4 combinations'
    ));
}

export default loadMenu;