import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const classesData = [
    { id: 1, title: 'Strength', desc: 'Build pure power with heavy compound movements and dedicated coaching.' },
    { id: 2, title: 'HIIT Cardio', desc: 'Torch calories and build endurance with high-intensity intervals.' },
    { id: 3, title: 'Combat', desc: 'Learn striking and grappling fundamentals to build discipline and agility.' },
    { id: 4, title: 'Mobility', desc: 'Enhance your recovery, flexibility, and joint health for peak performance.' },
];

const Classes = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".section-title", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".class-card", {
            scrollTrigger: {
                trigger: ".grid",
                start: "top 85%",
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        // Replaced bg-primary with bg-obsidian
        <section ref={container} className="py-24 bg-obsidian text-prose-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    {/* Replaced text-accent with text-volt and font-heading with font-display */}
                    <h2 className="section-title text-5xl md:text-7xl font-display uppercase text-volt">
                        Our Programs
                    </h2>
                    {/* Replaced text-white/70 with text-prose-secondary */}
                    <p className="section-title text-lg text-prose-secondary mt-4 max-w-2xl mx-auto font-sans">
                        Choose your battle. We have a program designed to push your limits, no matter your starting point.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {classesData.map((item) => (
                        <div
                            key={item.id}
                            className="class-card bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer group"
                        >
                            {/* Replaced accent colors with volt */}
                            <div className="h-12 w-12 bg-volt/20 text-volt flex items-center justify-center rounded-full mb-6 group-hover:bg-volt group-hover:text-obsidian transition-colors">
                                <span className="font-bold font-display">{item.id}</span>
                            </div>
                            <h3 className="text-2xl font-bold uppercase mb-3 text-prose-primary group-hover:text-volt transition-colors font-display">
                                {item.title}
                            </h3>
                            <p className="text-prose-secondary leading-relaxed font-sans">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Classes;