import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const scrollable = document.documentElement.scrollHeight - window.innerHeight;
            const percent = scrollable > 0 ? (scrollTop / scrollable) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, percent)));
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-white/5">
            <div
                className="h-full bg-gradient-to-r from-volt via-[#e5ff66] to-volt transition-[width] duration-150"
                style={{ width: `${progress}%` }}
                role="progressbar"
                aria-label="Page scroll progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress)}
            />
        </div>
    );
};

export default ScrollProgress;
