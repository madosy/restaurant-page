import './menu.css'

const menu = document.createElement('main');
menu.innerHTML = '<h1>Menu</h1>'
menu.innerHTML += '<p>menu text</p>';
//main

//should load json with image tags and info and stuff.

const main = document.body.querySelector('main')
main.replaceWith(menu)