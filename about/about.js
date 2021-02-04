import { instructions, team } from '../data.js';

const section = document.getElementById('about');

for (let person of team){
    const div = document.createElement('div');
    div.textContent = person.name;
    section.append(div);

    const img = document.createElement('img');
    img.src = '../assets/broccoli.png';
    section.append(img);
}