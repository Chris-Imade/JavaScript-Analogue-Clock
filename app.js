setInterval(setClock, 1000);

const secondHand = document.querySelector('[data-second-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const hourHand = document.querySelector('[data-hour-hand]')

function setClock(){
    const currentDate = new Date();
    console.log(currentDate)
    const secondsRatio = currentDate.getSeconds() /60
    console.log(secondsRatio)
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    console.log(minutesRatio)
    const hoursRatio = (secondsRatio + currentDate.getHours()) /12 
    console.log(hoursRatio)
    rotateClock(secondHand, secondsRatio)
    rotateClock(minuteHand, minutesRatio)
    rotateClock(hourHand, hoursRatio)
}

function rotateClock(elements, rotationRatio){
    elements.style.setProperty('--rotation', rotationRatio * 360)
}
setClock();