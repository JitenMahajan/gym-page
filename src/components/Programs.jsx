import strength from "../assets/images/strength.jpeg";
import workout from "../assets/images/workout.jpeg";
import coach from "../assets/images/coach.jpeg";
import dumbbell from "../assets/images/dumbbell.jpeg";

const programs = [
    {
        id: 1,
        title: "Strength",
        desc: "Heavy compound training for real power.",
        image: strength,
    },
    {
        id: 2,
        title: "Fat Loss",
        desc: "Burn fat, build lean muscle.",
        image: workout,
    },
    {
        id: 3,
        title: "Online Coaching",
        desc: "Personal plans and accountability.",
        image: coach,
    },
    {
        id: 4,
        title: "Mobility",
        desc: "Recover faster, train longer.",
        image: dumbbell,
    },
];

const Programs = () => {
    return (
        <section id="programs" className="py-20 md:py-24 bg-obsidian">
            <div className="max-w-7xl mx-auto px-4 text-center mb-14">
                <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Training Paths</p>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase text-volt mt-3">Programs</h2>
                <p className="text-prose-secondary mt-4 font-sans max-w-xl mx-auto">
                    Choose your path. Commit to growth.
                </p>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {programs.map((item) => (
                    <article
                        key={item.id}
                        className="group rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.02] hover:border-volt/40 hover:-translate-y-2 transition-all duration-500"
                    >
                        <div className="relative">
                            <img
                                src={item.image}
                                alt={`${item.title} program`}
                                className="w-full h-44 object-cover transition duration-700 group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent"></div>
                        </div>

                        <div className="p-6">
                            <div className="h-10 w-10 bg-volt/20 text-volt flex items-center justify-center rounded-full mb-4 font-display border border-volt/20">
                                {item.id}
                            </div>
                            <h3 className="text-2xl font-display uppercase mb-3">{item.title}</h3>
                            <p className="text-prose-secondary font-sans mb-5">{item.desc}</p>
                            <a href="#contact" className="text-xs uppercase tracking-[0.18em] text-volt hover:text-white transition-colors">
                                Start Now
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Programs;
