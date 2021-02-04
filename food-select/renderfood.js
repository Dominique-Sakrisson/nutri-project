import { addFoodToStorage, getDayStorage, getUserStorage, getUserDietChoice, setDayStorage } from '../localStorage-utils.js';
import { calculateTotalCalories } from '../utils.js';
const userFood = getDayStorage();
const userData = getUserStorage();

const userStatsDiv = document.getElementById('user-info-container');
const userName = document.createElement('span');
const userCalGoal = document.createElement('span');
const userActual = document.createElement('span');
userActual.setAttribute('id', 'user-cal-span');
const userDietChoice = document.createElement('span');

export function renderFood(food) {

    const li = document.createElement('li');
    li.classList.add('food-list-item');

    const foodImage = document.createElement('img');
    foodImage.src = `../assets/${food.img}`;
    foodImage.onerror = ()=>foodImage.src = '../assets/groceries.png';
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
        const updatedUserFood = getDayStorage();
        addFoodToStorage(food);
        if (currentCalories >= goalCalories) {
            userActual.classList.add('red');
            userActual.classList.remove('green');
        } else {
            userActual.classList.add('green');
            userActual.classList.remove('red');
        }
        
        console.log(updateUserCalories());
        userActual.textContent = `Current Calories:${updateUserCalories(updatedUserFood)}`;
    });
    return li;
}

export function updateUserCalories() {
    const updatedData = getDayStorage();
    const totalCals = calculateTotalCalories(updatedData);
    setDayStorage(updatedData);
    userActual.textContent = `Current Calories: ${totalCals}`;
    return totalCals;
}


displayUserInfo(userData);

export function displayUserInfo(user) {
    userName.classList.add('user-name');
    userName.textContent = `${user.firstName} ${user.lastName}`;

    userCalGoal.textContent = `Calorie Goal: ${user.dailyCalories}`;

    userActual.textContent = `Current Calories: ${calculateTotalCalories(userFood)}`;
    userDietChoice.textContent = `Your diet choice: ${getUserDietChoice()}`;
    userStatsDiv.append(userName, userCalGoal, userActual, userDietChoice);
}
const currentCalories = Number(calculateTotalCalories(userFood));
const goalCalories = Number(userData.dailyCalories);

// if (currentCalories >= goalCalories) {
//     userActual.classList.toggle('red');
// } else {
//     userActual.classList.toggle('green');
// }


