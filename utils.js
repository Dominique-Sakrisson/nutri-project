export function findById(array, id){
    for (let item of array){
        if (item.id === id) return item;
    }
    return;
}
export function renderTableRows(foodObject){
    const tableRow = document.createElement('tr');
    const tdFood = document.createElement('td');
    tdFood.textContent = foodObject.name;
    tableRow.append(tdFood);

    const tdCalorie = document.createElement('td');
    tdCalorie.textContent = foodObject.calories;
    tableRow.append(tdCalorie);

    const tdProtein = document.createElement('td');
    tdProtein.textContent = foodObject.protein;
    tableRow.append(tdProtein);

    const tdFat = document.createElement('td');
    tdFat.textContent = foodObject.fat;
    tableRow.append(tdFat);

    const tdCarb = document.createElement('td');
    tdCarb.textContent = foodObject.carbs;
    tableRow.append(tdCarb);

    return tableRow;
}

export function calculateTotalCalories(dayFoodData){
    let totalCalories = 0;
    for (let item of dayFoodData) {
        totalCalories += item.calories;
    }
    return totalCalories;
}

export function calculateTotalFat(dayFoodData){
    let totalFat = 0;
    for (let item of dayFoodData) {
        totalFat += item.fat;
    }
    return totalFat;
}

export function calculateTotalCarbs(dayFoodData){
    let totalCarbs = 0;
    for (let item of dayFoodData) {
        totalCarbs += item.carbs;
    }
    return totalCarbs;
}

export function calculateTotalProtein(dayFoodData){
    let totalProtein = 0;
    for (let item of dayFoodData) {
        totalProtein += item.protein;
    }
    return totalProtein;
}

