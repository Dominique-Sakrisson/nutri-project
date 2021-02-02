import { foodData } from '../data.js';
import { setDayStorage } from '../localStorage-utils.js';
import { findById, renderTableRows } from '../utils.js';

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
        isGlutenFree: true
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
        isGlutenFree: true
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
        isGlutenFree: true
    }
];

const table = document.getElementById('log-table');

for (let food of testData){
    const foodObject = findById(foodData, food.id);
    let fullTableRow = renderTableRows(foodObject);
    table.append(fullTableRow);
}
setDayStorage(testData);
