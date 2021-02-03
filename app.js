// import functions and grab DOM elements
import { foodData } from './data.js';
import { setGlobalDataStorage, setUserStorage } from './localStorage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const user = {
        firstName: formdata.get('fname'),
        lastName: formdata.get('lname'),
        dailyCalories: formdata.get('calories'),
        dietChoice: formdata.get('diet-type'),
    };
    setUserStorage(user);
    window.location = './food-select';
    setGlobalDataStorage(foodData);
});

// var button = document.getElementById('submit');
// button.addEventListener('click', function () {
//     document.location.href = './food-select/';
// });

