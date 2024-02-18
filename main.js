const body = document.querySelector("body");
const button = document.querySelector('button');
const span = document.querySelector('span');


let title = document.createElement("h1");
span.textContent = '#FFFFFF'


const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    span.textContent = color;
    return color;
};


button.addEventListener('click', () => {
    title.textContent = '';
    body.style.backgroundColor = getRandomColor();
});