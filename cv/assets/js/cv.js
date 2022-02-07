let now = new Date();
let age = now.getFullYear() - 1997;

if(now.getMonth() <= 5 && now.getDate() < 19)
    age--;

document.querySelector("#age").innerHTML = age;