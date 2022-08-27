const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

//--------Functions
function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDregrees = ((minutes / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minutesDregrees}deg)`;
    
    const hours = now.getHours();
    const hoursDregrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDregrees}deg)`;

}

setInterval(setDate,1000);