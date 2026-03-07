import coach from "../assets/images/coach.jpeg";
import training from "../assets/images/training.jpeg";
import workout from "../assets/images/workout.jpeg";

const stories = [
    {
        name: "Aarav S.",
        role: "Software Engineer",
        quote: "I lost 11kg in 5 months and gained real strength without burnout.",
        stat: "-11kg in 5 months",
        image: training,
    },
    {
        name: "Neha K.",
        role: "Designer",
        quote: "The coaching kept me accountable and made training a daily habit.",
        stat: "5x weekly consistency",
        image: workout,
    },
    {
        name: "Vikram R.",
        role: "Founder",
        quote: "My energy, posture, and confidence changed more than I expected.",
        stat: "+38% strength PR",
        image: coach,
    },
];

const Testimonials = () => {
    return (
        <section id="stories" className="py-20 md:py-24 bg-black border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="text-center mb-12 md:mb-14">
                    <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Social Proof</p>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-display uppercase text-volt mt-3">
                        Success Stories
                    </h2>
                    <p className="text-prose-secondary mt-4 max-w-2xl mx-auto">
                        Real people, measurable outcomes, and consistent execution.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {stories.map((story) => (
                        <article
                            key={story.name}
                            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={story.image}
                                    alt={`${story.name} transformation`}
                                    className="w-12 h-12 rounded-full object-cover border border-white/20"
                                    loading="lazy"
                                />
                                <div>
                                    <h3 className="font-semibold text-white">{story.name}</h3>
                                    <p className="text-xs uppercase tracking-[0.14em] text-prose-secondary">{story.role}</p>
                                </div>
                            </div>

                            <p className="text-volt mt-4 tracking-[0.2em] text-xs">*****</p>
                            <p className="text-prose-primary mt-3 leading-relaxed">"{story.quote}"</p>
                            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-prose-secondary">
                                Result: <span className="text-volt">{story.stat}</span>
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
