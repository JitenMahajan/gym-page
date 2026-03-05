import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".hero-line", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power4.out",
    });
  }, { scope: container });

  return (
      <section ref={container} className="relative h-screen overflow-hidden bg-obsidian">
        <img
            src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61"
            alt="Gym"
            className="absolute inset-0 w-full h-full object-cover scale-110 opacity-40"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-obsidian" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="hero-line text-6xl md:text-8xl font-display uppercase">
            Work
          </h1>
          <h1 className="hero-line text-6xl md:text-8xl font-display uppercase text-volt">
            Hard
          </h1>
          <p className="hero-line mt-6 text-prose-secondary max-w-xl font-sans">
            Discipline builds strength. Strength builds confidence.
          </p>
          <button className="hero-line mt-10 bg-volt text-obsidian font-bold px-8 py-4 rounded-full uppercase hover:scale-105 transition">
            Start Now
          </button>
        </div>
      </section>
  );
};

export default Hero;