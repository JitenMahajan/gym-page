const Footer = () => {
    return (
        <footer className="bg-black py-10 text-center text-prose-secondary">
            <p className="font-sans">
                © {new Date().getFullYear()} Elite Fitness. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;