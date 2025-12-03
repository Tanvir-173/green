// import React from "react";

// const PlantOfTheWeek = () => {
//   const plant = {
//     name: "Snake Plant",
//     desc: "Known for purifying indoor air and thriving in low light.",
//     img: "snake-p.jpg"
//   };

//   return (
//     <section className="py-10 bg-green-50">
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-3xl font-bold mb-6 text-green-800"> Plant of the Week</h2>
//         <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
//           <img
//             src={plant.img}
//             alt={plant.name}
//             className="w-60 h-60 object-cover rounded-2xl shadow-lg"
//           />
//           <div className="text-left max-w-md">
//             <h3 className="text-2xl font-semibold">{plant.name}</h3>
//             <p className="mt-2 text-gray-700">{plant.desc}</p>
//             <button className="btn btn-success mt-4">Learn More</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PlantOfTheWeek;
import React from "react";
import { Link } from "react-router";

const PlantOfTheWeek = () => {
  const plant = {
    id: 1, // make sure this matches the plantId in your plant.json
    name: "Snake Plant",
    desc: "Known for purifying indoor air and thriving in low light.",
    img: "snake-p.jpg"
  };

  return (
    <section className="py-10 bg-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-green-800"> Plant of the Week</h2>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6">
          <img
            src={plant.img}
            alt={plant.name}
            className="w-60 h-60 object-cover rounded-2xl shadow-lg"
          />
          <div className="text-left max-w-md">
            <h3 className="text-2xl font-semibold">{plant.name}</h3>
            <p className="mt-2 text-gray-700">{plant.desc}</p>

            {/* Updated button with a valid route */}
            <Link to={`/plants/${plant.id}`}>
              <button className="btn btn-success mt-4 w-full">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
