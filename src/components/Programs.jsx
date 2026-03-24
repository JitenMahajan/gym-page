import strength from "../assets/images/strength.jpeg";
import workout from "../assets/images/workout.jpeg";
import coach from "../assets/images/coach.jpg";
import dumbbell from "../assets/images/dumbell.jpeg";

const programs = [
    {
        id: "01",
        title: "Strength Track",
        desc: "Heavy compound work, clean form, and progressive overload built for visible power.",
        image: strength,
    },
    {
        id: "02",
        title: "Fat Loss Track",
        desc: "Structured conditioning and smart volume so the results feel athletic, not random.",
        image: workout,
    },
    {
        id: "03",
        title: "Coaching Track",
        desc: "Personal accountability, weekly check-ins, and a plan that adapts with you.",
        image: coach,
    },
    {
        id: "04",
        title: "Mobility Track",
        desc: "Recovery-driven sessions that help you move better and train harder for longer.",
        image: dumbbell,
    },
];

const Programs = () => {
    return (
        <section id="programs" className="hidden md:block py-20 lg:py-24 bg-obsidian">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[0.95fr_1.25fr] gap-10 xl:gap-16 items-start">
                    <div className="lg:sticky lg:top-28">
                        <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Training Tracks</p>
                        <h2 className="mt-3 text-5xl xl:text-6xl font-display uppercase text-volt leading-none">
                            Choose The Right Lane
                        </h2>
                        <p className="mt-5 max-w-md text-base leading-relaxed text-prose-secondary">
                            This section stays on desktop only. On mobile, the flow moves straight into
                            classes so the experience stays lean and avoids repeating the same layout twice.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {programs.map((item) => (
                            <article
                                key={item.id}
                                className="group grid md:grid-cols-[160px_1fr_auto] items-center gap-5 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-5 hover:border-volt/35 hover:bg-white/[0.05] transition-colors"
                            >
                                <div className="relative overflow-hidden rounded-xl">
                                    <img
                                        src={item.image}
                                        alt={`${item.title} training`}
                                        className="h-28 w-full object-cover transition duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
                                </div>

                                <div>
                                    <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">{item.id}</p>
                                    <h3 className="mt-2 text-2xl font-display uppercase text-white">{item.title}</h3>
                                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-prose-secondary">
                                        {item.desc}
                                    </p>
                                </div>

                                <a
                                    href="#contact"
                                    className="justify-self-start md:justify-self-end rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.18em] text-prose-primary hover:border-volt hover:text-volt transition-colors"
                                >
                                    Join Track
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
