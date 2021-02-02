import { displayUserInfo } from '../display-user-info.js';
import { getUserStorage } from '../localStorage-utils.js';
import { foodData } from '../data.js';
import { renderFood } from './renderfood.js';
import { glutenFreeFoods, paleoFoods, vegetarianFoods } from './filter-functions.js';

const ul = document.querySelector('ul');
const user = getUserStorage();
const paleoButton = document.getElementById('paleo-button');
const vegetarianButton = document.getElementById('vegetarian-button');
const glutenFreeButton = document.getElementById('gluten-free-button');

displayUserInfo(user); //this is the user stats display

function eventHandler(e) {
    let dietType = '';
    if (e.target.value === 'paleo') {
        dietType = paleoFoods;
    } else if (e.target.value === 'vegetarian') {
        dietType = vegetarianFoods;
    } else if (e.target.value === 'gluten-free') {
        dietType = glutenFreeFoods;
    }
    return dietType;
}
paleoButton.addEventListener('click', eventHandler);
vegetarianButton.addEventListener('click', eventHandler);
glutenFreeButton.addEventListener('click', eventHandler);




for (let iterator of foodData) {
    const foodItem = renderFood(iterator);
    ul.append(foodItem);
}

