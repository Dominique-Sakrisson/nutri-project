import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { renderTableRows, renderTotalRows } from './food-log-utils.js';

const table = document.getElementById('log-table');
const resultsButton = document.getElementById('results-button');
const clearButton = document.getElementById('clear-button');

const userFoods = getDayStorage();
setDayStorage(userFoods);

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
