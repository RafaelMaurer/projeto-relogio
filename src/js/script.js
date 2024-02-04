function typeWriterEffect(element, text, speed, callback) {
    let i = 0;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (callback) {
                callback();
            }
        }
    }

    type();
}

function showWelcomeText() {
    const greetingElement = document.getElementById("frase");
    const greeting = getGreeting(new Date().getHours());
    typeWriterEffect(greetingElement, `${greeting} O horário agora é:`, 95, startClock);
}

let firstTime = true;

function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formattedHours = (hours % 12) || 12;
    const formattedMinutes = (minutes < 10) ? '0' + minutes : minutes;
    const formattedSeconds = (seconds < 10) ? '0' + seconds : seconds;
    const session = (hours >= 12) ? 'PM' : 'AM';

    const time = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${session}`;

    const displayRelogio = document.getElementById("DisplayRelogio");

    if (firstTime) {
        displayRelogio.style.opacity = 1;
        firstTime = false;
    }

    displayRelogio.innerText = time;
    displayRelogio.textContent = time;


    requestAnimationFrame(showTime);
}

showWelcomeText();


function startClock() {

    requestAnimationFrame(showTime);
    const caixaElement = document.querySelector(".caixa");
    caixaElement.style.opacity = 1;
}

function getGreeting(hours) {
    if (hours >= 6 && hours < 12) {
        return "Bom dia!";
    } else if (hours >= 12 && hours < 18) {
        return "Boa tarde!";
    } else {
        return "Boa noite!";
    }
}
