const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-10 text-center text-prose-secondary">
            <div className="max-w-6xl mx-auto px-4">
                <p className="font-sans text-sm tracking-wide">
                    (c) {new Date().getFullYear()} Elite Fitness. Built for disciplined athletes.
                </p>
                <p className="font-sans text-sm mt-2">
                    Phone: <a className="text-volt hover:text-white transition-colors" href="tel:6230348752">6230348752</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
