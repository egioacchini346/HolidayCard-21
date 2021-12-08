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
gsap.set("#Vector_52",{transformOrigin:"center"});
gsap.set("#medium-flame",{ opacity: 0, transformOrigin:"center"});
gsap.set("#faint-flame",{ opacity: 0, transformOrigin:"center"});
gsap.set("#bright-flame",{ opacity: 0, transformOrigin:"center"});
gsap.set("#smallest-flame",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_58",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_59",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_60",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_61",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_62",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_63",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_64",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Vector_65",{ opacity: 0, transformOrigin:"center"});
gsap.set("#seasons-greetings",{ opacity: 0, transformOrigin:"center"});
gsap.set("#your-friends",{ opacity: 0, transformOrigin:"center"});
gsap.set("#wishing",{ opacity: 0, transformOrigin:"center"});
gsap.set("#logo",{ opacity: 0, transformOrigin:"center"});
gsap.set("#Rectangle-9",{ opacity: 0, transformOrigin:"center"});





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

    //dragon lights

    tl.to("#Vector_106", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_110", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_94", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_90", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_114", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_118", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_122", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_126", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_130", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_134", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_138", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_142", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_154", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_158", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_162", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_166", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_170", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_102", {duration: .1, fill:"#FFFB99"})
    tl.to("#Vector_146", {duration: .1, fill:"#FFFB99"})
   

    //clock hands spinning
    tl.to("#Vector_52", {duration: 2, x: 2, y:1.5, rotation: 45},"Sametime")
    tl.to("#Vector_52", {duration: 2, y:1},"Sametime")
    

    //fire
    //medium flame
    tl.from("#medium-flame", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#medium-flame", {duration: .15, opacity:.85}, "flicker2")
    tl.from("#medium-flame", {duration: .15, opacity:.2}, "flicker3")
    tl.from("#medium-flame", {duration: .15, opacity:.70}, "flicker4")
    tl.from("#medium-flame", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#medium-flame", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#medium-flame", {duration: .15, opacity:.55}, "flicker7")
    tl.from("#medium-flame", {duration: .15, opacity:.35}, "flicker8")
    tl.from("#medium-flame", {duration: .15, opacity:.65}, "flicker9")
    tl.from("#medium-flame", {duration: .15, opacity:.2}, "flicker10")
    tl.from("#medium-flame", {duration: .15, opacity: 1}, "flicker11")
    tl.from("#medium-flame", {duration: .15, opacity: 1}, "flicker12")
    tl.from("#medium-flame", {duration: .15, opacity:.85}, "flicker13")
    tl.from("#medium-flame", {duration: .15, opacity:.2}, "flicker14")
    tl.from("#medium-flame", {duration: .15, opacity:.70}, "flicker15")
    tl.from("#medium-flame", {duration: .15, opacity:.15}, "flicker16")
    tl.from("#medium-flame", {duration: .15, opacity:.90}, "flicker17")
    tl.from("#medium-flame", {duration: .15, opacity:.55}, "flicker18")
    tl.from("#medium-flame", {duration: .15, opacity:.35}, "flicker19")
    tl.from("#medium-flame", {duration: .15, opacity:.65}, "flicker20")
    tl.from("#medium-flame", {duration: .15, opacity:.2}, "flicker21")
    tl.from("#medium-flame", {duration: .15, opacity: 1}, "flicker22")
    //faint flame
    tl.from("#faint-flame", {duration: .25, opacity: 1}, "flicker1")
    tl.from("#faint-flame", {duration: .25, opacity:.65}, "flicker2")
    tl.from("#faint-flame", {duration: .25, opacity:.85}, "flicker3")
    tl.from("#faint-flame", {duration: .25, opacity:.2}, "flicker4")
    tl.from("#faint-flame", {duration: .25, opacity:.15}, "flicker5")
    tl.from("#faint-flame", {duration: .25, opacity:.90}, "flicker6")
    tl.from("#faint-flame", {duration: .25, opacity:.35}, "flicker7")
    tl.from("#faint-flame", {duration: .25, opacity:.55}, "flicker8")
    tl.from("#faint-flame", {duration: .25, opacity:.45}, "flicker9")
    tl.from("#faint-flame", {duration: .25, opacity:.65}, "flicker10")
    tl.from("#faint-flame", {duration: .25, opacity: 1}, "flicker11")
    tl.from("#medium-flame", {duration: .25, opacity: 1}, "flicker12")
    tl.from("#medium-flame", {duration: .25, opacity:.85}, "flicker13")
    tl.from("#medium-flame", {duration: .25, opacity:.2}, "flicker14")
    tl.from("#medium-flame", {duration: .25, opacity:.70}, "flicker15")
    //bright flame 
    tl.from("#bright-flame", {duration: .05, opacity: 1}, "flicker1")
    tl.from("#bright-flame", {duration: .05, opacity:.85}, "flicker2")
    tl.from("#bright-flame", {duration: .15, opacity:.2}, "flicker3")
    tl.from("#bright-flame", {duration: .10, opacity:.70}, "flicker4")
    tl.from("#bright-flame", {duration: .05, opacity:.15}, "flicker5")
    tl.from("#bright-flame", {duration: .05, opacity:.90}, "flicker6")
    tl.from("#bright-flame", {duration: .10, opacity:.55}, "flicker7")
    tl.from("#bright-flame", {duration: .15, opacity:.35}, "flicker8")
    tl.from("#bright-flame", {duration: .05, opacity:.65}, "flicker9")
    tl.from("#bright-flame", {duration: .05, opacity:.2}, "flicker10")
    tl.from("#bright-flame", {duration: .05, opacity: 1}, "flicker11")
    tl.from("#bright-flame", {duration: .10, opacity: 1}, "flicker12")
    tl.from("#bright-flame", {duration: .15, opacity:.85}, "flicker13")
    tl.from("#bright-flame", {duration: .15, opacity:.2}, "flicker14")
    tl.from("#bright-flame", {duration: .10, opacity:.70}, "flicker15")
    tl.from("#bright-flame", {duration: .05, opacity:.15}, "flicker16")
    tl.from("#bright-flame", {duration: .05, opacity:.90}, "flicker17")
    tl.from("#bright-flame", {duration: .15, opacity:.55}, "flicker18")
  
    //small flames flickering
    tl.from("#Vector_58", {duration: .6, opacity: 1}, "flicker1")
    tl.to("#Vector_58", {duration: .5, opacity: 0})
    tl.from("#Vector_60", {duration: .6, opacity: 1}, "flicker5")
    tl.to("#Vector_60", {duration: .5, opacity: 0})
    tl.from("#Vector_62", {duration: .5, opacity: 1}, "flicker9")
    tl.to("#Vector_62", {duration: .6, opacity: 0})
    tl.from("#Vector_65", {duration: .6, opacity: 1}, "flicker12")
    tl.to("#Vector_65", {duration: .5, opacity: 0})
    tl.from("#Vector_59", {duration: .5, opacity: 1}, "flicker14")
    tl.to("#Vector_59", {duration: .6, opacity: 0})
    tl.from("#Vector_63", {duration: .5, opacity: 1}, "flicker14")
    tl.to("#Vector_63", {duration: .5, opacity: 0})
    tl.from("#Vector_61", {duration: .6, opacity: 1}, "flicker15")
    tl.to("#Vector_61", {duration: .6, opacity: 0})
    tl.from("#Vector_64", {duration: .5, opacity: 1}, "flicker17")
    tl.to("#Vector_64", {duration: .6, opacity: 0})

    //smallest flame
    tl.from("#smallest-flame", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#smallest-flame", {duration: .15, opacity:.85}, "flicker2")
    tl.from("#smallest-flame", {duration: .15, opacity:.2}, "flicker3")
    tl.from("#smallest-flame", {duration: .15, opacity:.70}, "flicker4")
    tl.from("#smallest-flame", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#smallest-flame", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#smallest-flame", {duration: .15, opacity:.55}, "flicker7")
    tl.from("#smallest-flame", {duration: .15, opacity:.35}, "flicker8")
    tl.from("#smallest-flame", {duration: .15, opacity:.65}, "flicker9")
    tl.from("#smallest-flame", {duration: .15, opacity:.2}, "flicker10")
    tl.from("#smallest-flame", {duration: .15, opacity: 1}, "flicker11")
    tl.from("#smallest-flame", {duration: .15, opacity: 1}, "flicker12")
    tl.from("#smallest-flame", {duration: .15, opacity:.85}, "flicker13")
    tl.from("#smallest-flame", {duration: .15, opacity:.2}, "flicker14")
    tl.from("#smallest-flame", {duration: .15, opacity:.70}, "flicker15")
    tl.from("#smallest-flame", {duration: .15, opacity:.15}, "flicker16")
    tl.from("#smallest-flame", {duration: .15, opacity:.90}, "flicker17")
    tl.from("#smallest-flame", {duration: .15, opacity:.55}, "flicker18")
    tl.from("#smallest-flame", {duration: .15, opacity:.35}, "flicker19")
    tl.from("#smallest-flame", {duration: .15, opacity:.65}, "flicker20")
    tl.from("#smallest-flame", {duration: .15, opacity:.2}, "flicker21")
    tl.from("#smallest-flame", {duration: .15, opacity: 1}, "flicker22")
    tl.to("#smallest-flame", {duration: .15, opacity: 1}, "flicker22")

    //small candle lights flicker
    tl.from("#light", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker2")
    tl.from("#light", {duration: .15, opacity:.85}, "flicker3")
    tl.from("#light", {duration: .15, opacity:.2}, "flicker4")
    tl.from("#light", {duration: .15, opacity:.15}, "flicker5")
    tl.from("#light", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light", {duration: .15, opacity:.35}, "flicker7")
    tl.from("#light", {duration: .15, opacity:.55}, "flicker8")
    tl.from("#light", {duration: .15, opacity:.45}, "flicker9")
    tl.from("#light", {duration: .15, opacity:.65}, "flicker10")
    tl.from("#light", {duration: .15, opacity: 1}, "flicker11")
    
    //big candle lights flicker
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker1")
    tl.from("#light_2", {duration: .15, opacity:.55}, "flicker2")
    tl.from("#light_2", {duration: .15, opacity:.10}, "flicker3")
    tl.from("#light_2", {duration: .15, opacity:.40}, "flicker4")
    tl.from("#light_2", {duration: .15, opacity:.75}, "flicker5")
    tl.from("#light_2", {duration: .15, opacity:.90}, "flicker6")
    tl.from("#light_2", {duration: .15, opacity:.65}, "flicker7")
    tl.from("#light_2", {duration: .15, opacity:.25}, "flicker8")
    tl.from("#light_2", {duration: .15, opacity:.45}, "flicker9")
    tl.from("#light_2", {duration: .15, opacity:.15}, "flicker10")
    tl.from("#light_2", {duration: .15, opacity: 1}, "flicker11")

    //message

    tl.to("#Rectangle-9", {duration: .7, opacity: 1})
    tl.to("#seasons-greetings", {duration: .7, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#wishing", {duration: .7, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#your-friends", {duration: .7, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    tl.to("#logo", {duration: .7, opacity: 1, ease: "power1.In", stagger: {from: "edges", axis: "y"}})
    return tl;
}

mainTL.add(cabinscene())
mainTL.add(fireplacescene())

GSDevTools.create();
