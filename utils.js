
export function findById(array, id){
    for (let item of array){
        if (item.id === id) return item;
    }
    return;
}
export function renderTableRows(foodObject){
    const tableRow = document.createElement('tr');
    const tdFood = document.createElement('td');
    console.log(foodObject.name);
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