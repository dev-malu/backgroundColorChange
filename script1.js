function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function generateParagraph() {
    const para = document.createElement('p');
    para.textContent = 'you clicked the button....';
    document.body.appendChild(para);
    document.body.style.backgroundColor = randomColor();
}

const btn = document.createElement('button');
btn.classList.add('para-btn');
btn.innerHTML ='Click me';
document.body.appendChild(btn);

const btns = document.getElementsByClassName('para-btn');

for(const btn of btns) {
    btn.addEventListener('click',generateParagraph);
}

