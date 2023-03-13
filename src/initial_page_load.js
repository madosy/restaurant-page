import loadMenu from "./menu"
import loadWelcome from "./welcome"
import loadHours from "./hours"
import loadAbout from "./loadAbout"

const contentDiv = document.createElement('div')
contentDiv.id = 'content'
document.body.appendChild(contentDiv)
const content = document.body.querySelector('#content')

//navbar
const navbar = document.createElement('nav')
navbar.innerHTML = 
`<div class="logo"><a class="welcome">Crème de la Crème</a></div>
<ul>
    <li><a class="menu">Menu</a></li>
    <li><a class="hours">Hours</a></li>
    <li><a class="about">About Us</a></li>
</ul>`
content.appendChild(navbar);
const navlink_welcome = content.querySelector('.welcome')
const navlink_menu = content.querySelector('a.menu');
const navlink_hours = content.querySelector('a.hours');
const navlink_about = content.querySelector('a.about')

navlink_welcome.addEventListener('click', loadWelcome)
navlink_menu.addEventListener('click', loadMenu)
navlink_hours.addEventListener('click', loadHours)
navlink_about.addEventListener('click', loadAbout)


//main
const main = document.createElement('main')
content.appendChild(main)

//footer
const footer = document.createElement('footer')
footer.innerHTML = "Background from https://unsplash.com/photos/hV1gChgMa-k"
content.appendChild(footer)

