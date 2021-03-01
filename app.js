// import functions and grab DOM elements
import { setUserStorage, setGlobalDataStorage, getUserStorage } from './localStorage-utils.js';
import { instructions, foodData } from './data.js';

const user = getUserStorage();
const modalText = document.getElementById('modal-text');

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const modalSpan = document.getElementsByClassName('close')[0];

const homePage = instructions.find(it => it.name === 'homePage');

modalText.textContent = homePage.description;

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
    localStorage.clear();
    setUserStorage(user);
    window.location = './food-select';
    setGlobalDataStorage(foodData);
});

// When the user clicks on the button, open the modal
window.addEventListener('load', () => {
    if (!user){
        modal.style.display = 'block';
    }
});

// When the user clicks on <span> (x), close the modal
modalSpan.addEventListener('click', () => {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', (e)=>{
    if (e.target === modal) { // woah, very cool!
        modal.style.display = 'none';
    }
});

