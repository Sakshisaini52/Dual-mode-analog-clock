
const hour = document.querySelector(".hour"),
      min = document.querySelector(".min"),
      sec = document.querySelector(".sec");

setInterval( () =>{ 
    let day= new Date(),
        h = day.getHours() * 30,     // 360/12
        // converting current time [alternate, hr*30 + min/2]
        m = day.getMinutes() * 6 ,   // 360/60
        s = day.getSeconds() * 6 ;

    hour.style.transform = `rotateZ(${h+(m/12)}deg)`;
    min.style.transform = `rotateZ(${m}deg)`;
    sec.style.transform = `rotateZ(${s}deg)`;
});



let toggler = document.querySelector(".toggleClass");
let body= document.querySelector("body");
toggler.onclick = () => {
    body.classList.toggle("light");
};



 

//const secondsDegrees = ((seconds / 60) * 360);
// divided by 60 because 1 minute is equal to 60 seconds & multiplied by 360 because a circle is formed by 360 degrees

// hDeg = h * 30 + m * (360/720),
// mDeg = m * 6 + s * (360/3600),
// sDeg = s * 6,
// 6= 360/60, 3600= 60*60,  720 = 60*12