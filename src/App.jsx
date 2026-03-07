import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import MomentumStrip from "./components/MomentumStrip";
import Classes from "./components/Classes";
import HorizontalShowcase from "./components/HorizontalShowcase";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollSection from "./components/ScrollSection.jsx";

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
