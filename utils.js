import { getDayStorage } from './localStorage-utils.js';

// const dayFoodData = getDayStorage();
export function findById2(array, id){
    // console.log(array, id);
    let item = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i].id === id){
            item = array[i];
            
        }
        return item;
    }

}
export function findById(array, id){
    for (let item of array)
        if (item.id === id)
            return item;
}

export function calculateTotalCalories(dayFoodData){
    let totalCalories = 0;
    for (let item of dayFoodData) {
        totalCalories += item.calories * item.consumed; //update with right key name later
    }
    return totalCalories.toFixed(1);
}

export function calculateTotalFat(dayFoodData){
    let totalFat = 0;
    for (let item of dayFoodData) {
        totalFat += item.fat * item.consumed; //update with right key name later
    }
    return totalFat.toFixed(1);
}

export function calculateTotalCarbs(dayFoodData){
    let totalCarbs = 0;
    for (let item of dayFoodData) {
        totalCarbs += item.carbs * item.consumed; //update with right key name later
    }
    return totalCarbs.toFixed(1);
}

export function calculateTotalProtein(dayFoodData){
    let totalProtein = 0;
    for (let item of dayFoodData) {
        totalProtein += item.protein * item.consumed; //update with right key name later
    }
    return totalProtein.toFixed(1);
}

export function calculateAllMacros(dayFoodData){
    let dataToReturn = [];
    dataToReturn.push(calculateTotalCalories(dayFoodData));
    dataToReturn.push(calculateTotalCarbs(dayFoodData));
    dataToReturn.push(calculateTotalFat(dayFoodData));
    dataToReturn.push(calculateTotalProtein(dayFoodData));
    
    return dataToReturn;
}
