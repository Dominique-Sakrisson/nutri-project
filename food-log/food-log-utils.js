import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { findById } from '../utils.js';

export function renderTableRows(userFoodObject, foodObject){
    const tableRow = document.createElement('tr');
    const updatedFood = getDayStorage();

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    tableRow.append(addButton);
    
    const tdServings = document.createElement('td');
    tdServings.textContent = userFoodObject.consumed;
    tableRow.append(tdServings);

    const tdFood = document.createElement('td');
    tdFood.textContent = foodObject.name;
    tableRow.append(tdFood);

    const tdCalorie = document.createElement('td');
    tdCalorie.textContent = foodObject.calories;
    tableRow.append(tdCalorie);

    const tdProtein = document.createElement('td');
    tdProtein.textContent = foodObject.protein;
    tableRow.append(tdProtein);

    const tdFat = document.createElement('td');
    tdFat.textContent = foodObject.fat;
    tableRow.append(tdFat);

    const tdCarb = document.createElement('td');
    tdCarb.textContent = foodObject.carbs;
    tableRow.append(tdCarb);

        // let numServings = 0;

    addButton.addEventListener('click', () => {
        getDayStorage();
        const foodToChange = findById(updatedFood, userFoodObject.id);
        console.log(foodToChange);
        foodToChange.consumed++;
        setDayStorage(updatedFood);
        getDayStorage();
        tdServings.textContent = userFoodObject.consumed;
            
    });
      
        // const subButton = document.createElement('button');
        // subButton.textContent = '-';
        // tableRow.append(subButton);
        // subButton.addEventListener('click', () => {
        //     if (numServings < 1) return null;
        //     else {
        //         getDayStorage();
        //         const foodToChange = findById(updatedFood, userFoodObject.id);
        //         console.log(foodToChange);
        //         foodToChange.consumed--;
        //         setDayStorage(updatedFood);
        //         getDayStorage();
        //         window.location.reload();
        //     }
            
        // });

    return tableRow;
}