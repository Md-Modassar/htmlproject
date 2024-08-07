let tl=gsap.timeline()

tl.to(".top-div",{
    width:"0%",
    duration:2,
})
tl.to(".titel",{
    y:"-100px",
    duration:1,
    ease:"expo-easeinOut",
})

tl.from(".header",{
    opacity:0,
    y:"-100px",
    duration:1,

},"unit")
tl.from(".fiter",{
    opacity:0,
    y:"-100px",
    duration:1
},"unit")
tl.to(".image1",{
    opacity:1,
    height:"350px",
    duration:1,
    ease:"expo-easeinout",
    
},"unit")
tl.to(".image2",{
    opacity:1,
    y:"-15%",
    duration:1,
    ease:"expo-easeinout",
    

},"unit")
tl.to(".image3",{
    opacity:1,
    height:"350px",
    duration:1,
    ease:"expo-easeinout",
    

},"unit")

tl.from(".text",{
    opacity:0,
    y:"50px",
    duration:1,

})

gsap.registerPlugin(ScrollTrigger);

let tl2=gsap.timeline({scrollTrigger:{
    trigger:".page2",
    start:"-5% 90%",
    end:"100% 40%",
    scrub:2,
}})
tl2.to(".titel",{
    y:"200%",
    duration:1,
    ease:"expo-easeinout"

},"unit2")
tl2.to(".text",{
    y:"100%"
},"unit2")

tl2.to(".image1",{
    y:"-100%",
    duration:0.2
},"unit2")
tl2.to(".image3",{
    y:"-100%",
    duration:0.2
},"unit2")
tl2.to(".image2",{
    y:"-100%",
    duration:1
},"unit2")
tl2.to(".p2-image1",{
    y:"-100%",
    duration:0.4
},"unit2")
tl2.to(".p2-image3",{
    y:"-100%",
    duration:0.5
},"unit2")
tl2.to(".p2-image2",{
    y:"-100%",
    duration:1
},"unit2")
tl2.to(".p2-image4",{
   
    y:"-50%",
    duration:1
},"unit3")
tl2.to(".p2-image5",{
    y:"-50%",
    duration:1
},"unit3")


let tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        start:"0% 90%",
        end:"30% 50%",
        scrub:2

    }
})
tl3.to(".titel",{
    y:"600%",
    duration:1,
})





