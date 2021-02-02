import { findById } from './utils.js';
import { foodData } from './data.js';
const data = foodData;

export const USER = 'USER';
export const DAYUSERFOODS = 'DAYUSERFOODS';
export const WEEKUSERFOODS = 'WEEKUSERFOODS';

export function setUserStorage(array) {
    const stringUser = JSON.stringify(array);
    localStorage.setItem(USER, stringUser);
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
    const weekStorage = JSON.parse(stringWeek);

    if (!stringWeek) {
        localStorage.setItem(WEEKUSERFOODS, '[]');
    }
    return weekStorage;
}

export function addFoodToStorage(id) {
    const storage = getDayStorage();

    const selectedFood = findById(data, id);

    if (localStorage.getItem(selectedFood)) {

        selectedFood.quantity++;

    } else {

        const newSelection =
        {
            id: selectedFood.id,
            name: selectedFood.name,
            calories: selectedFood.calories,
            protein: selectedFood.protein,
            carbs: selectedFood.carbs,
            fat: selectedFood.fat,
            quantity: 1
        };
        storage.push(newSelection);
    }
    setDayStorage(storage);
}
