import {gsap} from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";


gsap.registerPlugin(GSDevTools, MotionPathPlugin, DrawSVGPlugin, MorphSVGPlugin);

gsap.set("#card",{ scale: .85, transformOrigin:"center"});
gsap.set(".colleges",{ opacity: 0, transformOrigin:"center"});




const mainTL = gsap.timeline()


GSDevTools.create();
MotionPathPlugin.create();
DrawSVGPlugin.create();
MorphSVGPlugin.create();