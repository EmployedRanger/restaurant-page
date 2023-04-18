import { createParagraph } from "../creation-segments";

const loadAbout = function() {
    console.log('loadAbout ran');
    const mainArea = document.querySelector('.main-area');
    mainArea.textContent = '';
    
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');
    mainArea.appendChild(aboutDiv);

    const locationPic = document.createElement('img');
    const locationContainer = document.createElement('div');
    locationContainer.classList.add('location');
    locationPic.src = 'images/location.png';
    locationPic.alt = 'Location of island';
    locationContainer.appendChild(locationPic);

    aboutDiv.appendChild(createParagraph('Join us over at Bouvet Island!'));
    aboutDiv.appendChild(locationContainer);
    // aboutDiv.appendChild(createParagraph('Good luck making it over to us'));
    aboutDiv.appendChild(createParagraph('Sorry, we don\'t take reservations'));
}

export default loadAbout;