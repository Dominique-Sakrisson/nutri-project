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
