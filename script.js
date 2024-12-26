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
        // console.log('helo');
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
function pencilLogoAnimation() {
    document.querySelector("#page1 h1 span").addEventListener("mouseenter", function () {
        gsap.to("#page1 h1 span", {
            scale: 0.9,
            width: "4vw",
            rotate: -20,
            duration: 0.3,
        })
    })
    document.querySelector("#page1 h1 span").addEventListener("mouseleave", function () {
        gsap.to("#page1 h1 span", {
            scale: 1,
            width: "6vw",
            rotate: 10,
            duration: 0.3
        })
    })
}
function page2Left() {
    var page2Left = document.querySelector("#page2-left")
    page2Left.addEventListener("mouseenter", function () {
        gsap.to("#page2-left", {
            borderTop: "2px solid #808080",
            duration: 0.3
        })
    })
    page2Left.addEventListener("mouseleave", function () {
        gsap.to("#page2-left", {
            borderTop: "1px solid #333",
            duration: 0.3
        })
    })
}
function page2Right() {
    var rightElems = document.querySelectorAll(".right-elem")

    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            // console.log(elem.childNodes);
            gsap.to(elem, {
                borderTop: "2px solid #808080",
                duration: 0.3
            })
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem, {
                borderTop: "1px solid #333",
                duration: 0.3
            })
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            // console.log(elem.getBoundingClientRect().y);
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 50,
                y: dets.y - elem.getBoundingClientRect().y - 50,
            })
        })
    })
}







page2Right();
page2Left();
pencilLogoAnimation();
navAnimation();