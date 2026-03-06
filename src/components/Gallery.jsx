import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Gallery = () => {

    const container = useRef();

    useGSAP(() => {
        gsap.from(".gallery-img", {
            scrollTrigger: {
                trigger: container.current,
                start: "top 80%",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
        });
    });

    const images = [
        "https://images.unsplash.com/photo-1579758629938-03607ccdbaba",
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
        "https://images.unsplash.com/photo-1518611012118-696072aa579a",
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e",
        "https://images.unsplash.com/photo-1605296867424-35fc25c9212a",
        "https://images.unsplash.com/photo-1549060279-7e168fcee0c2"
    ];

    return (
        <section ref={container} className="py-24 bg-black">

            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-6xl font-display uppercase text-volt">
                    Transformations
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">

                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        className="gallery-img rounded-xl hover:scale-105 transition duration-500"
                    />
                ))}

            </div>
        </section>
    );
};

export default Gallery;