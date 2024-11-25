import {loadHomePage} from './homePage.js';
import {loadMenuPage} from './menuPage.js';
import {loadContactPage} from './contactPage.js';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
else {
    console.log('Now we are in production mode.');
}

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


// Deploying with Subtree
// git subtree push --prefix dist origin gh-pages