export function displayUserInfo(user) {
    const userStatsDiv = document.getElementById('user-info-container');


    const userName = document.createElement('span');
    userName.classList.add('user-name');
    userName.textContent = `${user.firstName} ${user.lastName}`;

    const userCalGoal = document.createElement('span');
    userCalGoal.textContent = `Calorie Goal: ${user.dailyCalories}`;

    userStatsDiv.append(userName, userCalGoal);
}