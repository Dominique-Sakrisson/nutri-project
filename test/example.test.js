// IMPORT MODULES under test here:

import { getDayStorage, getUserStorage, setDayStorage, setUserStorage } from '../localStorage-utils.js';
import { calculateAllMacros, calculateTotalCalories, calculateTotalCarbs, calculateTotalFat, calculateTotalProtein, findById } from '../utils.js';

const test = QUnit.test;

const testData = [
    {
        id: 1,
        name: 'apple',
        img: 'apple.png',
        serving: '1 fruit',
        calories: 95,
        protein: .5,
        carbs: 25,
        fat: .3,
        category: 'fruit',
        isVegetarian: true,
        isPaleo: true,
        isGlutenFree: true,
        quantity: 1,
    },
    {
        id: 2,
        name: 'banana',
        img: 'banana.png',
        serving: '1 fruit',
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: .4,
        category: 'fruit',
        isVegetarian: true,
        isPaleo: true,
        isGlutenFree: true,
        quantity: 2,
    },
    {
        id: 3,
        name: 'salmon',
        img: 'salmon.png',
        serving: '1oz',
        calories: 52,
        protein: 7.2,
        carbs: 0,
        fat: 2.3,
        category: 'fish',
        isVegetarian: false,
        isPaleo: true,
        isGlutenFree: true,
        quantity: 1,
    },
];
const testUser = {
    firstName: 'Patrick',
    lastName: 'Hrabos',
    dailyCalories: '2000',
    dietChoice: 'vegetarian',
};
test('when an array of foods objects is passed in the total calories should be summed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 357;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotalCalories(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when an array of foods objects is passed in the total proteins should be summed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10.3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotalProtein(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when an array of foods objects is passed in the total carbs should be summed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 79;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotalCarbs(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when an array of foods objects is passed in the total fats should be summed', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 3.4;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotalFat(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('when an array of foods objects is passed in the total macros should be returned in an array', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = ['357.0', '79.0', '3.4', '10.3'];
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateAllMacros(testData);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('when an array of foods objects and an id is passed in the object mathching the id should return', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 3,
        name: 'salmon',
        img: 'salmon.png',
        serving: '1oz',
        calories: 52,
        protein: 7.2,
        carbs: 0,
        fat: 2.3,
        category: 'fish',
        isVegetarian: false,
        isPaleo: true,
        isGlutenFree: true,
        quantity: 1,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(testData, 3);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('when an array of foods objects and an id is passed in the object mathching the id should return', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: 2,
        name: 'banana',
        img: 'banana.png',
        serving: '1 fruit',
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: .4,
        category: 'fruit',
        isVegetarian: true,
        isPaleo: true,
        isGlutenFree: true,
        quantity: 2,
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById(testData, 2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});
test('when an object of user data is passed in the object should be set to local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    setUserStorage(testUser);
    const expected = JSON.stringify(testUser);
    const stringUser = localStorage.getItem('USER');
    
    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(stringUser, expected);
});
test('when getUserStorage is called it should get the user from local storage and parse it and return a user object', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringUser = JSON.stringify(testUser);
    localStorage.setItem('USER', stringUser);
    const user = getUserStorage();

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(user, testUser);
});
test('when an array of food object is passed in the array should be set to local storage', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    setDayStorage(testData);
    const expected = JSON.stringify(testData);
    const stringDay = localStorage.getItem('DAYUSERFOODS');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(stringDay, expected);
});
test('when getDayStorage is called it should get the user foods from local storage and parse it and return an array of food objects', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const stringDay = JSON.stringify(testData);
    localStorage.setItem('DAYUSERFOODS', stringDay);
    const userFoods = getDayStorage();
    

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(userFoods, testData);
});
