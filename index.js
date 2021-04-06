import getHeader from './src/header.js';
import getAboutMe from './src/about.js';
import getTalksSection from './src/talks.js';

window.onload = () => {
    document.body.innerHTML += getHeader();
    document.body.innerHTML += getAboutMe();
    document.body.innerHTML += getTalksSection();
}