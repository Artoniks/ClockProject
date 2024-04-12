"use strict";
const hourBlockArrow = document.querySelector("#hrArrow");
const minutesBlockArrow = document.querySelector("#minArrow");
const secundesBlockArrow = document.querySelector("#secArrow");
const degr = 6;
function clock() {
  setInterval(() => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hoursDegree = (hours % 12) * 30 + minutes / 2;
    const minutesDegree = minutes * degr;
    const secondsDegree = seconds * degr;

    hourBlockArrow.style.transform = `rotateZ(${hoursDegree}deg)`;
    minutesBlockArrow.style.transform = `rotateZ(${minutesDegree}deg)`;
    secundesBlockArrow.style.transform = `rotateZ(${secondsDegree}deg)`;
  }, 100);
}
clock();
console.log(12 / 0);
