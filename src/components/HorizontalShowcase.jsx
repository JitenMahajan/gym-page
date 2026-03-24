import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import strength from "../assets/images/strength.jpeg";
import training from "../assets/images/training.jpeg";
import workout from "../assets/images/workout.jpeg";
import dumbbell from "../assets/images/dumbell.jpeg";
import coach from "../assets/images/coach.jpg";

gsap.registerPlugin(ScrollTrigger);

const slides = [
    {
        id: "01",
        title: "Power",
        subtitle: "Heavy lifts. Clean form. Zero shortcuts.",
        image: strength,
    },
    {
        id: "02",
        title: "Speed",
        subtitle: "Conditioning blocks built for fight-level stamina.",
        image: training,
    },
    {
        id: "03",
        title: "Focus",
        subtitle: "Discipline in every rep and every session.",
        image: workout,
    },
    {
        id: "04",
        title: "Engine",
        subtitle: "Progressive overload with measurable progression.",
        image: dumbbell,
    },
    {
        id: "05",
        title: "Mindset",
        subtitle: "Coaching that keeps intensity and consistency high.",
        image: coach,
    },
];

const HorizontalShowcase = () => {
    const container = useRef();

    useGSAP(
        () => {
            const ctx = gsap.context(() => {
                const section = container.current;
                const track = section.querySelector(".nike-track");

                const getDistance = () => Math.max(1, track.scrollWidth - section.clientWidth);

                gsap.to(track, {
                    x: () => -getDistance(),
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${getDistance()}`,
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });
            }, container);

            return () => ctx.revert();
        },
        { scope: container }
    );

    return (
        <section id="showcase" ref={container} className="h-[92vh] md:min-h-[100svh] bg-black overflow-hidden flex flex-col">
            <div className="px-4 sm:px-6 md:px-10 pt-6 md:pt-10 pb-3 md:pb-5 shrink-0">
                <p className="text-[10px] sm:text-xs tracking-[0.22em] text-prose-secondary uppercase">Movement System</p>
                <h2 className="font-display uppercase text-3xl sm:text-4xl md:text-6xl text-volt mt-1 md:mt-2 leading-none">
                    Built Like a Brand
                </h2>
            </div>

            <div className="flex-1 overflow-hidden">
                <div className="nike-track h-full flex items-center gap-4 md:gap-8 px-4 sm:px-6 md:px-10 w-max">
                    {slides.map((slide) => (
                        <article
                            key={slide.id}
                            className="nike-panel relative w-[88vw] sm:w-[72vw] lg:w-[52vw] h-[60vh] md:h-[68vh] rounded-2xl overflow-hidden border border-white/10 shrink-0"
                        >
                            <img
                                src={slide.image}
                                alt={`${slide.title} training`}
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                            <div className="absolute bottom-0 left-0 p-5 md:p-8">
                                <p className="text-prose-secondary text-xs tracking-[0.2em] uppercase">{slide.id}</p>
                                <h3 className="font-display uppercase text-2xl sm:text-3xl md:text-4xl text-white mt-2">{slide.title}</h3>
                                <p className="text-prose-primary mt-2 max-w-md text-sm md:text-base">{slide.subtitle}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HorizontalShowcase;


