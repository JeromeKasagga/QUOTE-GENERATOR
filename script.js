const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const sideButton = document.querySelectorAll('.side-button');

function changeOpacity(){
    sideButton.forEach(button => {
        button.style.opacity = 1;
    })
}

rightButton.addEventListener("mouseover", changeOpacity);
leftButton.addEventListener("mouseover", changeOpacity);