

const content = document.body.querySelector('#content')

//navbar
const navbar = document.createElement('nav')
navbar.innerHTML = 
`<div class="logo"><a href="#home">Crème de la Crème</a></div>
<ul>
    <li><a href="#menu">Menu</a></li>
    <li><a href="#hours">Hours</a></li>
    <li><a href="#about">About Us</a></li>
</ul>`
content.appendChild(navbar);

//main
const main = document.createElement('main')
content.appendChild(main)

//footer
const footer = document.createElement('footer')
footer.innerHTML = "Background from https://unsplash.com/photos/hV1gChgMa-k"
content.appendChild(footer)