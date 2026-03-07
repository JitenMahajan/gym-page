import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import strength from "../assets/images/strength.jpeg";
import training from "../assets/images/training.jpeg";
import workout from "../assets/images/workout.jpeg";
import dumbbell from "../assets/images/dumbbell.jpeg";
import coach from "../assets/images/coach.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
    const container = useRef();

    const images = [strength, training, workout, dumbbell, coach];

    useGSAP(
        () => {
            const ctx = gsap.context(() => {
                gsap.from(".gallery-item", {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 80%",
                    },
                    y: 60,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power3.out",
                });
            }, container);

            return () => ctx.revert();
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-20 md:py-24 bg-black">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase text-volt">
                    Transformations
                </h2>

                <p className="text-prose-secondary mt-4 max-w-xl mx-auto">
                    Real results from disciplined training and consistent effort.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((src, i) => (
                    <div
                        key={src}
                        className="gallery-item relative overflow-hidden rounded-xl group"
                    >
                        <img
                            src={src}
                            alt={`Gym training result ${i + 1}`}
                            loading="lazy"
                            className="w-full h-[320px] md:h-[350px] object-cover transition duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                            <span className="text-white font-display uppercase tracking-wider text-sm">
                                View Result
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
