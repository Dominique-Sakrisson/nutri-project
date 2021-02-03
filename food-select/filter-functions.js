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
