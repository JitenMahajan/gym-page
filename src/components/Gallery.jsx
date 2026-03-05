const Gallery = () => {
    return (
        <section className="py-24 bg-black">
            <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-6xl font-display uppercase text-volt">
                    Transformations
                </h2>
            </div>

            <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-6">
                {[1,2,3,4,5,6].map((item) => (
                    <img
                        key={item}
                        src={`https://picsum.photos/500/600?random=${item}`}
                        className="rounded-xl hover:scale-105 transition duration-500 cursor-pointer"
                    />
                ))}
            </div>
        </section>
    );
};

export default Gallery;