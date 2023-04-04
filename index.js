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





const user = {
    email: 'bartolomej.rozumbrada@gmail.com',
    password: 'vimzenicnevim',
    name: 'Bartoloměj',
}

document.querySelector('#formular').addEventListener('submit', (e) => {
    e.preventDefault()

    const emailInput = document.querySelector('#email')
    const passwordInput = document.querySelector('#heslo')
    const container = document.querySelector('.kontajner')
    const status = document.querySelector('#status')

    if (
        emailInput.value === user.email &&
        passwordInput.value === user.password
    ) {
        container.innerHTML = `<h1>Přihlásený užívateľ: ${user.name}</h1>`
    } else {
        status.textContent = 'Neplatné prihlasovacie údaje'
        passwordInput.value = ''
    }
})