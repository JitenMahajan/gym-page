import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import heroVideo from "../assets/videos/hero-workout.mp4";

const Hero = () => {
    const container = useRef();

    useGSAP(
        () => {
            const ctx = gsap.context(() => {
                gsap.from(".hero-line", {
                    y: 80,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                });

                gsap.from(".scroll-indicator", {
                    opacity: 0,
                    y: 20,
                    delay: 1.5,
                    duration: 1,
                    repeat: -1,
                    yoyo: true,
                });
            }, container);

            return () => ctx.revert();
        },
        { scope: container }
    );

    return (
        <section
            id="home"
            ref={container}
            className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-obsidian"
        >
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
                aria-hidden="true"
            >
                <source src={heroVideo} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-6xl px-6 text-center">
                <h1 className="hero-line font-display uppercase text-5xl sm:text-6xl md:text-8xl leading-tight">
                    Discipline
                </h1>

                <h1 className="hero-line font-display uppercase text-5xl sm:text-6xl md:text-8xl text-volt leading-tight">
                    Builds Power
                </h1>

                <p className="hero-line mt-6 text-prose-secondary max-w-xl mx-auto text-sm sm:text-base md:text-lg">
                    Strength is not given. It is built through consistency, effort,
                    and relentless discipline.
                </p>

                <div className="hero-line mt-10 flex justify-center gap-4 flex-wrap">
                    <a
                        href="#contact"
                        className="bg-volt text-black font-bold px-8 py-3 rounded-full uppercase hover:scale-105 transition"
                    >
                        Start Training
                    </a>

                    <a
                        href="#programs"
                        className="border border-white/30 px-8 py-3 rounded-full uppercase hover:border-volt hover:text-volt transition"
                    >
                        View Programs
                    </a>
                </div>
            </div>

            <div className="scroll-indicator absolute bottom-8 flex flex-col items-center text-xs text-prose-secondary">
                <span>Scroll</span>
                <div className="w-[1px] h-6 bg-prose-secondary mt-2"></div>
            </div>
        </section>
    );
};

export default Hero;

