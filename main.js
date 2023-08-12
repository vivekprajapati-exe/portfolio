const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeOut;

function velocitymouseeffect(){
    clearTimeout(timeOut);

    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;




    window.addEventListener("mousemove" , function(dets){
        xscale = gsap.utils.clamp(.5, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.5, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;


        mousefollower(xscale, yscale);
        timeOut = setTimeout(function(){
            document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1) `;

        }, 100);


    });
}

function mousefollower(xscale, yscale){
    window.addEventListener('mousemove', function (dets){
        document.querySelector('#minicircle').style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale}) `;
        
        
    })
}

function firstpganim(){
    var tl = gsap.timeline();
    tl.
    from("#nav" , {
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeInOut,
    })
    .from('.herofooter',{
        y:200,
        ease:Expo.easeInOut,
        duration:1
    })
    .from('.sideinfo' , {
        x:300,
        ease:Expo,
        
    })
    .from('.boundingelem' , {
        y:'100%',
        ease:Expo.easeInOut,
        stagger:.15,
        duration:1.5
    })
    // from(".based" , {
        //     y:50,
        //     ease:Expo,
        // })
}
velocitymouseeffect();
mousefollower();
firstpganim();

document.querySelectorAll(".elem")
.forEach(function (elem) {
    var rotate = 0;
    var diffrot = 0;
    elem.addEventListener("mousemove", function(dets){
        var difference = dets.clientY - elem.getBoundingClientRect().top;
        diffrot = dets.clientX - rotate;
        rotate = dets.clientX;
        
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            top:difference,
            left:dets.clientX,
            rotate: gsap.utils.clamp(-20, 20, diffrot ),
            ease:Power3,
        })
    });
    elem.addEventListener("mouseleave", function(dets){
        gsap.to(elem.querySelector("img") , {
            opacity:0,
            ease:Power2,

        })
    });
});


