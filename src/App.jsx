import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import ScrollSection from "./components/ScrollSection";
import Classes from "./components/Classes";
import HorizontalShowcase from "./components/HorizontalShowcase";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";

function App() {
    return (
        <>
            <ScrollProgress />
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[80] focus:bg-volt focus:text-black focus:px-4 focus:py-2 focus:rounded"
            >
                Skip to content
            </a>

            <main id="main-content" className="bg-obsidian text-white pt-24 md:pt-0">
                <Navbar />
                <Hero />
                <Programs />
                <ScrollSection />
                <Classes />
                <HorizontalShowcase />
                <Testimonials />
                <Contact />
                <Footer />
                <BackToTop />
            </main>
        </>
    );
}

export default App;
