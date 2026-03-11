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
            className={`back-top-btn fixed right-4 bottom-4 md:right-6 md:bottom-6 z-40 h-12 w-12 rounded-full ${
                visible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-90 pointer-events-none"
            }`}
        >
            <span className="back-top-ring absolute inset-0 rounded-full" aria-hidden="true"></span>
            <span className="absolute inset-[2px] rounded-full bg-black/75 border border-white/20 backdrop-blur" aria-hidden="true"></span>

            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="back-top-arrow relative mx-auto h-5 w-5 text-volt"
                aria-hidden="true"
            >
                <path d="M12 19V5" />
                <path d="m6 11 6-6 6 6" />
            </svg>
        </button>
    );
};

export default BackToTop;
