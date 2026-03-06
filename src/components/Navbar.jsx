import { useEffect, useState } from "react";

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
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled ? "bg-black/80 backdrop-blur-md py-4" : "bg-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">

                <h1 className="text-2xl font-display text-volt">ELITE</h1>

                <ul className="hidden md:flex gap-8 font-sans text-sm uppercase">
                    <li className="hover:text-volt cursor-pointer">Programs</li>
                    <li className="hover:text-volt cursor-pointer">Classes</li>
                    <li className="hover:text-volt cursor-pointer">About</li>
                    <li className="hover:text-volt cursor-pointer">Contact</li>
                </ul>

                <button className="bg-volt text-black px-6 py-2 rounded-full font-bold hover:scale-105 transition">
                    Join
                </button>

            </div>
        </nav>
    );
};

export default Navbar;