import { getDayStorage } from './localStorage-utils.js';
import { calculateTotalCalories } from './utils.js';
const userFood = getDayStorage();

export function displayUserInfo(user) {
    const userStatsDiv = document.getElementById('user-info-container');


    const userName = document.createElement('span');
    userName.classList.add('user-name');
    userName.textContent = `${user.firstName} ${user.lastName}`;

    const userCalGoal = document.createElement('span');
    userCalGoal.textContent = `Calorie Goal: ${user.dailyCalories}`;

    const userActual = document.createElement('span');
    userActual.textContent = `Current Calories: ${calculateTotalCalories(userFood)}`;

    userStatsDiv.append(userName, userCalGoal, userActual);
}





// function calculateTotalCalories (dayFoodData) {
//     let totalCalories = 0;
//     for (let item of dayFoodData) {
//         totalCalories += item.calories * item.quantity; //update with right key name later
//     }
//     return totalCalories.toFixed(1);
// }