var styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", ()=> {
    document.querySelector(".style-switcher").classList.toggle("open");
});
window.addEventListener("scroll",() => {
    if(document.querySelector(".style-switcher").classList.toggle("open")){
        document.querySelector(".style-switcher").classList.toggle("open");
    }
});

var alternatestyles = document.querySelectorAll(".altenate-style");
function setActiveStyle(color){
    alternatestyles.forEach((style) =>{
        if(color === style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    })
}


var dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
  
})
window.addEventListener("load",() => {
    if(document.body.classList.contains("dark")){
        dayNight.querySelector("i").classList.add("fa-sun");
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
   
    }
})