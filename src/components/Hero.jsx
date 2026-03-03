import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    // Reveal text when page loads
    gsap.from(".hero-text", { 
      y: 100, 
      opacity: 0, 
      duration: 1, 
      stagger: 0.2 
    });

    // Parallax effect on the background video
    gsap.to(".bg-video", {
      scrollTrigger: {
        trigger: ".bg-video",
        start: "top top",
        end: "bottom top",
        scrub: true
      },
      y: 150
    });
  }, { scope: container }); // Scoping prevents GSAP from searching the whole DOM

  return (
    <div ref={container} className="relative h-screen overflow-hidden">
      <video className="bg-video absolute inset-0 w-full h-full object-cover" src="/gym-promo.mp4" muted loop autoPlay playsInline />
      <div className="absolute inset-0 bg-primary/70"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="hero-text text-8xl md:text-9xl font-heading uppercase text-accent">Work</h1>
        <h1 className="hero-text text-8xl md:text-9xl font-heading uppercase text-accent">Hard</h1>
        <p className="hero-text text-lg md:text-xl text-white/80 mt-4">Transform Your Body, Transform Your Life</p>
      </div>
    </div>
  );
};

export default Hero;
