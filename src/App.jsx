import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <main className="bg-obsidian text-prose-primary overflow-hidden">
            <Hero />
            <About />
            <Programs />
            <Gallery />
            <Contact />
            <Footer />
        </main>
    );
}

export default App;