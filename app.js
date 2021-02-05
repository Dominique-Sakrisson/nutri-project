// import functions and grab DOM elements
import { setUserStorage, setGlobalDataStorage, getUserStorage } from './localStorage-utils.js';
import { instructions, foodData } from './data.js';

const user = getUserStorage();
const modalText = document.getElementById('modal-text');

// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const modalSpan = document.getElementsByClassName('close')[0];

for (let item of instructions){
    if (item.name === 'homePage'){
        modalText.textContent = item.description;
    }
}

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
    if (user){
        return;
    } else {modal.style.display = 'block';}
});

window.addEventListener('unload', () =>{
    if (user.homeVisited){
        return;
    } else {
        modal.style.display = 'block';

    }
    user.homeVisited = true;
});

// When the user clicks on <span> (x), close the modal
modalSpan.onclick = function() {
    modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
};

