import { foodData } from '../data.js';
import { getDayStorage, getUserStorage, setDayStorage } from '../localStorage-utils.js';
import { calculateAllMacros, findById } from '../utils.js';

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
    tdServings.textContent = userFoodObject.quantity;
    tableRow.append(tdServings);

    const tdFood = document.createElement('td');
    tdFood.textContent = foodObject.name;
    tableRow.append(tdFood);

    const tdCalorie = document.createElement('td');
    tdCalorie.textContent = foodObject.calories * userFoodObject.quantity;
    tableRow.append(tdCalorie);

    const tdProtein = document.createElement('td');
    tdProtein.textContent = (foodObject.protein * userFoodObject.quantity).toFixed(1);
    tableRow.append(tdProtein);

    const tdFat = document.createElement('td');
    tdFat.textContent = (foodObject.fat * userFoodObject.quantity).toFixed(1);
    tableRow.append(tdFat);

    const tdCarb = document.createElement('td');
    tdCarb.textContent = (foodObject.carbs * userFoodObject.quantity).toFixed(1);
    tableRow.append(tdCarb);

    const delButton = document.createElement('button');
    delButton.textContent = 'remove';
    tableRow.append(delButton);

    
    addButton.addEventListener('click', () => {
        getDayStorage();
        const userFoods = getDayStorage();
        dataTotals = calculateAllMacros(userFoods);
        const foodToChange = findById(updatedFood, userFoodObject.id);
        foodToChange.quantity++;
        setDayStorage(updatedFood);
        getDayStorage();
        tdServings.textContent = foodToChange.quantity;
        tdCalorie.textContent = foodObject.calories * foodToChange.quantity;
        tdProtein.textContent = (foodObject.protein * foodToChange.quantity).toFixed(1);
        tdFat.textContent = (foodObject.fat * foodToChange.quantity).toFixed(1);
        tdCarb.textContent = (foodObject.carbs * foodToChange.quantity).toFixed(1);
    });
    
    
    subButton.addEventListener('click', () => {
        const foodToChange = findById(updatedFood, userFoodObject.id);
        let numServings = foodToChange.quantity;
        if (numServings < 1) return null;
        else {
            getDayStorage();
            foodToChange.quantity--;
            numServings--;
            setDayStorage(updatedFood);
            getDayStorage();
            tdServings.textContent = foodToChange.quantity;
            tdCalorie.textContent = foodObject.calories * foodToChange.quantity;
            tdProtein.textContent = (foodObject.protein * foodToChange.quantity).toFixed(1);
            tdFat.textContent = (foodObject.fat * foodToChange.quantity).toFixed(1);
            tdCarb.textContent = (foodObject.carbs * foodToChange.quantity).toFixed(1);
        }
            
    });

    delButton.addEventListener('click', () => {
        const userFoods = getDayStorage();
        const foodToChange = findById(userFoods, userFoodObject.id);
        const index = userFoods.indexOf(foodToChange);
        console.log(index);
        console.log(userFoods);
        userFoods.splice(index, 1);
        setDayStorage(userFoods);
        tableRow.remove();

    });

    return tableRow;
}