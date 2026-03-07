import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const container = useRef();

    useGSAP(() => {

        const ctx = gsap.context(() => {

            gsap.to(".scroll-text", {
                xPercent: -200,
                ease: "none",
                scrollTrigger: {
                    trigger: container.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 1,
                    pin: true,
                },
            });

        }, container);

        return () => ctx.revert();

    }, { scope: container });

    return (
        <section
            ref={container}
            className="relative h-[60vh] md:h-screen flex items-center overflow-hidden bg-obsidian"
        >

            {/* background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black"></div>

            {/* scrolling text */}
            <div className="relative w-full overflow-hidden">

                <h1 className="scroll-text whitespace-nowrap font-display uppercase text-volt text-[18vw] md:text-[12vw] leading-none tracking-wide">

                    TRAIN HARDER • BUILD POWER • STAY DISCIPLINED • TRAIN HARDER • BUILD POWER •

                </h1>

            </div>

        </section>
    );
};

export default ScrollSection;