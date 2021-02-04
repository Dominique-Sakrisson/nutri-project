import { team } from '../data.js';

const section = document.getElementById('about');

for (let person of team){
    const div = document.createElement('div');
    div.textContent = person.name;
    section.append(div);
    div.classList.add('name');

    const img = document.createElement('img');
    img.src = `../assets/${person.img}`;
    img.addEventListener('mouseenter', () =>{
        img.src = `../assets/${person.img2}`;
    });
    img.addEventListener('mouseleave', () =>{
        img.src = `../assets/${person.img}`;
    });
    section.append(img);

    const divDes = document.createElement('div');
    divDes.textContent = person.description;
    section.append(divDes);
    divDes.classList.add('description');

    const emptyDiv = document.createElement('div');
    section.append(emptyDiv);

    const divLink = document.createElement('a');
    divLink.innerHTML = person.linkedIn;
    emptyDiv.append(divLink);
    divLink.classList.add('link');

    const divGit = document.createElement('a');
    divGit.innerHTML = person.github;
    emptyDiv.append(divGit);
    divGit.classList.add('git');

}