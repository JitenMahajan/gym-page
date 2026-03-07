const footerLinks = [
    { id: "programs", label: "Programs" },
    { id: "classes", label: "Classes" },
    { id: "showcase", label: "Showcase" },
    { id: "stories", label: "Stories" },
];

const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 py-10 text-prose-secondary">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 items-start">
                    <div>
                        <h3 className="text-2xl font-display text-volt">ELITE</h3>
                        <p className="text-sm mt-3 max-w-xs">
                            Built for disciplined athletes who want visible results and sustainable progress.
                        </p>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-prose-secondary mb-3">Quick Links</p>
                        <ul className="grid grid-cols-2 gap-2 text-sm">
                            {footerLinks.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} className="hover:text-volt transition-colors">
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-prose-secondary mb-3">Contact</p>
                        <p className="text-sm">Phone: <a className="text-volt hover:text-white transition-colors" href="tel:6230348752">6230348752</a></p>
                        <p className="text-sm mt-2">Email: <a className="text-volt hover:text-white transition-colors" href="mailto:elite@gymstudio.com">elite@gymstudio.com</a></p>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-5 text-center text-xs tracking-wide">
                    (c) {new Date().getFullYear()} Elite Fitness. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
