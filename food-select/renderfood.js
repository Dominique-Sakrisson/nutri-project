import { addFoodToStorage, getDayStorage, getUserStorage, getUserDietChoice } from '../localStorage-utils.js';
import { calculateTotalCalories } from '../utils.js';
const userFood = getDayStorage();
const userData = getUserStorage();

export function renderFood(food) {

    const li = document.createElement('li');
    li.classList.add('food-list-item');

    const foodImage = document.createElement('img');
    foodImage.src = `../assets/${food.img}`;
    foodImage.classList.add('food-image');

    const foodFactsDiv = document.createElement('div');
    foodFactsDiv.classList.add('food-facts');
    foodFactsDiv.innerHTML =

        `<span>${food.name}</span>
        <span>${food.serving}</span>
        <span>calories: ${food.calories}</span>
        <span>protein: ${food.protein}</span>
        <span>carbohydrates: ${food.carbs}</span>`;

    li.append(foodImage, foodFactsDiv);

    li.addEventListener('click', () => {
        getDayStorage();
        const updatedUserFood = getDayStorage();
        addFoodToStorage(food);
        userActual.textContent = `Current Calories: ${calculateTotalCalories(updatedUserFood)} ` ;
    });

    return li;
}

const userStatsDiv = document.getElementById('user-info-container');
const userName = document.createElement('span');
const userCalGoal = document.createElement('span');
const userActual = document.createElement('span');
const userDietChoice = document.createElement('span');

displayUserInfo(userData);
export function displayUserInfo(user) {
    userName.classList.add('user-name');
    userName.textContent = `${user.firstName} ${user.lastName}`;

    userCalGoal.textContent = `Calorie Goal: ${user.dailyCalories}`;

    userActual.textContent = `Current Calories: ${calculateTotalCalories(userFood)}`;
    userDietChoice.textContent = `Your diet choice: ${getUserDietChoice()}`;
    userStatsDiv.append(userName, userCalGoal, userActual, userDietChoice);
}

