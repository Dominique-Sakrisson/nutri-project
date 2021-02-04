import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { renderTableRows, renderTotalRows } from './food-log-utils.js';
import { instructions } from '../data.js';
import { displayUserInfo } from '../display-user-info.js';
import { getUserStorage } from '../localStorage-utils.js';
const userData = getUserStorage();

const table = document.getElementById('log-table');
const resultsButton = document.getElementById('results-button');
const clearButton = document.getElementById('clear-button');

const userFoods = getDayStorage();
setDayStorage(userFoods);

const topSection = document.querySelector('.top-section');
const span = document.createElement('span');
for (let item of instructions){
    if (item.name === 'food-log'){
        span.textContent = item.description;
    }
}
topSection.classList.add('instructions');
topSection.append(span);

for (let food of userFoods){
    const foodObject = findById(userFoods, food.id);
    let fullTableRow = renderTableRows(food, foodObject);
    table.append(fullTableRow);
}


const totalsRow = renderTotalRows();
table.append(totalsRow);


resultsButton.addEventListener('click', () =>{
    const updatedFood = getDayStorage();
    setDayStorage(updatedFood);
    window.location = '../results';
});

clearButton.addEventListener('click', () => {
    setDayStorage([]);
    table.textContent = '';
    window.location = '../food-select';
});

// displayUserInfo(userData);
