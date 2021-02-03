import { calculateTotalCalories, calculateTotalCarbs, calculateTotalFat, calculateTotalProtein } from '../utils.js';
import { foodData, instructions } from '../data.js';
import { getDayStorage, getUserStorage } from '../localStorage-utils.js';


const dayFoodData = getDayStorage();
const user = getUserStorage(); 

const topSection = document.querySelector('.top-section');
const span = document.createElement('span');
for (let item of instructions){
    if (item.name === 'resultsPage'){
        span.textContent = item.description;
    }
}
topSection.classList.add('instructions');
topSection.append(span);

console.log(instructions);
//span.textContent = instructions.name


console.log(user.dailyCalories);
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
            label: 'Goal Macro',
            data: [user.dailyCalories, user.dailyCalories * .5, user.dailyCalories * .25, user.dailyCalories * .25
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
