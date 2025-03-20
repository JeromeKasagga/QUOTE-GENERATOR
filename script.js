const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const sideIcon = document.querySelectorAll('.side-icon');

function changeOpacity() {

    sideIcon.forEach(button => {
        button.style.opacity = 1;
    });
}

rightButton.addEventListener("mouseover", changeOpacity);
leftButton.addEventListener("mouseover", changeOpacity);


