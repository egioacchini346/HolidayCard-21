import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin);


gsap.set("#card",{ scale: .85, transformOrigin:"center"});
gsap.set(".colleges",{ opacity: 0, transformOrigin:"center"});
gsap.set("#leaf-left",{ opacity: 0, transformOrigin:"center"});
gsap.set("#leaf-right",{ opacity: 0, transformOrigin:"center"});
gsap.set("#light",{ opacity: 0, transformOrigin:"center"});
gsap.set("#light_2",{ opacity: 0, transformOrigin:"center"});

const mainTL = gsap.timeline()


function cabinscene(){
    const tl=gsap.timeline();
    tl.to(".colleges",{duration: .3, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    return tl;
}

function fireplacescene(){
    const tl=gsap.timeline();
    //popcorn string one by one
    tl.from("#pc1", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}}, "sameTime")
    tl.from("#pc2", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc3", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc4", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc5", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc6", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc7", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc8", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc9", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc10", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc11", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc12", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc13", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc14", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc15", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc16", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc17", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc18", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc19", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc20", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc21", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc22", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc23", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc24", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc25", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc26", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc27", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc28", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc29", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc30", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc31", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.from("#pc32", {duration: .15, scale: 0, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    //items on mantle pop in
    tl.from("#big-candle", {duration: .35, scale: 0, ease: "power1.In"},"-=4")
    tl.from("#little-candle", {duration: .35, scale: 0, ease: "power1.In"},"-=3")
    tl.from("#clock", {duration: .35, scale: 0, ease: "power1.In"},"-=2")
    tl.from("#snowglobe", {duration: .35, scale: 0, ease: "power1.In"},"-=1")
    tl.to("#leaf-left", {duration: .25, opacity: 1},"-=3.8")
    tl.to("#leaf-right", {duration: .25, opacity: 1},"-=1.4")
    tl.from("#dragon", {duration: .15, scale: 0, ease: "power1.In"})

    //small candle lights flicker
    tl.from("#light", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light", {duration: .15, opacity:.85}, "flicker2")
    tl.from("#light", {duration: .15, opacity:.2}, "flicker3")
    tl.from("#light", {duration: .15, opacity:.70}, "flicker4")
    tl.from("#light", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker7")
    tl.from("#light", {duration: .15, opacity:.35}, "flicker8")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker9")
    tl.from("#light", {duration: .15, opacity:.2}, "flicker10")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker11")
    //big candle lights flicker
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light_2", {duration: .15, opacity:.85}, "flicker2")
    tl.from("#light_2", {duration: .15, opacity:.2}, "flicker3")
    tl.from("#light_2", {duration: .15, opacity:.70}, "flicker4")
    tl.from("#light_2", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker7")
    tl.from("#light_2", {duration: .15, opacity:.35}, "flicker8")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker9")
    tl.from("#light_2", {duration: .15, opacity:.2}, "flicker10")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker11")


    
    return tl;
}

mainTL.add(cabinscene())
mainTL.add(fireplacescene())

GSDevTools.create();
