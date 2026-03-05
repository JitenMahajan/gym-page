const Contact = () => {
    return (
        <section className="py-24 bg-obsidian">
            <div className="max-w-3xl mx-auto px-4 text-center mb-12">
                <h2 className="text-6xl font-display uppercase text-volt">
                    Start Your Journey
                </h2>
            </div>

            <form className="max-w-3xl mx-auto px-4 space-y-6">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt"
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt"
                />
                <textarea
                    placeholder="Your Goal"
                    rows="5"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt"
                />

                <button className="w-full bg-volt text-obsidian font-bold py-4 rounded-lg hover:scale-105 transition">
                    Apply Now
                </button>
            </form>
        </section>
    );
};

export default Contact;