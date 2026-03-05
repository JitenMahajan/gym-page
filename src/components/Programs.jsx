const programs = [
    { id: 1, title: "Strength", desc: "Heavy compound training for real power." },
    { id: 2, title: "Fat Loss", desc: "Burn fat, build lean muscle." },
    { id: 3, title: "Online Coaching", desc: "Personal plans & accountability." },
    { id: 4, title: "Mobility", desc: "Recover faster, train longer." },
];

const Programs = () => {
    return (
        <section className="py-24 bg-obsidian">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-6xl font-display uppercase text-volt">
                    Programs
                </h2>
                <p className="text-prose-secondary mt-4 font-sans">
                    Choose your path. Commit to growth.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {programs.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white/5 border border-white/10 p-8 rounded-xl hover:-translate-y-3 hover:shadow-[0_0_40px_rgba(204,255,0,0.2)] transition-all duration-500"
                    >
                        <div className="h-12 w-12 bg-volt/20 text-volt flex items-center justify-center rounded-full mb-6 font-display">
                            {item.id}
                        </div>
                        <h3 className="text-2xl font-display uppercase mb-4">
                            {item.title}
                        </h3>
                        <p className="text-prose-secondary font-sans">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Programs;