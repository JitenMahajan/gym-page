const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-24 bg-obsidian">
            <div className="max-w-5xl mx-auto px-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-10">
                    <div className="text-center mb-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Apply Today</p>
                        <h2 className="text-4xl md:text-6xl font-display uppercase text-volt mt-3">
                            Start Your Journey
                        </h2>
                        <p className="text-prose-secondary mt-4">
                            Call us directly: <a className="text-volt hover:text-white transition-colors" href="tel:6230348752">6230348752</a>
                        </p>
                    </div>

                    <form className="max-w-3xl mx-auto space-y-5" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="name" className="sr-only">
                            Your Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                            autoComplete="name"
                            required
                        />

                        <label htmlFor="email" className="sr-only">
                            Your Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                            autoComplete="email"
                            required
                        />

                        <label htmlFor="goal" className="sr-only">
                            Your Goal
                        </label>
                        <textarea
                            id="goal"
                            placeholder="Your Goal"
                            rows="5"
                            className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                            required
                        />

                        <button className="w-full bg-volt text-obsidian font-bold py-4 rounded-lg hover:brightness-95 hover:scale-[1.01] transition">
                            Apply Now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
