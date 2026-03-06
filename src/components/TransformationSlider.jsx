import { useState } from "react";

const TransformationSlider = () => {

    const [position, setPosition] = useState(50);

    return (
        <section className="py-24 bg-black">

            <h2 className="text-center text-6xl font-display text-volt mb-16">
                Transformation
            </h2>

            <div className="max-w-3xl mx-auto relative">

                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                    className="w-full rounded-xl"
                />

                <div
                    className="absolute top-0 left-0 h-full overflow-hidden"
                    style={{ width: `${position}%` }}
                >
                    <img
                        src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
                        className="w-full rounded-xl"
                    />
                </div>

                <input
                    type="range"
                    min="0"
                    max="100"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    className="absolute bottom-[-40px] w-full"
                />

            </div>

        </section>
    );
};

export default TransformationSlider;