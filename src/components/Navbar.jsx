import { useEffect, useState } from "react";

const desktopLinks = [
    { id: "programs", label: "Programs" },
    { id: "classes", label: "Classes" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const mobileLinks = [
    { id: "home", label: "Home" },
    { id: "programs", label: "Programs" },
    { id: "classes", label: "Classes" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                    scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
                }`}
                aria-label="Primary"
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
                    <a href="#home" className="text-2xl font-display text-volt">
                        ELITE
                    </a>

                    <ul className="hidden md:flex gap-8 font-sans text-sm uppercase">
                        {desktopLinks.map((link) => (
                            <li key={link.id}>
                                <a href={`#${link.id}`} className="hover:text-volt transition-colors">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="hidden md:inline-flex bg-volt text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition"
                    >
                        Join
                    </a>
                </div>
            </nav>

            <nav
                className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50"
                aria-label="Mobile"
            >
                <ul className="flex items-center gap-1 p-1.5 rounded-full border border-white/15 bg-black/65 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
                    {mobileLinks.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                className="block rounded-full px-3 py-2 text-[11px] font-semibold uppercase tracking-wide text-prose-primary hover:bg-white/10 hover:text-volt transition-colors"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Navbar;
