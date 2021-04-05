import getHeader from './src/header.js';
import getAboutMe from './src/about.js';

window.onload = () => {
    document.body.innerHTML += getHeader();
    document.body.innerHTML += getAboutMe();
}