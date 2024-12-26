function navAnimation() {
    var nav = document.querySelector("nav");
    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();
        tl.to("#nav-bottom", {
            height: "24vh",
            duration: 0.1,
            // ease:"none"
        })
        tl.to(".nav-part2 h5", {
            display: "block",
        })
        tl.to(".nav-part2 h5 span", {
            y: 0,
            // duration:0.3,
            stagger: {
                amount: 0.6,
            }
        })
        console.log('helo');
    })
    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2,
            }
        })
        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0,
        })
        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.1,
        })
    })
}
function pencilLogoAnimation(){
    document.querySelector("#page1 h1 span").addEventListener("mouseenter",function(){
        gsap.to("#page1 h1 span",{
            scale:0.9,
            width:"4vw",
            rotate:-20,
            duration:0.3
            
        })
    })
    document.querySelector("#page1 h1 span").addEventListener("mouseleave",function(){
        gsap.to("#page1 h1 span",{
            scale:1,
            width:"6vw",
            rotate:10,
            duration:0.3
        })
    })
}









pencilLogoAnimation();
navAnimation();