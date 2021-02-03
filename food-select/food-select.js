import { getGlobalDataStorage, getUserStorage, setGlobalDataStorage } from '../localStorage-utils.js';
import { renderFood } from './renderfood.js';
import { glutenFreeFoods, paleoFoods, vegetarianFoods } from './filter-functions.js';
import { instructions } from '../data.js';

let foodData = getGlobalDataStorage();

const ul = document.querySelector('.food-list');
const user = getUserStorage();
const userDiet = user.dietChoice;
const paleoButton = document.getElementById('paleo-button');
const vegetarianButton = document.getElementById('vegetarian-button');
const glutenFreeButton = document.getElementById('gluten-free-button');
const showAllButon = document.getElementById('show-all');
const toFoodLogButton = document.getElementById('to-food-log');

const searchDiv = document.querySelector('.search-div');
const searchForm = document.createElement('form');
const searchLabelInstr = document.createElement('label');
searchLabelInstr.textContent = 'Enter the first letter to filter search, clear search to search another letter';
const searchLabel = document.createElement('label');
searchLabel.textContent = 'Search for a food';
const searchInput = document.createElement('input');
const clearSearchButton = document.createElement('button');
clearSearchButton.textContent = 'clear search';
searchInput.pattern = '[a-zA-Z.]{1,5}';
searchForm.append(searchLabel, searchInput);
searchDiv.append(searchLabelInstr, searchForm, clearSearchButton);
console.log(user);

recallFoodList();
let dietType = [];

const topSection = document.querySelector('.top-section');
const span = document.createElement('span');
for (let item of instructions) {
    if (item.name === 'foodPageMain') {
        span.textContent = item.description;
    }
}
topSection.append(span);
topSection.classList.add('instructions');

let keyDownString = '';
searchInput.addEventListener('keydown', (e) => {
    let logs = e.key;
    
    keyDownString += logs;
    if (logs === 'Backspace' && logs) {
        keyDownString = '';
        recallFoodList();
    }

    ul.textContent = '';
    for (let iterator of dietType) {
        let itName = iterator.name.toString();
        let subIterator = itName.substr(0, 1);
        if (subIterator === keyDownString.substring(0, 1)) {
            const foodItem = renderFood(iterator);
            ul.append(foodItem);
        }
    }
   
    if (userDiet === 'paleo') {
        dietType = paleoFoods;
    } else if (userDiet === 'vegetarian') {
        dietType = vegetarianFoods;
    } else if (userDiet === 'gluten-free') {
        dietType = glutenFreeFoods;
    }
});

clearSearchButton.addEventListener('click', () => {
    keyDownString = '';
    searchInput.value = '';
    recallFoodList();
});


function recallFoodList() {
    let dietType = [];


    ul.textContent = '';

    if (userDiet === 'paleo') {
        dietType = paleoFoods;
        paleoFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (userDiet === 'vegetarian') {
        dietType = vegetarianFoods;
        dietType = vegetarianFoods;
        vegetarianFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (userDiet === 'gluten-free') {
        dietType = glutenFreeFoods;
        glutenFreeFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (userDiet === 'no-diet') {
        dietType = foodData;
        foodData.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    }

    for (let iterator of dietType) {
        const foodItem = renderFood(iterator);
        ul.append(foodItem);
    }
}

function eventHandler(e) {
    ul.textContent = '';
    if (e.target.value === 'paleo') {
        dietType = paleoFoods;
        paleoFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (e.target.value === 'vegetarian') {
        dietType = vegetarianFoods;
        vegetarianFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (e.target.value === 'gluten-free') {
        dietType = glutenFreeFoods;
        glutenFreeFoods.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    } else if (e.target.value === 'show-all') {
        dietType = foodData;
        foodData.sort(function(a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
    }
    for (let iterator of dietType) {
        const foodItem = renderFood(iterator);
        ul.append(foodItem);
    }
}

paleoButton.addEventListener('click', eventHandler);
vegetarianButton.addEventListener('click', eventHandler);
glutenFreeButton.addEventListener('click', eventHandler);
showAllButon.addEventListener('click', eventHandler);

const formElement = document.getElementById('add-custom-form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault(e);
    const data = new FormData(formElement);
    const id = data.get('id');
    const name = data.get('name');
    const img = data.get('img');
    const serving = data.get('serving');
    const calories = data.get('calories');
    const protein = data.get('protein');
    const carbs = data.get('carbs');
    const fat = data.get('fat');
    const category = data.get('category');

    const newFood = {
        id: Number(id),
        name: name,
        img: img,
        serving: serving,
        calories: Number(calories),
        protein: Number(protein),
        carbs: Number(carbs),
        fat: Number(fat),
        category: category,
    };
    foodData.push(newFood);
    setGlobalDataStorage(foodData);
});

toFoodLogButton.addEventListener('click', () => {
    window.location = '../food-log/';
});
