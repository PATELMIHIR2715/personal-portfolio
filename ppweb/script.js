var crsr = document.querySelector("#cursor")
var crsr_b = document.querySelector("#cursor-blur")
var typed = new Typed(".typing",{
    strings :["Web Developer","Android Developer","Web Designer",""],
    typeSpeed :100,
    BackSpeed :60,
    loop : true
})
var typed = new Typed(".type",{
    strings :["Web Developer","Android Developer","Web Designer","Student",""],
    typeSpeed :100,
    BackSpeed :60,
    loop : true
})
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x-6.5+"px"
    crsr.style.top = dets.y-3+"px"
    crsr_b.style.left = dets.x-150+"px"
    crsr_b.style.top = dets.y-150+"px"
})

gsap.from(".logo",{
    y : -120,
    duration : 1,
    delay : 0.5,
    opacity : 0
})
gsap.from(".home-img,.btn",{
    scale : 0,
    duration : 1,
    delay : 0.5,
    opacity : 0
})

gsap.from(".nav li",{
    x : -150,
    duration : 1,
    delay : 0.5,
    opacity : 0,
    stagger : 0.3

})
gsap.from(".personal-info",{
    y : 200,
    duration : 1,
    delay : 0.5,
    opacity : 0,
    stagger : 0.3
})
gsap.from(".skill-item",{
    x : 200,
    duration : 1,
    delay : 0.5,
    opacity : 0,
    stagger : 0.3
})
gsap.from(".education,.experiance,.service_item ,.contect-info",{
    scale : 0,
    duration : 1,
    delay : 0.5,
    opacity : 0
})
gsap.from(".section-title , .contect-titel",{
    scale : 0,
    duration : 1,
    delay : 0.5,
    opacity : 0
})


var nav = document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalnavlist = navList.length;
for(let i =0; i<totalnavlist;i++)
{
    var a = navList[i].querySelector("a");
    a.addEventListener("click", function(){
        for (let j = 0; j < totalnavlist; j++) {
            navList[j].querySelector("a").classList.remove("active");s
        }
        // this.classList.add("active");
    })
}