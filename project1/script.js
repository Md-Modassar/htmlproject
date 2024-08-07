let tl=gsap.timeline({repeat:-1})

tl.to(".one",{
    y:"-102%",
    duration:1,
    ease:"expo-inout",
    stagger:2,
},"unit").to(".one",{
    top:"-100%",
    duration:1,
    ease:"expo-inOut",
    stagger:2,
},"unit+=2")


tl.to(".top1 span",{
    top:"-60px",
    duration:1,
    ease:"expo-inout",
    stagger:2,
},"unit")
.to(".top1 span",{
    top:"150px",
    duration:1,
    ease:"expo-inOut",
    stagger:2,
},"unit+=2")


tl.to(".top2 span",{
    y:"-30px",
    duration:1,
    ease:"expo-inout",
    stagger:2
},"unit").to(".top2 span",{
    top:"-100px",
    duration:1,
    ease:"expo-inOut",
    stagger:2,
},"unit+=2")
tl.to(".top3 span",{
    y:"-50px",
    duration:1,
    ease:"expo-inout",
    stagger:2
},"unit").to(".top3 span",{
    top:"-250px",
    duration:1,
    ease:"expo-inOut",
    stagger:2,
},"unit+=2")

tl.to(".images img",{
    y:"100%",
    duration:1,
    ease:"expo-inout",
    stagger:2
},"unit").to(".images img",{
     opacity:0,
    duration:1,
    ease:"expo-inOut",
    stagger:2,
},"unit+=2")