import { calculateTotalCalories } from '../utils.js';
import { foodData } from '../data.js';

const topSection = document.querySelector('.top-section');
const button = document.createElement('button');
button.textContent = 'press me!';
topSection.append(button);

button.addEventListener('click', (e) =>{
    e.preventDefault();
    //console.log(calculateTotalCalories(foodData));
});


const ctx = document.getElementById('myChart').getContext('2d');
//eslint-disable-next-line no-undef
myChart = new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: ['Calories VS. Goal', 'Carbs VS. Goal', 'Fats VS. Goal', 'Protein VS. Goal'],
       
        maintainAspectRatio: false,
        datasets: [{
            label: 'Current macro',
            data: [6, 14, 1, 2],
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
            label: 'Goal Macro',
            data: [12, 19, 3, 5],
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