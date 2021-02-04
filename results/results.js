import { calculateTotalCalories, calculateTotalCarbs, calculateTotalFat, calculateTotalProtein } from '../utils.js';
import { foodData, instructions } from '../data.js';
import { getDayStorage, getUserStorage, getWeekStorage } from '../localStorage-utils.js';
import { displayUserInfo } from '../display-user-info.js'

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
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro',
            data: [user.dailyCalories, user.dailyCalories * .5, user.dailyCalories * .25, user.dailyCalories * .25
            ],
        
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
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
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro grams',
            data: [user.dailyCalories * .3, user.dailyCalories * .20, user.dailyCalories * .25
            ],
        
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
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


/* jshint ignore:end */

const ctx3 = document.getElementById('myChart3').getContext('2d');
/* jshint ignore:start*/
const myChart3 = new Chart(ctx3, { 
    type: 'bar',
    data: {
        labels: ['Carbs(g\'s) VS. Goal(g\'s)', 'Fat(g\'s) VS. Goal(g\'s)', 'Protein(g\'s) VS. Goal(g\'s)'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current Grams of Macro',
            data: [calculateTotalCarbs(dayFoodData) * 4, calculateTotalFat(dayFoodData) * 9, calculateTotalProtein(dayFoodData) * 4],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro grams',
            data: [user.dailyCalories * .3, user.dailyCalories * .20, user.dailyCalories * .25
            ],
        
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)',
                'rgba(75, 192, 192, 0.4)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
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

const ctx4 = document.getElementById('myChart3').getContext('2d');
/* jshint ignore:start*/
const myChart4 = new Chart(ctx4, { 
    type: 'bar',
    data: {
        labels: ['Carbs(g\'s) VS. Goal(g\'s)', 'Fat(g\'s) VS. Goal(g\'s)', 'Protein(g\'s) VS. Goal(g\'s)'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current Grams of Macro',
            data: [calculateTotalCarbs(dayFoodData) * 4, calculateTotalFat(dayFoodData) * 9, calculateTotalProtein(dayFoodData) * 4],
            backgroundColor: [
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
                'rgba(0, 128, 0, 0.5)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderWidth: 1
        }, 
        { 
            // calorie goal, calorie goal from carbs, calorie goal from fat, calorie goal from protein
            label: 'Goal Macro grams',
            data: [user.dailyCalories * .3, user.dailyCalories * .20, user.dailyCalories * .25
            ],
        
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
                'rgba(0, 128, 0, 1)',
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