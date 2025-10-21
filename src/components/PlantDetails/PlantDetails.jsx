import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-hot-toast"; // optional but nice


const PlantDetails = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedPlant = data.find((p) => p.plantId === parseInt(id));
        setPlant(selectedPlant);
      });
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success("Consultation booked successfully! 🌿");
  };

  if (!plant) return <p className="text-center mt-10">Loading plant details...</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Image and details */}
      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 h-96 object-cover rounded-lg"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{plant.plantName}</h2>
          <p className="text-gray-700 mb-4">{plant.description}</p>
          <p className="text-green-700 font-semibold text-lg mb-1">
            Price: ${plant.price}
          </p>
          <p className="text-yellow-500 mb-1">⭐ Rating: {plant.rating}</p>
          <p className="text-gray-600">Stock: {plant.stock}</p>
        </div>
      </div>

      {/* Book Consultation Form */}
      <div className="mt-10 bg-green-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold mb-4">Book Consultation</h3>
        <form onSubmit={handleBook} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />
          <div className="md:col-span-2">
            <button
              type="submit"
              className="btn btn-success w-full mt-4 text-white"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlantDetails;
