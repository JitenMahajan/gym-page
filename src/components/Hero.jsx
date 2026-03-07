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
                    stagger: 0.18,
                    ease: "power3.out",
                });

                gsap.from(".scroll-indicator", {
                    opacity: 0,
                    y: 20,
                    delay: 1.2,
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

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black/85"></div>

            <div className="relative z-10 max-w-6xl px-4 sm:px-6 text-center">
                <p className="hero-line text-xs sm:text-sm uppercase tracking-[0.25em] text-prose-secondary">
                    Elite Performance Studio
                </p>

                <h1 className="hero-line mt-3 font-display uppercase text-5xl sm:text-6xl md:text-8xl leading-[0.95]">
                    Discipline
                </h1>

                <h1 className="hero-line font-display uppercase text-5xl sm:text-6xl md:text-8xl text-volt leading-[0.95]">
                    Builds Power
                </h1>

                <p className="hero-line mt-6 text-prose-secondary max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
                    Strength is not given. It is built through consistency, effort,
                    and relentless discipline.
                </p>

                <div className="hero-line mt-9 flex justify-center gap-3 sm:gap-4 flex-wrap">
                    <a
                        href="#contact"
                        className="bg-volt text-black font-bold px-7 sm:px-8 py-3 rounded-full uppercase hover:scale-105 transition"
                    >
                        Start Training
                    </a>

                    <a
                        href="#programs"
                        className="border border-white/30 bg-black/25 backdrop-blur-sm px-7 sm:px-8 py-3 rounded-full uppercase hover:border-volt hover:text-volt transition"
                    >
                        View Programs
                    </a>
                </div>

                <div className="hero-line mt-10 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto">
                    <div className="rounded-xl border border-white/15 bg-black/35 backdrop-blur p-3">
                        <p className="font-display text-2xl sm:text-3xl text-volt leading-none">4k+</p>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-prose-secondary mt-1">Sessions</p>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-black/35 backdrop-blur p-3">
                        <p className="font-display text-2xl sm:text-3xl text-volt leading-none">12+</p>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-prose-secondary mt-1">Years</p>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-black/35 backdrop-blur p-3">
                        <p className="font-display text-2xl sm:text-3xl text-volt leading-none">24/7</p>
                        <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] text-prose-secondary mt-1">Support</p>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator absolute bottom-6 flex flex-col items-center text-xs text-prose-secondary">
                <span>Scroll</span>
                <div className="w-[1px] h-6 bg-prose-secondary mt-2"></div>
            </div>
        </section>
    );
};

export default Hero;
