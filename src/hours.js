import "./styles/hours.css"
import hours_data from "./content/hours.json"

export default function loadHours(){
const main = document.querySelector('main')
main.innerHTML = '<h1>Hours</h1>'

const hoursTable = document.createElement('table')
hoursTable.classList.add('hours-table')

const tr = document.createElement('tr')
const th_day = document.createElement('th')
const th_hours = document.createElement('th')
th_day.textContent = "Day"
th_hours.textContent = "Hours"

tr.appendChild(th_day);
tr.appendChild(th_hours);
hoursTable.appendChild(tr);


hours_data.forEach((entry) => {
    const tr = document.createElement('tr')
    const td_day = document.createElement('td')
    const td_hours = document.createElement('td')

    td_day.textContent = entry.day;
    td_hours.textContent = entry.hours;
    tr.appendChild(td_day);
    tr.appendChild(td_hours);
    hoursTable.appendChild(tr);
})

main.appendChild(hoursTable)

}