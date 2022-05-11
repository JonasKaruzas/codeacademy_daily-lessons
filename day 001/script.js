//document.getElementsByClassName("date") = h_date;

//document.getElementById("date").innerHTML = "labas";

document.getElementsByClassName("date").innerHTML = "Hello World!";

var today = new Date();

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

console.log(time);
console.log(date);