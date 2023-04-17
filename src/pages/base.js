import loadHome from "./home";
import loadMenu from "./menu";
import loadAbout from "./about";

function createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');

    const restName = document.createElement('h1');
    restName.classList.add('rest-name');
    restName.textContent = "Ranger Station";

    header.appendChild(restName);
    header.appendChild(createNavigation());

    return header;
}

function createNavigation() {
    const nav = document.createElement('div');
    nav.classList.add('nav');

    const homeButton = document.createElement('button');
    homeButton.classList.add('nav-button');
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        activePage(homeButton);
        loadHome();
    });

    const menuButton = document.createElement('button');
    menuButton.classList.add('nav-button');
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        activePage(menuButton);
        loadMenu();
    });

    const aboutButton = document.createElement('button');
    aboutButton.classList.add('nav-button');
    aboutButton.textContent = 'About';
    aboutButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('active')) return;
        activePage(aboutButton);
        loadAbout();
    });

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function activePage(button) {
    console.log('activePage ran')
    const buttons = document.querySelectorAll('.nav-button');

    buttons.forEach((button) => {
        if(button !== this) {
            button.classList.remove('active');
        }
    });

    button.classList.add('active');
}

function createContentArea() {
    const mainArea = document.createElement('div');
    // mainArea.id('main')
    mainArea.classList.add('main');
    return mainArea;
}

function createFooter() {
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    const copyrightThing = document.createElement('p')
    copyrightThing.textContent = `Copyright © ${new Date().getFullYear()} Employed Ranger`;

    footer.appendChild(copyrightThing);    
    return footer;
}

function startWebsite () {
    const content = document.querySelector('#content');
    content.appendChild(createHeader());
    content.appendChild(createContentArea());
    content.appendChild(createFooter());
    console.log('web after appends')

    activePage(document.querySelector('.nav-button'));
    loadHome();
}

export default startWebsite;