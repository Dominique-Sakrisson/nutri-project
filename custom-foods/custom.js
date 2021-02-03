import { foodData } from '../data.js';

const formElement = document.getElementById('add-custom-form');

formElement.addEventListener('submit', (e)=>{
    e.preventDefault(e);
    const data = new FormData(formElement);
    const id = data.get('id');
    const name = data.get('name');
    const img = data.get('img');
    const serving = data.get('serving');
    const calories = data.get('calories');
    const protein = data.get('protein');
    const carbs = data.get('carbs');
    const fat = data.get('fat');
    const category = data.get('category');

    const newFood = {
        id: Number(id),
        name: name,
        img: img,
        serving: serving,
        calories: Number(calories),
        protein: Number(protein),
        carbs: Number(carbs),
        fat: Number(fat),
        category: category,
    };
    foodData.push(newFood);
    console.log(foodData);
});
console.log(foodData);