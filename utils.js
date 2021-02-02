import { getDayStorage, USER } from './localStorage-utils.js';

const dayFoodData = getDayStorage();

export function findById(array, id){
    for (let item of array){
        if (item.id === id) return item;
    }
    return null;
}
export function renderTableRows(userFoodItem, globalFoodItem){
    const tableRow = document.createElement('tr');
    

}


































const userList = [
    {
        calories: 15
    }, {
        calories: 1
    }, {
        calories: 4
    }  
];


export function calculateTotalCalories(dayFoodData){
    let totalCalories = 0;
    for (let item of dayFoodData) {
        totalCalories += item.calories;
    }
    return totalCalories;
}

export function calculateTotalFat(dayFoodData){
    let totalFat = 0;
    for (let item of dayFoodData) {
        totalFat += item.fat;
    }
    return totalFat;
}

export function calculateTotalCarbs(dayFoodData){
    let totalCarbs = 0;
    for (let item of dayFoodData) {
        totalCarbs += item.carbs;
    }
    return totalCarbs;
}

export function calculateTotalProtein(dayFoodData){
    let totalProtein = 0;
    for (let item of dayFoodData) {
        totalProtein += item.protein;
    }
    return totalProtein;
}

export function calculateAllMacros(dayFoodData){
    let dataToReturn = [];
    dataToReturn.push(calculateTotalCalories(dayFoodData));
    dataToReturn.push(calculateTotalCarbs(dayFoodData));
    dataToReturn.push(calculateTotalFat(dayFoodData));
    dataToReturn.push(calculateTotalProtein(dayFoodData));
    
    return dataToReturn;
}
