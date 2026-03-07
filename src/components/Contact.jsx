const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-obsidian">
            <div className="max-w-3xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl md:text-6xl font-display uppercase text-volt">
                    Start Your Journey
                </h2>
            </div>

            <form className="max-w-3xl mx-auto px-4 space-y-6" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="name" className="sr-only">
                    Your Name
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
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
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
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
                    className="w-full p-4 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                    required
                />

                <button className="w-full bg-volt text-obsidian font-bold py-4 rounded-lg hover:scale-105 transition">
                    Apply Now
                </button>
            </form>
        </section>
    );
};

export default Contact;


