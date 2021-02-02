import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';

export let dataTotals = [];

export function renderTableRows(userFoodObject, foodObject){
    const tableRow = document.createElement('tr');
    const updatedFood = getDayStorage();

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    tableRow.append(addButton);

    const subButton = document.createElement('button');
    subButton.textContent = '-';
    tableRow.append(subButton);
    
    const tdServings = document.createElement('td');
    tdServings.textContent = userFoodObject.consumed;
    tableRow.append(tdServings);

    const tdFood = document.createElement('td');
    tdFood.textContent = foodObject.name;
    tableRow.append(tdFood);

    const tdCalorie = document.createElement('td');
    tdCalorie.textContent = foodObject.calories * userFoodObject.consumed;
    tableRow.append(tdCalorie);

    const tdProtein = document.createElement('td');
    tdProtein.textContent = (foodObject.protein * userFoodObject.consumed).toFixed(1);
    tableRow.append(tdProtein);

    const tdFat = document.createElement('td');
    tdFat.textContent = (foodObject.fat * userFoodObject.consumed).toFixed(1);
    tableRow.append(tdFat);

    const tdCarb = document.createElement('td');
    tdCarb.textContent = (foodObject.carbs * userFoodObject.consumed).toFixed(1);
    tableRow.append(tdCarb);

    const delButton = document.createElement('button');
    delButton.textContent = 'remove';
    tableRow.append(delButton);

    
    addButton.addEventListener('click', () => {
        getDayStorage();
        const foodToChange = findById(updatedFood, userFoodObject.id);
        foodToChange.consumed++;
        setDayStorage(updatedFood);
        getDayStorage();
        tdServings.textContent = foodToChange.consumed;
        tdCalorie.textContent = foodObject.calories * foodToChange.consumed;
        tdProtein.textContent = (foodObject.protein * foodToChange.consumed).toFixed(1);
        tdFat.textContent = (foodObject.fat * foodToChange.consumed).toFixed(1);
        tdCarb.textContent = (foodObject.carbs * foodToChange.consumed).toFixed(1);
    });
    
    
    subButton.addEventListener('click', () => {
        const foodToChange = findById(updatedFood, userFoodObject.id);
        let numServings = foodToChange.consumed;
        if (numServings < 1) return null;
        else {
            getDayStorage();
            foodToChange.consumed--;
            numServings--;
            setDayStorage(updatedFood);
            getDayStorage();
            tdServings.textContent = foodToChange.consumed;
            tdCalorie.textContent = foodObject.calories * foodToChange.consumed;
            tdProtein.textContent = (foodObject.protein * foodToChange.consumed).toFixed(1);
            tdFat.textContent = (foodObject.fat * foodToChange.consumed).toFixed(1);
            tdCarb.textContent = (foodObject.carbs * foodToChange.consumed).toFixed(1);
        }
            
    });

    delButton.addEventListener('click', () => {
        tableRow.remove();

    });

    return tableRow;
}