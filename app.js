// import functions and grab DOM elements
import { setUserStorage } from './localStorage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formdata = new FormData(form);
    const user = {
        firstName: formdata.get('fname'),
        lastName: formdata.get('lname'),
        dailyCalories: formdata.get('calories'),
    };
    setUserStorage(user);
    window.location = './food-select';
});