var tl = gsap.timeline(
    {repeat:-1,
    repeatDelay:-0.5,
}
);

tl.to(".imgcontainer",{
    ease: Expo.easeInOut,
    duration: 2,
    width: "100%",
    stagger: 2
},'a')
.to(".text h1",{
    ease: Expo.easeInOut,
    
    delay:0.5,
    stagger: 2,
    top: "0%",
},'a')
.to(".text h1",{
    delay: 2.5,
    ease: Expo.easeInOut,
    
    
    stagger: 2,
    top: "-100%",
},'a')