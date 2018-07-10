const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date(); //getting current time

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; //turn the number of seconds into a position
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //transform the css

    const minutes = now.getMinutes();
    minutesDegrees = ((minutes/60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    hoursDegrees = ((hours/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

}

setInterval(setDate, 1000);

