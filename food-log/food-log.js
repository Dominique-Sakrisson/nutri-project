// import { foodData } from '../data.js';
import { getDayStorage, setDayStorage, setUserStorage } from '../localStorage-utils.js';
import { calculateAllMacros, findById } from '../utils.js';
import { renderTableRows, dataTotals } from './food-log-utils.js';


const resultsButton = document.getElementById('results-button');
const clearButton = document.getElementById('clear-button');

const userFoods = getDayStorage();
setDayStorage(userFoods);

const table = document.getElementById('log-table');

for (let food of userFoods){
    const foodObject = findById(userFoods, food.id);
    let fullTableRow = renderTableRows(food, foodObject);
    table.append(fullTableRow);
}

 //const dataTotals = calculateAllMacros(userFoods);
const totalsRow = document.createElement('tr');
const tdBlank1 = document.createElement('td');
const tdBlank2 = document.createElement('td');
const tdBlank3 = document.createElement('td');
const tdTotalCals = document.createElement('td');
const tdTotalProtein = document.createElement('td');
const tdTotalFat = document.createElement('td');
const tdTotalCarbs = document.createElement('td');
tdTotalCals.textContent = dataTotals[0];
tdTotalProtein.textContent = dataTotals[3];
tdTotalFat.textContent = dataTotals[2];
tdTotalCarbs.textContent = dataTotals[1];

totalsRow.append(tdBlank1, tdBlank2, tdBlank3, tdTotalCals, tdTotalProtein, tdTotalFat, tdTotalCarbs);
// tdTotalCals.colspan = '3';

table.append(totalsRow);
//setDayStorage(testData);

resultsButton.addEventListener('click', () =>{
    const updatedFood = getDayStorage();
    setDayStorage(updatedFood);
    window.location = '../results';
});

clearButton.addEventListener('click', () => {

    setDayStorage([]);
    table.textContent = '';
});
