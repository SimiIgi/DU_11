function moveCar(event) {
    const car = document.getElementById(".car");
    const arrowPressed = event.keyCode;
    const arrowRight = 39;
    const arrowLeft = 37;

    if (arrowPressed === arrowRight) {
        car.style.marginLeft = parseInt(car.style.marginLeft) + 20 + "px";
    } else if (arrowPressed === arrowLeft) {
        car.style.marginRight = parseInt(car.style.marginRight) + 20 + "px";
    }
}

document.addEventListener("keydown", moveCar);