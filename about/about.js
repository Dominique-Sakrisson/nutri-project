import { team } from '../data.js';

const section = document.getElementById('about');

for (let person of team){
    const div = document.createElement('div');
    div.textContent = person.name;
    section.append(div);

    const img = document.createElement('img');
    img.src = `../assets/${person.img}`;
    img.addEventListener('mouseenter', () =>{
        img.src = `../assets/${person.img2}`;
    });
    img.addEventListener('mouseleave', () =>{
        img.src = `../assets/${person.img}`;
    });
    section.append(img);

    const img2 = document.createElement('img');
    img2.classList.add('hidden');
    img2.src = `../assets/${person.img2}`;
    section.append(img2);

    const divDes = document.createElement('div');
    divDes.textContent = person.description;
    section.append(divDes);

    const divLink = document.createElement('a');
    divLink.textContent = person.linkedIn;
    section.append(divLink);

    const divGit = document.createElement('a');
    divGit.textContent = person.github;
    section.append(divGit);
}