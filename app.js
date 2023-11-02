function loco () {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

loco()


//gsap scroll animation to make the video autoplay on scroll
gsap.to(".hero>video", {
    scrollTrigger: {
        trigger:`.hero>video`,
        start: `2% top`,
        end: `bottom top`,
        scroller: `.main`
    },
    onStart: ()=>{
        document.querySelector(".hero>video").play()
    }
})


// to keep the scroll in the same page ie to allow the scroll to happen inside that video section before scrolling into the next section
gsap.to(".hero", {
    scrollTrigger : {
        trigger: `.hero`,
        start: `top top`,
        end: `bottom top`,
        scroller: `.main`,
        pin:true
    }
})


// to make the bottom container item dissapear once the scroll has passed 2% of the hero section
gsap.to(".hero .bottom", {
    scrollTrigger: {
        trigger:`.hero .bottom`,
        start: `2% top`,
        end: `bottom top`,
        scroller: `.main`
    },
    opacity: 0
})



var tl = gsap.timeline({
    scrollTrigger: {
        trigger: `.page2`,
        start: `top top`,
        scrub: 1,
        scroller: `.main`,
        pin: true
    }
})

tl.to(".page2>h1", {
    top: `-20%`
}) 


var tl1 = gsap.timeline({
    scrollTrigger: {
        trigger: `.page3`,
        start: `top top`,
        scrub: 1,
        scroller: `.main`,
        pin: true
    }
})

tl1.to(".page3>h1", {
    top: `-20%`
}) 


var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: `.page4`,
        start: `top top`,
        scrub: 1,
        scroller: `.main`,
        pin: true
    }
})

tl2.to(".page4>h1", {
    top: `-20%`
}) 


var tl3 = gsap.timeline({
    scrollTrigger: {
        trigger: `.page5`,
        start: `top top`,
        scrub: 1,
        scroller: `.main`,
        pin: true
    }
})

tl3.to(".page5>h1", {
    top: `-20%`
}) 

// tl3.to(".extra>h1", {
//     top: `-100%`
// }) 


var tl4 = gsap.timeline({
    scrollTrigger: {
        trigger: `.page7`,
        start: `top top`,
        scrub: 1,
        scroller: `.main`,
        pin: true
    }
})

tl4.to(".page7>h1", {
    top: `-20%`
}) 