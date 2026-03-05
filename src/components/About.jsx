const About = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
                <img
                    src="https://images.unsplash.com/photo-1599058917212-d750089bc07e"
                    alt="Coach"
                    className="rounded-2xl shadow-xl"
                />

                <div>
                    <h2 className="text-5xl font-display uppercase text-volt mb-6">
                        Built Through Discipline
                    </h2>
                    <p className="text-prose-secondary leading-relaxed font-sans mb-6">
                        I wasn’t born strong. I built it. Through pain, consistency,
                        and relentless focus. My mission is to help you unlock your
                        strongest version — physically and mentally.
                    </p>
                    <div className="border-l-4 border-volt pl-4 italic text-prose-primary">
                        “Growth begins where excuses end.”
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;