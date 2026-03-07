import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import ScrollSection from "./components/ScrollSection";
import MomentumStrip from "./components/MomentumStrip";
import Classes from "./components/Classes";
import HorizontalShowcase from "./components/HorizontalShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="bg-obsidian text-white pt-24 md:pt-0">
            <Navbar />
            <Hero />
            <Programs />
            <ScrollSection />
            <MomentumStrip />
            <Classes />
            <HorizontalShowcase />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;
