import coach from "../assets/images/coach.jpg";
import training from "../assets/images/training.jpeg";
import workout from "../assets/images/workout.jpeg";

const featuredStory = {
    name: "Aarav S.",
    role: "Software Engineer",
    quote: "I lost 11kg in 5 months and gained real strength without burning out. The structure finally made training feel sustainable.",
    stat: "-11kg in 5 months",
    image: training,
};

const sideStories = [
    {
        name: "Neha K.",
        role: "Designer",
        quote: "The accountability changed everything. I stopped restarting and started building momentum.",
        stat: "5x weekly consistency",
        image: workout,
    },
    {
        name: "Vikram R.",
        role: "Founder",
        quote: "My posture, energy, and confidence improved more than I expected from training alone.",
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
                        A single section for trust, with one featured result and a lighter supporting column.
                    </p>
                </div>

                <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-6 lg:gap-8">
                    <article className="relative overflow-hidden rounded-[28px] border border-white/10 min-h-[480px]">
                        <img
                            src={featuredStory.image}
                            alt={`${featuredStory.name} transformation`}
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10"></div>

                        <div className="relative h-full flex flex-col justify-end p-6 md:p-8">
                            <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">
                                Featured Result
                            </p>
                            <h3 className="mt-3 max-w-xl text-3xl md:text-5xl font-display uppercase text-white leading-[0.95]">
                                "{featuredStory.quote}"
                            </h3>
                            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                                <div>
                                    <p className="font-semibold text-white">{featuredStory.name}</p>
                                    <p className="uppercase tracking-[0.14em] text-prose-secondary">{featuredStory.role}</p>
                                </div>
                                <span className="h-8 w-px bg-white/15" aria-hidden="true"></span>
                                <p className="uppercase tracking-[0.14em] text-volt">{featuredStory.stat}</p>
                            </div>
                        </div>
                    </article>

                    <div className="space-y-4">
                        {sideStories.map((story) => (
                            <article
                                key={story.name}
                                className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 md:p-6"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={story.image}
                                        alt={`${story.name} transformation`}
                                        className="h-12 w-12 rounded-full object-cover border border-white/20"
                                        loading="lazy"
                                    />
                                    <div>
                                        <h3 className="font-semibold text-white">{story.name}</h3>
                                        <p className="text-xs uppercase tracking-[0.14em] text-prose-secondary">
                                            {story.role}
                                        </p>
                                    </div>
                                </div>

                                <p className="mt-4 leading-relaxed text-prose-primary">"{story.quote}"</p>
                                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-prose-secondary">
                                    Result: <span className="text-volt">{story.stat}</span>
                                </p>
                            </article>
                        ))}

                        <article className="rounded-2xl border border-white/10 bg-volt/8 p-5 md:p-6">
                            <p className="text-xs uppercase tracking-[0.18em] text-prose-secondary">Why This Works</p>
                            <p className="mt-3 text-white leading-relaxed">
                                The site now uses fewer repeated card grids and separates each section by role:
                                offer, motion, classes, showcase, trust, contact.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
