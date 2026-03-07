import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import ScrollSection from "./components/ScrollSection";
import MomentumStrip from "./components/MomentumStrip";
import Classes from "./components/Classes";
import HorizontalShowcase from "./components/HorizontalShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

function App() {
    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:bg-volt focus:text-black focus:px-4 focus:py-2 focus:rounded"
            >
                Skip to content
            </a>

            <main id="main-content" className="bg-obsidian text-white pt-24 md:pt-0">
                <Navbar />
                <Hero />
                <Programs />
                <ScrollSection />
                <MomentumStrip />
                <Classes />
                <HorizontalShowcase />
                <Contact />
                <Footer />
                <BackToTop />
            </main>
        </>
    );
}

export default App;
