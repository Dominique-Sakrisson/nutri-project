import { getDayStorage, getWeekStorage, setDayStorage, setUserStorage, setWeekStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { renderTableRows, renderTotalRows } from './food-log-utils.js';
import { instructions } from '../data.js';
import { getUserStorage } from '../localStorage-utils.js';
import { displayUserInfo } from '../food-select/renderfood.js';
const userData = getUserStorage();
const weekFoods = getWeekStorage();

const table = document.getElementById('log-table');
const resultsButton = document.getElementById('results-button');
const clearButton = document.getElementById('clear-button');

const userFoods = getDayStorage();
setDayStorage(userFoods);

const modalText = document.getElementById('modal-text');

for (let item of instructions) {
    if (item.name === 'food-log') {
        modalText.textContent = item.description;
    }
}

for (let food of userFoods) {
    const foodObject = findById(userFoods, food.id);
    let fullTableRow = renderTableRows(food, foodObject);
    table.append(fullTableRow);
}


const totalsRow = renderTotalRows();
table.append(totalsRow);


resultsButton.addEventListener('click', () => {
    const updatedFood = getDayStorage();
    setDayStorage(updatedFood);
    weekFoods.unshift(updatedFood);
    setWeekStorage(weekFoods);
    window.location = '../results';
});

clearButton.addEventListener('click', () => {
    setDayStorage([]);
    table.textContent = '';
    window.location = '../food-select';
});

displayUserInfo(userData);

//modal
// Get the modal
const modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
const modalSpan = document.getElementsByClassName('close')[0];
// When the user clicks on the button, open the modal
window.addEventListener('load', () => {
    if (userData.logVisited) {
        return;
    } else {
        modal.style.display = 'block';

    }
    userData.logVisited = true;
    setUserStorage(userData);
});


// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};
