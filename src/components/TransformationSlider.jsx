import strength from "../assets/images/strength.jpeg";
import training from "../assets/images/training.jpeg";

const TransformationSlider = () => {
    return (
        <section className="py-20 md:py-24 bg-black">
            <div className="max-w-6xl mx-auto px-4 text-center mb-12">
                <h2 className="text-5xl md:text-6xl font-display text-volt uppercase">
                    Transformation
                </h2>
                <p className="text-prose-secondary mt-4">
                    Real progress is built session by session. No gimmicks, just consistency.
                </p>
            </div>

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
                <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                        src={training}
                        alt="Before training"
                        className="w-full h-[320px] md:h-[420px] object-cover"
                        loading="lazy"
                    />
                    <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Before</p>
                        <h3 className="font-display uppercase text-2xl mt-2">Starting Point</h3>
                    </div>
                </article>

                <article className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                    <img
                        src={strength}
                        alt="After training"
                        className="w-full h-[320px] md:h-[420px] object-cover"
                        loading="lazy"
                    />
                    <div className="p-5">
                        <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">After</p>
                        <h3 className="font-display uppercase text-2xl mt-2 text-volt">Disciplined Result</h3>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default TransformationSlider;
