import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjgpeva";

const quickInfo = [
    { label: "Phone", value: "6230348752", href: "tel:6230348752" },
    { label: "Email", value: "elite@gymstudio.com", href: "mailto:elite@gymstudio.com" },
    { label: "Hours", value: "Mon-Sat 5AM - 10PM" },
];

const Contact = () => {
    const [status, setStatus] = useState("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setStatus("submitting");
        setErrorMessage("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (response.ok) {
                form.reset();
                setStatus("success");
                return;
            }

            const responseData = await response.json().catch(() => null);
            const message = responseData?.errors?.map((item) => item.message).join(" ")
                || "Could not submit right now. Please try again in a moment.";

            setErrorMessage(message);
            setStatus("error");
        } catch {
            setErrorMessage("Network issue while submitting. Please check your connection and try again.");
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="py-20 md:py-24 bg-obsidian">
            <div className="max-w-6xl mx-auto px-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-10">
                    <div className="text-center mb-10">
                        <p className="text-xs uppercase tracking-[0.2em] text-prose-secondary">Apply Today</p>
                        <h2 className="text-4xl md:text-6xl font-display uppercase text-volt mt-3">
                            Start Your Journey
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6 md:gap-8">
                        <form className="md:col-span-3 space-y-5" onSubmit={handleSubmit}>
                            <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                            <label htmlFor="name" className="sr-only">Your Name</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Your Name"
                                className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                                autoComplete="name"
                                required
                            />

                            <label htmlFor="email" className="sr-only">Your Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Your Email"
                                className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                                autoComplete="email"
                                required
                            />

                            <label htmlFor="goal" className="sr-only">Your Goal</label>
                            <textarea
                                id="goal"
                                name="goal"
                                placeholder="Your Goal"
                                rows="5"
                                className="w-full p-4 bg-black/35 border border-white/15 rounded-lg focus:outline-none focus:border-volt focus:ring-2 focus:ring-volt/50"
                                required
                            />

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full bg-volt text-obsidian font-bold py-4 rounded-lg hover:brightness-95 hover:scale-[1.01] transition disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {status === "submitting" ? "Sending..." : "Apply Now"}
                            </button>

                            {status === "success" && (
                                <p className="text-sm text-volt text-center" role="status" aria-live="polite">
                                    Request sent successfully. We will call you shortly.
                                </p>
                            )}

                            {status === "error" && (
                                <p className="text-sm text-red-400 text-center" role="alert" aria-live="polite">
                                    {errorMessage}
                                </p>
                            )}
                        </form>

                        <aside className="md:col-span-2 space-y-4">
                            {quickInfo.map((item) => (
                                <article key={item.label} className="rounded-xl border border-white/10 bg-black/25 p-4">
                                    <p className="text-xs uppercase tracking-[0.18em] text-prose-secondary">{item.label}</p>
                                    {item.href ? (
                                        <a href={item.href} className="text-lg text-volt hover:text-white transition-colors mt-2 inline-block">
                                            {item.value}
                                        </a>
                                    ) : (
                                        <p className="text-lg text-prose-primary mt-2">{item.value}</p>
                                    )}
                                </article>
                            ))}

                            <p className="text-sm text-prose-secondary leading-relaxed pt-2">
                                We respond quickly and help you choose the right plan based on your current level and goals.
                            </p>
                        </aside>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
