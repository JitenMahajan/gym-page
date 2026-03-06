import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.from(".hero-line", {
            y: 120,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
        });
    }, { scope: container });

    return (
        <section ref={container} className="relative h-screen overflow-hidden bg-obsidian">

            {/* Dummy gym video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-50"
            >
                <source
                    src="https://assets.mixkit.co/videos/preview/mixkit-man-doing-push-ups-at-the-gym-227-large.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="hero-line text-7xl md:text-9xl font-display uppercase">
                    Discipline
                </h1>

                <h1 className="hero-line text-7xl md:text-9xl font-display text-volt uppercase">
                    Builds Power
                </h1>

                <p className="hero-line mt-6 text-prose-secondary max-w-xl">
                    Strength isn't given. It's built every single day.
                </p>

                <button className="hero-line mt-10 bg-volt text-black font-bold px-10 py-4 rounded-full uppercase hover:scale-110 transition">
                    Train With Me
                </button>
            </div>
        </section>
    );
};

export default Hero;