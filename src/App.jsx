import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Classes from "./components/Classes";
import ScrollSection from "./components/ScrollSection";
import HorizontalShowcase from "./components/HorizontalShowcase";
import About from "./components/About";
import TransformationSlider from "./components/TransformationSlider";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="bg-obsidian text-white pb-24 md:pb-0">
            <Navbar />
            <Hero />
            <Programs />
            <Classes />
            <ScrollSection />
            <HorizontalShowcase />
            <About />
            <TransformationSlider />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;

