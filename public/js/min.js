let menu = document.querySelector("#menu-bar");
let navber = document.querySelector(".navber");
let scrollTop = document.querySelector("#scroll-top");

const userAction = async () => {
  const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Amsterdam.json");
  const myJson = await response.json(); //extract JSON from the http response
  // do something with myJson
  //myJson = JSON.parse(myJson);
  const day_of_week = myJson.day_of_week
  var element = document.getElementById(day_of_week.toString());
  element.classList.add("active_day");
}

menu.onclick = () =>{
  menu.classList.toggle("fa-times");
  navber.classList.toggle("active")
}

window.onscroll = () =>{
  menu.classList.remove("fa-times");
  navber.classList.remove("active");


  if(window.scrollY > 60){
    scrollTop.classList.add("active");
  }else{
    scrollTop.classList.remove("active");
  }
}

function loader () {
  document.querySelector(".loader-container").classList.add("fade-out")
}
function fadeOut(){
  setInterval(loader , 3000);
  userAction()
}
window.onload = fadeOut ();