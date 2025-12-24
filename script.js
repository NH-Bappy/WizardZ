// gsap.from("nav h1",{
//     y:-30,
//     opacity: 0,
//     delay:1,
//     duration:1
// });
// gsap.from("nav h4 , nav button",{
//     y:-30,
//     opacity: 0,
//     delay:1,
//     duration:1
// });

// section 1


function section1Animation(){
    let tl = gsap.timeline()
    gsap.registerPlugin(ScrollTrigger);

    tl.from("nav h1 ,nav h4 ,nav button", {
        y: -30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15
    });

    tl.from(".center-part-1 h2", {
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part-1 p", {
        x: -100,
        opacity: 0,
        duration: 0.5
    })
    tl.from(".center-part-1 button", {
        opacity: 0,
        duration: 0.4
    })

    tl.from(".center-part-2 img", {
        y: 100,
        opacity: 0,
        duration: 0.5
    }, "-=1")

    gsap.fromTo(".section1button img",
        {
            x: -100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".section1button",
                start: "top 80%",
                end: "top 30%",
                scrub: true
            }
        }
    );
}

//==================================== section 2
// gsap.from(".services h3" , {
//     x:-100,
//     opacity:0,
//     duration:0.5,
//     scrollTrigger:{
//         trigger: ".services h3",
//         scroller:"body",
//         // markers:true,
//         start:"top 50%",
//     }
// })

function section2Animation(){
    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers:true,
            start: "top 50%",
            end: "top 0",
            scrub: 2,
        }
    })

    tl2.from(".services", {
        x: 30,
        opacity: 0,
        duration: 1,
    })

    // line 1
    tl2.from(".elem.line-1.left", {
        x: -300,
        opacity: 0,
        duration: 2,
        delay: 1,
    }, "firstOneSameTime")
    tl2.from(".elem.line-1.right", {
        x: 300,
        opacity: 0,
        duration: 2,
        delay: 1,
    }, "firstOneSameTime")

    // line 2
    tl2.from(".elem.line-2.left", {
        x: -300,
        opacity: 0,
        duration: 2,
        delay: 1
    }, "secondOneSameTime")

    tl2.from(".elem.line-2.right", {
        x: 300,
        opacity: 0,
        duration: 1,
        delay: 1
    }, "secondOneSameTime")

}

section1Animation();
section2Animation();