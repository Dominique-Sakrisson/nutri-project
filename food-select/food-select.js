import { getGlobalDataStorage, getUserStorage, setGlobalDataStorage, setUserStorage } from '../localStorage-utils.js';
import { renderFood } from './renderfood.js';
import { glutenFreeFoods, paleoFoods, vegetarianFoods, sortDiet } from './food-select-utils.js';
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
paleoButton.classList.add('out');
paleoButton.classList.add('slide-in');

const searchDiv = document.querySelector('.search-div');
const searchForm = document.createElement('form');
const searchLabelInstr = document.createElement('div');
searchLabelInstr.textContent = 'Enter the first letter to filter search, clear search to search another letter';
const searchLabel = document.createElement('label');
const searchInput = document.createElement('input');
searchInput.placeholder = 'Search for a Food';
searchInput.pattern = '[a-zA-Z.]{1,5}';
const clearSearchButton = document.createElement('button');
clearSearchButton.textContent = 'clear search';
clearSearchButton.classList.add('clear-search');
searchForm.append(searchLabelInstr, searchLabel, searchInput, clearSearchButton);
searchForm.classList.add('search');
searchDiv.append(searchForm);

let dietType = [];
recallFoodList();

const modalText = document.getElementById('modal-text');

for (let item of instructions) {
    if (item.name === 'foodPageMain') {
        modalText.textContent = item.description;
    }
}

let keyDownString = '';
searchInput.addEventListener('keydown', (e) => {
    let logs = e.key;
    let slicedString = '';

    if (logs !== 'Backspace') {
        keyDownString += logs;
    } else {
        slicedString = keyDownString.slice(0, -1);
        keyDownString = slicedString;
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

    if (keyDownString.length === 0) {
        recallFoodList();
    }

});

clearSearchButton.addEventListener('click', () => {
    keyDownString = '';
    searchInput.value = '';
    recallFoodList();
});


function recallFoodList() {
    
    ul.textContent = '';

    if (userDiet === 'paleo') {
        dietType = paleoFoods;
        sortDiet(paleoFoods);
    } else if (userDiet === 'vegetarian') {
        dietType = vegetarianFoods;
        sortDiet(vegetarianFoods);
    } else if (userDiet === 'gluten-free') {
        dietType = glutenFreeFoods;
        sortDiet(glutenFreeFoods);
    } else if (userDiet === 'no-diet') {
        dietType = foodData;
        sortDiet(foodData);
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
        sortDiet(paleoFoods);
    } else if (e.target.value === 'vegetarian') {
        dietType = vegetarianFoods;
        sortDiet(vegetarianFoods);
    } else if (e.target.value === 'gluten-free') {
        dietType = glutenFreeFoods;
        sortDiet(glutenFreeFoods);
    } else if (e.target.value === 'show-all') {
        dietType = foodData;
        sortDiet(foodData);
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
    const name = data.get('name');
    const serving = data.get('serving');
    const calories = data.get('calories');
    const protein = data.get('protein');
    const carbs = data.get('carbs');
    const fat = data.get('fat');

    const newFood = {
        id: Math.floor((Math.random() * 899) + 100),
        name: name,
        img: 'groceries.png',
        serving: serving,
        calories: Number(calories),
        protein: Number(protein),
        carbs: Number(carbs),
        fat: Number(fat),

    };
    foodData.push(newFood);
    setGlobalDataStorage(foodData);
});

toFoodLogButton.addEventListener('click', () => {
    window.location = '../food-log/';
});

//modal
// Get the modal
const modal = document.getElementById('myModal');
// Get the <span> element that closes the modal
const modalSpan = document.getElementsByClassName('close')[0];
// When the user clicks on the button, open the modal
window.addEventListener('load', () => {
    if (user.foodsVisited) {
        return;
    } else {
        modal.style.display = 'block';
    }
    user.foodsVisited = true;
    setUserStorage(user);
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (e)=>{
    if (e.target === modal){
        modal.style.display = 'none';
    }
});

const sidebar = document.querySelector('.sidebar');
const sidebutton = document.querySelector('.toggle-btn');
sidebutton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});
