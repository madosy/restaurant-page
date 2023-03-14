import './styles/menu.css'
import menu_data from './content/menu-list.json'

export default function loadMenu() {
    const main = document.querySelector('main')
    main.innerHTML = '<h1>Menu</h1>'

    menu_data.forEach((item) => {
        const itemDiv = document.createElement('div')
        itemDiv.classList.add('menu-item')

        const itemImg = document.createElement('img')
        itemImg.src = item.image

        const itemHeader = document.createElement('h2')
        itemHeader.textContent = item.name;

        const itemDetail = document.createElement('p')
        itemDetail.textContent = item.detail;

        itemDiv.appendChild(itemImg);
        itemDiv.appendChild(itemHeader);
        itemDiv.appendChild(itemDetail);
    
        main.appendChild(itemDiv);
    })
}