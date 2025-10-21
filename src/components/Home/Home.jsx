import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ExpertCard from "../ExpertCard/ExpertCard";
import treeimg from "../../assets/image.png"
import { Link } from "react-router"
const Home = () => {
    const [plants, setPlants] = useState([]);

    useEffect(() => {
        fetch("/plant.json")
            .then((res) => res.json())
            .then((data) => {
                setPlants(data)
                console.log(data)
            })
            .catch((err) => console.error("Failed to load plants:", err));
    }, []);
    console.log(plants)

    const careTips = [
        { title: "Watering", description: "Water your plants 1-2 times per week depending on the species." },
        { title: "Sunlight", description: "Most indoor plants thrive in indirect sunlight." },
        { title: "Fertilizing", description: "Feed your plants once a month with organic fertilizer." },
    ];
    console.log(careTips)
    const experts = [
        { name: "Alice Green", image: "https://i.postimg.cc/expert1.png", specialty: "Air-Purifying Plants" },
        { name: "Brian Leaf", image: "https://i.postimg.cc/expert2.png", specialty: "Decorative Indoor Plants" },
        { name: "Clara Root", image: "https://i.postimg.cc/expert3.png", specialty: "Low-Maintenance Plants" },
    ];

    return (
        <div className="space-y-16">

            {/* Hero Section */}
            {/* 🌿 Hero Section */}
            <section className="relative w-full h-[400px] md:h-[500px]">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    className="h-full"
                >
                    <SwiperSlide className="h-full">
                        <div
                            className="bg-cover bg-center h-full flex items-center justify-center text-white"
                            style={{
                                backgroundImage:
                                    `url(${treeimg})`,
                            }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold bg-black bg-opacity-30 p-4 rounded">
                                Bring Nature Home
                            </h1>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="h-full">
                        <div
                            className="bg-cover bg-center h-full flex items-center justify-center text-white"
                            style={{
                                backgroundImage:
                                    `url(${treeimg})`,
                            }}
                        >
                            <h1 className="text-3xl md:text-5xl font-bold bg-black bg-opacity-30 p-4 rounded">
                                Indoor Plants, Happy Life
                            </h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

            {/* Top Rated Indoor Plants */}
            {/* 🌱 Top Rated Indoor Plants */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                    Top Rated Indoor Plants
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {plants
                        .sort((a, b) => b.rating - a.rating)
                        .map((plant) => (
                            <div
                                key={plant.plantId}
                                className="border rounded-lg p-4 hover:shadow-lg transition flex flex-col"
                            >
                                <img
                                    src={plant.image}
                                    alt={plant.plantName}
                                    className="w-full h-48 object-cover rounded-md mb-3"
                                />
                                <h3 className="font-semibold text-lg mb-1">{plant.plantName}</h3>
                                <p className="text-green-700 font-bold mb-1">${plant.price}</p>
                                <p className="text-yellow-500 mb-3">⭐ {plant.rating}</p>

                                <Link to={`/plants/${plant.plantId}`} className="mt-auto">
                                    <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-medium transition">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                </div>
            </section>


            {/* Plant Care Tips */}
            <section className="bg-green-50 py-12">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-8">Plant Care Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {careTips.map((tip, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow">
                                <h3 className="font-semibold text-lg mb-2 text-black">{tip.title}</h3>
                                <p className="text-black">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet Our Green Experts */}
            <section className="max-w-7xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center">Meet Our Green Experts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {experts.map((expert, idx) => (
                        <ExpertCard key={idx} expert={expert} />
                    ))}
                </div>
            </section>

            {/* Eco Decor Ideas */}
            <section className="bg-green-50 py-12">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">Eco Decor Ideas</h2>
                    <p className="text-gray-700">
                        Discover creative ways to style your space with indoor plants for a greener, healthier home.
                    </p>
                </div>
            </section>

        </div>
    );
};

export default Home;


