import { foodData } from '../data.js';
import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';
import { renderTableRows } from './food-log-utils.js';
const resultsButton = document.getElementById('results-button');
const endDayButton = document.getElementById('end-day-button');

// const dayFoodData = getDayStorage();
const testData = [
    {
        id: 1,
        name: 'apple',
        img: 'apple.png',
        serving: '1 fruit',
        calories: 95,
        protein: .5,
        carbs: 25,
        fat: .3,
        category: 'fruit',
        isVegetarian: true,
        isPaleo: true,
        isGlutenFree: true,
        consumed: 2,
    },
    {
        id: 2,
        name: 'banana',
        img: 'banana.png',
        serving: '1 fruit',
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: .4,
        category: 'fruit',
        isVegetarian: true,
        isPaleo: true,
        isGlutenFree: true,
        consumed: 1,
    },
    {
        id: 3,
        name: 'salmon',
        img: 'salmon.png',
        serving: '1oz',
        calories: 52,
        protein: 7.2,
        carbs: 0,
        fat: 2.3,
        category: 'fish',
        isVegetarian: false,
        isPaleo: true,
        isGlutenFree: true,
        consumed: 3,
    }
];

setDayStorage(testData);
const userFoods = getDayStorage();

const table = document.getElementById('log-table');

for (let food of userFoods){
    const foodObject = findById(userFoods, food.id);
    let fullTableRow = renderTableRows(food, foodObject);
    table.append(fullTableRow);
}
setDayStorage(testData);

resultsButton.addEventListener('click', () =>{
    alert('clicked results');
});
endDayButton.addEventListener('click', () =>{
    alert('clicked end day');
});