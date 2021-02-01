// import functions and grab DOM elements
import { getUserStorage, setUserStorage } from "./localStorage-utils.js";

const userStorage = getUserStorage();
const form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formdata = new FormData(form);
    const user = {
        firstName: formdata.get('fname'),
        lastName: formdata.get('lname'),
        dailyCalories: formdata.get('calories'),
    };
    userStorage.push(user);
    setUserStorage(userStorage);
})