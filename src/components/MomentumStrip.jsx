const stats = [
    { value: "12+", label: "Years Coaching" },
    { value: "4k", label: "Sessions Delivered" },
    { value: "97%", label: "Client Retention" },
    { value: "24/7", label: "Accountability" },
];

const MomentumStrip = () => {
    return (
        <section className="py-10 md:py-14 bg-gradient-to-r from-black via-[#111] to-black border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {stats.map((item) => (
                        <article key={item.label} className="rounded-xl bg-white/5 border border-white/10 p-4 md:p-5 text-center">
                            <p className="font-display text-3xl md:text-4xl text-volt leading-none">{item.value}</p>
                            <p className="text-xs md:text-sm uppercase tracking-[0.15em] text-prose-secondary mt-2">{item.label}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MomentumStrip;
