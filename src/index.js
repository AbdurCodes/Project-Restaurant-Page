import {loadHomePage} from './homePage.js';
import {loadMenuPage} from './menuPage.js';
import {loadContactPage} from './contactPage.js';
import './style.css';

const btns = document.getElementsByTagName('button');

btns[0].addEventListener('click', ()=>{
    content.innerHTML = '';
    loadHomePage();
});
btns[1].addEventListener('click', ()=>{
    content.innerHTML = '';
    loadMenuPage();
});
btns[2].addEventListener('click', ()=>{
    content.innerHTML = '';
    loadContactPage();
});

loadHomePage();







