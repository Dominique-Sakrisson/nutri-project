// import { foodData } from '../data.js';
import { getGlobalDataStorage } from '../localStorage-utils.js';

const foodData = getGlobalDataStorage();

export const vegetarianFoods = foodData.filter((item) => item.isVegetarian);
export const paleoFoods = foodData.filter((item) => item.isPaleo);
export const glutenFreeFoods = foodData.filter((item) => item.isGlutenFree); 

// very nice sorting function!
export function sortDiet(diet){
    diet.sort(function(a, b) {
        // this should also work
        return a.name < b.name ? -1 : 1;
    });
}
