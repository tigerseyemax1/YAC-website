import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  wrapper: '#smooth-wrapper',
  content: '#smooth-content',
})

export const animateForward1 = () => {
  gsap.to(".imageGSAP", {x:75, y:25}) 
}

export const animateBackward1 = () => {
  gsap.to(".imageGSAP", {x:-75, y:-25})
}
 
export const animateForward2 = () => {
  gsap.to(".img2", {x:75, y:25})
}
 
export const animateBackward2 = () => {
  gsap.to(".img2", {x:-75, y:-25}) 
}