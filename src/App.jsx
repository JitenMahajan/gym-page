import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Classes from "./components/Classes";
import ScrollSection from "./components/ScrollSection";
import About from "./components/About";
import TransformationSlider from "./components/TransformationSlider";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="bg-obsidian text-white">
            <Navbar />
            <Hero />
            <Programs />
            <Classes />
            <ScrollSection />
            <About />
            <TransformationSlider />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;