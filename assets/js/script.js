

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: false,
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

document.addEventListener("DOMContentLoaded", () => {
const main = document.querySelector('#main')
const cursor = document.querySelector('.cursor')
const herovideo = document.querySelector('#herovideo')

main.addEventListener('mousemove',(e)=>{
    gsap.to(cursor,{
        x:e.x-(10/2),
        y:e.y-(10/2), 
        duration:0.4,
        ease:"power1.out" 
    })

})

herovideo.addEventListener("mouseenter",function(e){
    cursor.style.backgroundColor='white'
    cursor.innerHTML='<img id="play" src="./assets/images/play-button.png" alt="">'
    gsap.to(cursor,{
        scale:10,
    })
})

herovideo.addEventListener("mouseleave",function(e){
    cursor.style.backgroundColor='black'
    cursor.innerHTML=''
    gsap.to(cursor,{
        scale:1,
    })
})



const anime_div = document.querySelectorAll('.hanime-div')


anime_div.forEach(div => {
    div.addEventListener("mouseenter", function(){
    gsap.to(div.querySelector('.hanime-h2'),{
        y: -34,
        duration: 0.45,
        scale: 1.02,
        ease: 'power2.out'
    
    })

    gsap.to(div.querySelector('.hanime-h1'),{
        y: -34,
        duration: 0.45,
        ease: 'power2.out'
    })


})

div.addEventListener("mouseleave", function(){
    gsap.to(div.querySelector('.hanime-h2'),{
        y: 0,
        duration: 0.45,
        scale: 1,
        ease: 'power2.out'
    })

    gsap.to(div.querySelector('.hanime-h1'),{
        y: 0,
        duration: 0.45,
        ease: 'power2.out'
    })


    
})
})


const cards = document.querySelectorAll('.card')
const scards = document.querySelectorAll('.servicecard')

cards.forEach(card => {

    card.addEventListener("mouseenter", function(){

        cursor.innerHTML=`<span class="cursor-text">Explore</span>`
        gsap.to(cursor,{
            scale: 10,
            backgroundColor: "white"


        })
    })

    card.addEventListener("mouseleave", function(){
        cursor.innerHTML=``
        gsap.to(cursor,{
            scale: 1

        })
    })
})

scards.forEach(card => {

    card.addEventListener("mouseenter", function(){

        cursor.innerHTML=`<span class="cursor-text">Explore</span>`
        gsap.to(cursor,{
            scale: 10,
            backgroundColor: "white"


        })
    })

    card.addEventListener("mouseleave", function(){
        cursor.innerHTML=``
        gsap.to(cursor,{
            scale: 1,
            backgroundColor: "black"

        })
    })
})

const page2 = document.querySelector('.container')

page2.addEventListener("mouseenter", function(){
    cursor.style.backgroundColor='white'
    
})

page2.addEventListener("mouseleave", function(){
    cursor.style.backgroundColor='black'
    
})

const page3 = document.querySelector('.container3')


page3.addEventListener("mouseenter", function(){
    cursor.style.backgroundColor='black'
    
})

page3.addEventListener("mouseleave", function(){
    cursor.style.backgroundColor='white'
    
})

const blog = document.querySelector('.blog')


blog.addEventListener("mouseenter", function(){
    cursor.style.backgroundColor='white'
    
})


let navdiv = document.querySelectorAll('.hanime-div')


navdiv.forEach(div=>{
    div.addEventListener("mouseenter",function(){
        gsap.to(cursor,{
            scale:3,
            
        })

        gsap.to(this.querySelector('.hanime-h2'),{
            color: "#ffffff"
        })
    })

    div.addEventListener("mouseleave",function(){
        gsap.to(cursor,{
            scale:1
        })

        gsap.to(this.querySelector('.hanime-h2'),{
            color: "#000000"
        })
    })

    
})



gsap.from(".hanime-h1",{
    y:50,
    duration: 1.3,
    ease: "power2.out",
    stagger: 0.1
})

let tl=gsap.timeline()

tl.from("#head1 span",{
    y:100,
    duration: 1.1,
    ease: "power1.out",
    stagger: 0.2 
})

.from("#para1 span",{
    y:100,
    duration: 1.1,
    ease: "power1.out",
    stagger: 0.2 
}, "<")

.from("#herovideo",{
    scale: 0.7,
    duration: 1.1,
    opacity: 0,
    ease: "power1.out",
}, "<")

tl.from("#head2 span",{
    y:100,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.15 
},"-=1")

.from("#para2 span",{
    y:100,
    duration: 0.6,
    ease: "power1.out",
    stagger: 0.15 
}, "<")

let aboutusbtn = document.querySelector("#aboutusbtn")

aboutusbtn.addEventListener('mouseenter', function(){


    gsap.to("#aboutbtntop",{
        y: -97,
        duration: 0.4,
        ease: "power1.out"
    })

    gsap.to("#aboutbtnbot",{
        y: -120,
        ease: "power1.out"
    })

    gsap.from("#aboutbtnbot",{
        scale:0,
        duration: 0.4,
        borderRadius: '60%',
        width: '10%',
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 3,
        ease: "power1.out",
        backgroundColor: "white"
    })

  
})

aboutusbtn.addEventListener('mouseleave', function(){

    gsap.to("#aboutbtntop",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to("#aboutbtnbot",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 1,
        ease: "power1.out",
        backgroundColor: "black"
    })
})


let projectbtn = document.querySelector(".projectbtn")

projectbtn.addEventListener('mouseenter', function(){


    gsap.to("#projectbtn1",{
        y: -97,
        duration: 0.4,
        ease: "power1.out"
    })

    gsap.to("#projectbtn2",{
        y: -120,
        ease: "power1.out"
    })

    gsap.from("#projectbtn2",{
        scale:0,
        duration: 0.4,
        borderRadius: '60%',
        width: '10%',
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 3,
        ease: "power1.out",
        backgroundColor: "black"
    })

  
})

projectbtn.addEventListener('mouseleave', function(){

    gsap.to("#projectbtn1",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to("#projectbtn2",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 1,
        ease: "power1.out",
        backgroundColor: "white"
    })
})

let servicebtn = document.querySelector("#servicesbtn")

servicebtn.addEventListener('mouseenter', function(){


    gsap.to(".servicebtntop",{
        y: -97,
        duration: 0.5,
        ease: "power1.out"
    })

    gsap.to(".servicebtnbot",{
        y: -100,
        ease: "power1.out"
    })

    gsap.from(".servicebtnbot",{
        scale:0,
        duration: 0.5,
        borderRadius: '50%',
        width: '10%',
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 3,
        ease: "power1.out",
        backgroundColor: "white"
    })

  
})

servicebtn.addEventListener('mouseleave', function(){

    gsap.to(".servicebtntop",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to(".servicebtnbot",{
        y: 0,
        ease: "power1.out"
    })

    gsap.to(cursor,{
        scale: 1,
        ease: "power1.out",
        backgroundColor: "black"
    })
})
})