import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import strength from "../assets/images/strength.jpeg";
import training from "../assets/images/training.jpeg";
import workout from "../assets/images/workout.jpeg";
import dumbbell from "../assets/images/dumbell.jpeg";

gsap.registerPlugin(ScrollTrigger);

const classesData = [
    {
        id: 1,
        title: "Strength",
        desc: "Build pure power with heavy compound movements and dedicated coaching.",
        image: strength,
    },
    {
        id: 2,
        title: "HIIT Cardio",
        desc: "Torch calories and build endurance with high-intensity intervals.",
        image: training,
    },
    {
        id: 3,
        title: "Combat",
        desc: "Learn striking and grappling fundamentals to build discipline and agility.",
        image: workout,
    },
    {
        id: 4,
        title: "Mobility",
        desc: "Enhance your recovery, flexibility, and joint health for peak performance.",
        image: dumbbell,
    },
];

const Classes = () => {
    const container = useRef();

    useGSAP(
        () => {
            gsap.from(".section-title", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(".class-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 80,
                opacity: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: "power3.out",
            });
        },
        { scope: container }
    );

    return (
        <section id="classes" ref={container} className="py-20 md:py-24 bg-obsidian text-prose-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="section-title text-4xl sm:text-5xl md:text-7xl font-display uppercase text-volt">
                        Coaching Classes
                    </h2>
                    <p className="section-title text-base md:text-lg text-prose-secondary mt-4 max-w-2xl mx-auto font-sans">
                        Choose your battle. We have a program designed to push your limits,
                        no matter your starting point.
                    </p>
                </div>

                <div className="classes-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {classesData.map((item) => (
                        <article
                            key={item.id}
                            className="class-card relative min-h-[360px] rounded-xl overflow-hidden border border-white/10 group"
                        >
                            <img
                                src={item.image}
                                alt={`${item.title} class`}
                                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/10"></div>

                            <div className="relative h-full p-6 flex flex-col justify-end">
                                <div className="h-10 w-10 bg-volt/20 text-volt flex items-center justify-center rounded-full mb-4 font-display border border-volt/20">
                                    {item.id}
                                </div>
                                <h3 className="text-2xl font-bold uppercase mb-2 text-white group-hover:text-volt transition-colors font-display">
                                    {item.title}
                                </h3>
                                <p className="text-prose-primary leading-relaxed font-sans">
                                    {item.desc}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Classes;

