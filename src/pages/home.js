import { createParagraph } from "../creation-segments";

const loadHome = function () {
    console.log('loadHome ran');
    const mainArea = document.querySelector('.main-area');

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    mainArea.appendChild(homeDiv);

    const chefPic = document.createElement('img');
    const chefContainer = document.createElement('p');
    chefContainer.classList.add('chef-pic');
    chefPic.src = 'images/Hotpot.png';
    chefPic.alt = 'Picture of chef';
    chefContainer.appendChild(chefPic);

    homeDiv.appendChild(createParagraph("Free food if you can find us!"));
    homeDiv.appendChild(createParagraph('Made with passion since 1218'));
    homeDiv.appendChild(chefContainer);
    homeDiv.appendChild(createParagraph('Don\'t worry about it'));


}

export default loadHome;