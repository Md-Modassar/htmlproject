let tl=gsap.timeline()
tl.to(".image-container span",{
    width:"20%",
    duration:1,
})
tl.to(".image-container span",{
    width:"0%",
    delay:1,
    duration:1,
})
tl.to(".image-container1 span",{
    width:"20%",
    duration:1,
})