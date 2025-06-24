/////*RAIN*///
function meteor() {
    let amount = 50;
    let body = document.querySelector("body");
    let count = 0;
    while (count < amount) {
    let drop = document.createElement("i");
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delay = Math.random() * -30;
    let duration = Math.random() * 10;
    drop.style.width = `${1}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;
    body.appendChild(drop);
    count++;
    }
    }
    meteor();