import data from './content/welcome.txt'

export default function loadWelcome(){
const main = document.querySelector('main')
main.innerHTML = '<h1>Welcome</h1>'
let parsedContent = data.split('\n\n')
parsedContent.forEach((para) => main.innerHTML += `<p>${para}</p>`)
}