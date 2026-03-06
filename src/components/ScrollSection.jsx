import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollSection = () => {
    const container = useRef();

    useGSAP(() => {

        gsap.to(".scroll-text", {
            x: "-200%",
            scrollTrigger: {
                trigger: container.current,
                start: "top top",
                end: "+=2000",
                scrub: true,
                pin: true,
            },
        });

    });

    return (
        <section ref={container} className="h-screen flex items-center bg-obsidian overflow-hidden">

            <h1 className="scroll-text text-[12vw] whitespace-nowrap font-display uppercase text-volt">
                Train Harder • Build Power • Stay Disciplined •
            </h1>

        </section>
    );
};

export default ScrollSection;