import { getDayStorage, getWeekStorage, setDayStorage, setUserStorage, setWeekStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { renderTableRows, renderTotalRows } from './food-log-utils.js';
import { instructions } from '../data.js';
import { getUserStorage } from '../localStorage-utils.js';
import { displayUserInfo } from '../food-select/food-utils.js';
const userData = getUserStorage();
const weekFoods = getWeekStorage();

const table = document.getElementById('log-table');
const resultsButton = document.getElementById('results-button');
const clearButton = document.getElementById('clear-button');

const userFoods = getDayStorage();
setDayStorage(userFoods);

const modalText = document.getElementById('modal-text');

// since you do this process on every page, it might make sense to abstract it out into a utility function
const foodLog = instructions.find(it => it.name === 'food-log');

modalText.textContent = foodLog.description;


for (let food of userFoods) {
    const foodObject = findById(userFoods, food.id);
    let fullTableRow = renderTableRows(food, foodObject);
    table.append(fullTableRow);
}

const totalsRow = renderTotalRows();
table.append(totalsRow);


resultsButton.addEventListener('click', () => {
    const updatedFood = getDayStorage();
    // setDayStorage(updatedFood);
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
    if (!userData.logVisited) {
        modal.style.display = 'block';
        userData.logVisited = true;
        setUserStorage(userData);
    }
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
// seems like you use this code a few times thorough the app--could it be a function?
window.addEventListener('click', (e)=>{
    if (e.target === modal){
        modal.style.display = 'none';
    }
});
