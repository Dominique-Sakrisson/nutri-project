import { addFoodToStorage, getDayStorage, setDayStorage } from '../localStorage-utils.js';

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
        addFoodToStorage(food);
    });

    return li;
}