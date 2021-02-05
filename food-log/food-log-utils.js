import { updateUserCalories } from '../food-select/renderfood.js';
import { getDayStorage, setDayStorage } from '../localStorage-utils.js';
import { 
    calculateTotalCalories, calculateTotalCarbs, calculateTotalFat, calculateTotalProtein, findById 
} from '../utils.js';



export function renderTableRows(userFoodObject, foodObject){
    const tableRow = document.createElement('tr');
    
    const addButton = document.createElement('button');
    addButton.textContent = '+';
    tableRow.append(addButton);
    
    const subButton = document.createElement('button');
    subButton.textContent = '-';
    tableRow.append(subButton);
    
    const tdServings = document.createElement('td');
    tdServings.textContent = userFoodObject.quantity;
    tableRow.append(tdServings);
    
    const tdImage = document.createElement('td');
    const img = document.createElement('img');
    img.src = `../assets/${userFoodObject.img}`;
    img.classList.add('foods');
    img.onerror = ()=>img.src = '../assets/groceries.png';
    tdImage.append(img);
    tableRow.append(tdImage);
    
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
        let userFoods = getDayStorage();
        const foodToChange = findById(userFoods, userFoodObject.id);
        foodToChange.quantity++;
        setDayStorage(userFoods);
        updateUserCalories();
        userFoods = getDayStorage();
        updateTableContent(tdServings, tdCalorie, tdProtein, tdFat, tdCarb, foodToChange, foodObject);
        calcAllTotals(userFoods);  
    });
    
    
    subButton.addEventListener('click', () => {
        let userFoods = getDayStorage();
        const foodToChange = findById(userFoods, userFoodObject.id);
        
        if (foodToChange.quantity < 1) return null;
        else {
            foodToChange.quantity--;
            setDayStorage(userFoods);
            updateUserCalories();
            updateTableContent(tdServings, tdCalorie, tdProtein, tdFat, tdCarb, foodToChange, foodObject);
            calcAllTotals(userFoods); 
        }
            
    });

    delButton.addEventListener('click', () => {
        let userFoods = getDayStorage();
        const foodToChange = findById(userFoods, userFoodObject.id);
        const index = userFoods.indexOf(foodToChange);
        userFoods.splice(index, 1);
        tableRow.remove();
        calcAllTotals(userFoods); 
        setDayStorage(userFoods);
        updateUserCalories();
    });

    return tableRow;
}

const tdTotalCals = document.createElement('td');
const totalsRow = document.createElement('tr');
const tdBlank1 = document.createElement('td');
const tdBlank2 = document.createElement('td');
const tdBlank3 = document.createElement('td');
const tdBlank4 = document.createElement('td');
const tdTotalProtein = document.createElement('td');
const tdTotalFat = document.createElement('td');
const tdTotalCarbs = document.createElement('td');

export function renderTotalRows(){
    const userFoods = getDayStorage();
    tdBlank4.textContent = 'TOTALS';
    calcAllTotals(userFoods);

    totalsRow.append(tdBlank1, tdBlank2, tdBlank3, tdBlank4, tdTotalCals, tdTotalProtein, tdTotalFat, tdTotalCarbs);
    return totalsRow;
}

function calcAllTotals(arrayOfFoodsObjects){
    tdTotalCals.textContent = calculateTotalCalories(arrayOfFoodsObjects);
    tdTotalProtein.textContent = calculateTotalProtein(arrayOfFoodsObjects);
    tdTotalFat.textContent = calculateTotalFat(arrayOfFoodsObjects); 
    tdTotalCarbs.textContent = calculateTotalCarbs(arrayOfFoodsObjects); 
}
function updateTableContent(tdServings, tdCalorie, tdProtein, tdFat, tdCarb, foodToChange, foodObject){
    tdServings.textContent = foodToChange.quantity;
    tdCalorie.textContent = foodObject.calories * foodToChange.quantity;
    tdProtein.textContent = (foodObject.protein * foodToChange.quantity).toFixed(1);
    tdFat.textContent = (foodObject.fat * foodToChange.quantity).toFixed(1);
    tdCarb.textContent = (foodObject.carbs * foodToChange.quantity).toFixed(1);
}