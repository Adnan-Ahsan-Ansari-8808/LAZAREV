function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function loadingAnimation() {
    var tl = gsap.timeline();
    tl.from("#page1", {
        opacity: 0,
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0)",
        borderRadius: "100px",
        duration:2,
        ease:"expo.out",
        
        y:200,
    })
    tl.from("nav", {
        opacity: 0
    })
    tl.from("#page1 h1,#page1 p,#page1 div", {
        opacity: 0,
        stagger: 0.2,
        duration:0.5,
    })
}

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
function page3VideoAnimation() {
    var page3Center = document.querySelector(".page3-center .icon")
    var video = document.querySelector("#page3 video")
    page3Center.addEventListener("click", function () {
        video.play();
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            // opacity: 1,
            borderRadius: 0,
            duration: 1.5,
            ease: "circ.out",
        })
    })
    video.addEventListener("click", function () {
        video.pause();
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            // opacity: ,
            borderRadius: "30px",
            // x: 100,
            // y: 100,
            duration: 1,
            ease: "circ.out",
        })
    })
}

function autoCount(targetSelector) {
    var elems = document.querySelectorAll(targetSelector)

    elems.forEach(function (elem, index) {
        var numDiv = elem.querySelector(".num")


        numDiv.textContent = "/00" + (index + 1);
    })
}
function page6Left() {
    var secLeft = document.querySelectorAll("#page6 .sec-left")
    secLeft.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            // console.log(elem.childNodes);
            gsap.to(elem, {
                borderTop: "3px solid #808080",
                duration: 0.3
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem, {
                borderTop: "1px solid #333",
                duration: 0.3
            })
        })
    })
}
function page6Right() {
    var secRight = document.querySelectorAll("#page6 .sec-right")
    // console.log(secRight);
    secRight.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].style.opacity = 1
            elem.childNodes[3].play()
            gsap.to(elem.childNodes[5], {
                scale: 1,
                width: "12vw",
                height: "12vw",
                zIndex: "100"
            })
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
            gsap.to(elem.childNodes[5], {
                scale: 0,
                width: "12vw",
                height: "12vw",
                zIndex: "0"
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            // console.log(elem.getBoundingClientRect().x);
            // console.log(elem.getBoundingClientRect().y);
            // console.log(dets.x);
            gsap.to(elem.childNodes[5], {
                x: dets.x - elem.getBoundingClientRect().x - 100,
                y: dets.y - elem.getBoundingClientRect().y - 100,
                ease: "expoScale(0.5,7,none)",
                duration: 0.5
            })
        })
    })
}
function arrowAnimation(targetSelector) {
    var targetElement = document.querySelector(targetSelector)
    if (!targetElement) {
        console.log(`Target Element: "${targetSelector}" not found...!!!`);

    }
    var arrow = document.querySelectorAll(targetSelector);

    arrow.forEach(function (elem) {
        var first = elem.querySelector("span .first");
        var second = elem.querySelector("span .second");

        //-----------page7 elem hover effect(mouse enter) on arrow(svg)-----------
        elem.addEventListener("mouseenter", function () {
            gsap.to(first, {
                y: -10,
                opacity: 0,
            })
            gsap.to(second, {
                y: -10,
                opacity: 1,
            })
        })
        //-----------page7 elem hover effect(mouse leave) on arrow(svg)----------
        elem.addEventListener("mouseleave", function () {
            gsap.to(first, {
                y: 0,
                opacity: 1,
            })
            gsap.to(second, {
                y: 0,
                opacity: 0,
            })
        })
    })
}
function page7() {
    document.querySelector('.uiux summary h1').addEventListener('click', function () {
        const arrowIcon1 = document.getElementById('arrow-icon1');
        arrowIcon1.classList.toggle('rotate1'); // Toggle rotation on click   
    });

    document.querySelector('.product summary h1').addEventListener('click', function () {
        const arrowIcon2 = document.getElementById('arrow-icon2');
        arrowIcon2.classList.toggle('rotate2'); // Toggle rotation on click  
    });
}



locomotiveAnimation();
loadingAnimation();
arrowAnimation(".page7-container .elem");
page7();
page6Left();
page6Right();
autoCount("#page5 .elem");
textBreaker(".page4-left h1");
page3VideoAnimation();
page2Right();
page2Left();
pencilLogoAnimation();
navAnimation();

gsap.from(".bottom8-parts h4", {
    x: 0,
    duration: 0.5,
    stagger: {
        amount: -0.3,
    },
    scrollTrigger: {
        trigger: "#bottom8-part2",
        scroller: "#main",
        // markers: true,
        start: "top 80%",
        end: "top 30%",
        scrub: 1
    }
})

function textBreaker(targetSelector) {
    var targetElement = document.querySelector(targetSelector)
    if (!targetElement) {
        console.log(`Target Element: ${targetSelector} not found!!`);
    }
    var targetElementText = targetElement.innerHTML;
    var splittedText = targetElementText.split("")
    var wrappedText = ""
    splittedText.forEach(function (elem) {
        // console.log(elem);
        wrappedText += `<span>${elem}</span>`
    })
    targetElement.innerHTML = wrappedText;
    // console.log(targetElement);
    gsap.from(`${targetSelector} span`, {
        // y:100,
        opacity: 0.3,
        stagger: 0.25,
        scrollTrigger: {
            scroller: "#main",
            trigger: "#page4",
            // markers: true,
            start: "top 70%",
            end: "top 45%",
            scrub: 2,
        }
    })
}