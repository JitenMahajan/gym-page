import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const container = useRef();

    useGSAP(
        () => {
            const ctx = gsap.context(() => {
                gsap.to(".scroll-text", {
                    xPercent: -115,
                    ease: "none",
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top top",
                        end: "+=1400",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    },
                });
            }, container);

            return () => ctx.revert();
        },
        { scope: container }
    );

    return (
        <section
            id="ticker"
            ref={container}
            className="relative min-h-[72svh] md:min-h-[95svh] flex items-center overflow-hidden bg-obsidian"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black"></div>
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_50%,rgba(204,255,0,0.22),transparent_45%)]"></div>

            <div className="relative w-full overflow-hidden">
                <p className="text-center text-xs sm:text-sm uppercase tracking-[0.24em] text-prose-secondary mb-8">
                    Built By Consistency
                </p>

                <h2 className="scroll-text whitespace-nowrap font-display uppercase text-volt text-[15vw] sm:text-[12vw] md:text-[10vw] leading-none tracking-wide">
                    TRAIN HARDER * BUILD POWER * STAY DISCIPLINED * TRAIN HARDER * BUILD POWER *
                </h2>
            </div>
        </section>
    );
};

export default ScrollSection;
