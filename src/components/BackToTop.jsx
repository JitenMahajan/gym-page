import { useEffect, useState } from "react";

const BackToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 500);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className={`fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 rounded-full border border-white/20 bg-black/70 backdrop-blur px-4 py-2 text-xs uppercase tracking-[0.16em] font-semibold text-prose-primary hover:border-volt hover:text-volt ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none"
            }`}
        >
            Top
        </button>
    );
};

export default BackToTop;
