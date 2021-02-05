// import { foodData } from '../data.js';
import { getGlobalDataStorage } from '../localStorage-utils.js';

const foodData = getGlobalDataStorage();

export const vegetarianFoods = foodData.filter((item) => {
    return item.isVegetarian;
});
export const paleoFoods = foodData.filter((item) => {
    return item.isPaleo;
});
export const glutenFreeFoods = foodData.filter((item) => {
    return item.isGlutenFree;
}); 

export function sortDiet(diet){
    diet.sort(function(a, b) {
        if (a.name < b.name) { return -1; }
        if (a.name > b.name) { return 1; }
        return 0;
    });
}

export function testUserDiet(userDiet){
    let dietType = [];
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
    return dietType;
}