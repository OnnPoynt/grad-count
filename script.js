// const monthsEL = document.getElementById('months')
const daysEL = document.getElementById('days')
const hoursEL = document.getElementById('hours')
const minutesEL = document.getElementById('minutes')
const secondsEL = document.getElementById('seconds')

const graduation = '01 July 2023';


function countdown() {
    const graduationDate = new Date(graduation);
    const currentDate = new Date();

    const totalSeconds = (graduationDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600) % 24;
    const minutes = Math.floor(totalSeconds/60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;


    // monthsEL.innerHTML = months;
    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEL.innerHTML = seconds;
}

//initial call
countdown();

setInterval(countdown, 1000);