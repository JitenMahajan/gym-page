import { useEffect, useState } from "react";

const desktopLinks = [
    { id: "programs", label: "Programs" },
    { id: "classes", label: "Classes" },
    { id: "showcase", label: "Showcase" },
    { id: "contact", label: "Contact" },
];

const mobileLinks = [
    { id: "home", label: "Home" },
    { id: "programs", label: "Programs" },
    { id: "classes", label: "Classes" },
    { id: "contact", label: "Contact" },
];

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-0 w-full z-50">
            <nav
                className={`transition-all duration-300 ${
                    scrolled ? "bg-black/80 backdrop-blur-xl border-b border-white/10" : "bg-transparent"
                }`}
                aria-label="Primary"
            >
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    <div className="h-16 md:h-20 flex items-center justify-between">
                        <a href="#home" className="text-2xl font-display text-volt tracking-wide">
                            ELITE
                        </a>

                        <ul className="hidden md:flex items-center gap-8 font-sans text-sm uppercase">
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

                    <div className="md:hidden pb-3">
                        <ul className="flex items-center justify-between gap-1 rounded-full border border-white/15 bg-black/65 backdrop-blur-xl p-1.5 shadow-[0_12px_36px_rgba(0,0,0,0.45)]">
                            {mobileLinks.map((link) => (
                                <li key={link.id} className="flex-1">
                                    <a
                                        href={`#${link.id}`}
                                        className="block text-center rounded-full px-2 py-2 text-[11px] font-semibold uppercase tracking-wide text-prose-primary hover:bg-white/10 hover:text-volt transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
