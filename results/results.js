import { calculateTotalCalories, calculateTotalCarbs, calculateTotalFat, calculateTotalProtein } from '../utils.js';
import { foodData, instructions } from '../data.js';
import { getDayStorage, getUserStorage, getWeekStorage } from '../localStorage-utils.js';
import { displayUserInfo } from '../food-select/renderfood.js';

const dayFoodData = getDayStorage();
const weekFoodData = getWeekStorage();
const user = getUserStorage(); 
const topSection = document.querySelector('.top-section');
const span = document.createElement('span');

displayUserInfo(user);

for (let item of instructions){
    if (item.name === 'resultsPage'){
        span.textContent = item.description;
    }
}

topSection.classList.add('instructions');
topSection.append(span);

const weekArray = [];

if (weekFoodData.length < 7){
    for (let i = 0; i <= weekFoodData.length - 1; i++){
        const ourItems = weekFoodData[i];
        console.log(ourItems + 'our item');
        for (let item of ourItems){
            weekArray.push(item);
            console.log(weekArray);
        }

    }
} else {
    for (let i = 0; i <= 6; i++){
        const ourItems = weekFoodData[i];
        console.log(ourItems + 'our item');
        for (let item of ourItems){
            weekArray.push(item);
            console.log(weekArray.length);
            console.log(weekArray);

        }

    }
}
console.log(calculateTotalCalories(weekArray) + 'is your weekly calories');

const ctx = document.getElementById('myChart').getContext('2d');
/* jshint ignore:start*/
const myChart = new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: ['Calories VS. Goal', 'Carbs VS. Goal', 'Fat VS. Goal', 'Protein VS. Goal'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current macro',
            data: [calculateTotalCalories(dayFoodData), calculateTotalCarbs(dayFoodData) * 4, calculateTotalFat(dayFoodData) * 9, calculateTotalProtein(dayFoodData) * 4],
            backgroundColor: [
                'rgba(237,209,148,1)', //brown color
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderColor: [
                'rgba(237,209,148,1)', //brown color
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro',
            data: [user.dailyCalories, user.dailyCalories * .5, user.dailyCalories * .25, user.dailyCalories * .25
            ],
        
            backgroundColor: [
                'rgba(237,209,148,.6)', //brown color
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderColor: [
                'rgba(237,209,148,.6)', //brown color
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});
/* jshint ignore:end */

const ctx2 = document.getElementById('myChart2').getContext('2d');
/* jshint ignore:start*/
const myChart2 = new Chart(ctx2, { 
    type: 'bar',
    data: {
        labels: ['Carbs(g\'s) VS. Goal(g\'s)', 'Fat(g\'s) VS. Goal(g\'s)', 'Protein(g\'s) VS. Goal(g\'s)'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current Grams of Macro',
            data: [calculateTotalCarbs(dayFoodData) * 4, calculateTotalFat(dayFoodData) * 9, calculateTotalProtein(dayFoodData) * 4],
            backgroundColor: [
               
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderColor: [
                
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro grams',
            data: [user.dailyCalories * .3, user.dailyCalories * .20, user.dailyCalories * .25
            ],
        
            backgroundColor: [
               
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderColor: [
                
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});
/* jshint ignore:end */

const ctx3 = document.getElementById('myChart3').getContext('2d');
/* jshint ignore:start*/
const myChart3 = new Chart(ctx3, { 
    type: 'bar',
    data: {
        labels: ['Calories VS. Goal', 'Carbs VS. Goal', 'Fat VS. Goal', 'Protein VS. Goal'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current macro',
            data: [calculateTotalCalories(weekArray), calculateTotalCarbs(weekArray) * 4, calculateTotalFat(weekArray) * 9, calculateTotalProtein(weekArray) * 4],
            backgroundColor: [
                'rgba(237,209,148,1)', //brown color
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderColor: [
                'rgba(237,209,148,1)', //brown color
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro',
            data: [user.dailyCalories * 7, (user.dailyCalories * .5) * 7, (user.dailyCalories * .25) * 7, (user.dailyCalories * .25) * 7
            ],
        
            backgroundColor: [
                'rgba(237,209,148,.6)', //brown color
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderColor: [
                'rgba(237,209,148,.6)', //brown color
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});

/* jshint ignore:end */

const ctx4 = document.getElementById('myChart4').getContext('2d');
/* jshint ignore:start*/
const myChart4 = new Chart(ctx4, { 
    type: 'bar',
    data: {
        labels: ['Carbs(g\'s) VS. Goal(g\'s)', 'Fat(g\'s) VS. Goal(g\'s)', 'Protein(g\'s) VS. Goal(g\'s)'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current Grams of Macro',
            data: [(calculateTotalCarbs(weekArray) * 4), (calculateTotalFat(weekArray) * 9), (calculateTotalProtein(weekArray) * 4)],
            backgroundColor: [
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderColor: [
                'rgba(136,192,87, 1)', //green color
                'rgba(204,92,86,1)', //red color
                'rgba(151,119,168,1)', // purple color
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro grams',
            data: [(user.dailyCalories * .3) * 7 , (user.dailyCalories * .20) * 7, (user.dailyCalories * .25) * 7
            ],
        
            backgroundColor: [
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderColor: [
                'rgba(136,192,87, .6)', //green color
                'rgba(204,92,86,.6)', //red color
                'rgba(151,119,168,)', // purple color
            ],
            borderWidth: 1
        }]
    },
    options: {
        layout: {

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    }
});
/* jshint ignore:end */