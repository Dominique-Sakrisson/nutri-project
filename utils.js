export function findById(array, id){
    for (let item of array){
        if (item.id === id){
            return item;
        }
    }
}

// seems like these functions could be refactored into one function like so
function calculateCalories(dayFoodData, type) {
    let totalCalories = 0;
    for (let item of dayFoodData) {
        totalCalories += item[type] * item.quantity;
    }
    return totalCalories.toFixed(1);
}

const calculateTotalCalories = (dayFoodData) => calculateCalories(dayFoodData, 'calories');
const calculateTotalFat = (dayFoodData) => calculateCalories(dayFoodData, 'fat');
const calculateTotalCarbs = (dayFoodData) => calculateCalories(dayFoodData, 'carbs');
const calculateTotalProtein = (dayFoodData) => calculateCalories(dayFoodData, 'protein');

export function calculateAllMacros(dayFoodData){
   
    return [
        calculateTotalCalories(dayFoodData), 
        calculateTotalCarbs(dayFoodData), 
        calculateTotalFat(dayFoodData), 
        calculateTotalProtein(dayFoodData),
    ];
}
