import { findById } from './utils.js';

export const USER = 'USER';
export const DAYUSERFOODS = 'DAYUSERFOODS';
export const WEEKUSERFOODS = 'WEEKUSERFOODS';
export const GLOBALDATA = 'GLOBALDATA';

export function setGlobalDataStorage(array){
    const stringData = JSON.stringify(array);
    localStorage.setItem(GLOBALDATA, stringData);
}
export function getGlobalDataStorage() {
    const stringData = localStorage.getItem(GLOBALDATA);
    let dataStorage = JSON.parse(stringData);
    return dataStorage;
}

export function setUserStorage(array) {
    const stringUser = JSON.stringify(array);
    localStorage.setItem(USER, stringUser);
}

export function getUserDietChoice(){
    const userStats = getUserStorage();
    return (userStats.dietChoice);
}
export function getUserStorage() {
    const stringUser = localStorage.getItem(USER);
    const user = JSON.parse(stringUser);

    if (!stringUser) {
        localStorage.setItem(USER, '[]');
    }
    return user;
}

export function setDayStorage(array) {
    const stringDay = JSON.stringify(array);
    localStorage.setItem(DAYUSERFOODS, stringDay);
}

export function getDayStorage() {
    const stringDay = localStorage.getItem(DAYUSERFOODS);
    let dayStorage = JSON.parse(stringDay);

    if (!stringDay) {
        localStorage.setItem(DAYUSERFOODS, '[]');

        dayStorage = [];
    }
    return dayStorage;
}

export function setWeekStorage(array) {
    const stringWeek = JSON.stringify(array);
    localStorage.setItem(WEEKUSERFOODS, stringWeek);
}

export function getWeekStorage() {
    const stringWeek = localStorage.getItem(WEEKUSERFOODS);
    let weekStorage = JSON.parse(stringWeek);

    // seems like you do this process a lot in this file--might be worth refactoring this into a reusable function
    if (!stringWeek) {
        localStorage.setItem(WEEKUSERFOODS, '[]');

        weekStorage = [];
    }
    return weekStorage;
}

export function addFoodToStorage(food) {
    const storage = getDayStorage();
    const selectedFood = findById(storage, food.id);

    if (selectedFood) {
        
        selectedFood.quantity++;
        
    } else {
        const newSelection =
        {
            id: food.id,
            name: food.name,
            calories: food.calories,
            protein: food.protein,
            carbs: food.carbs,
            fat: food.fat,
            img: food.img,
            quantity: 1,
        };
        
        storage.push(newSelection);
    }
    setDayStorage(storage);
}
