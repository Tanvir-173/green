// import React from "react";
// import plantBg from "../../assets/pexels-akilmazumder-1072824.jpg"; 
// import "./plant.css"

// const Plant = () => {
//   return (
//     <div
//       className="min-h-screen w-full bg-center bg-cover flex items-center justify-center"
//       style={{ backgroundImage: `url(${plantBg})` }}
//     >
//       <h1 className="text-white text-4xl font-bold playwrite-de-sas-regular">
//         Welcome to the Plants Page
//       </h1>
//     </div>
//   );
// };

// export default Plant;
import { useEffect, useState } from "react";
import "./plant.css";

const Plant = () => {
  const [plants, setPlants] = useState([]);
  const [displayPlants, setDisplayPlants] = useState([]);

  const [sortOrder, setSortOrder] = useState("asc");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [searchText, setSearchText] = useState("");

  const [categories, setCategories] = useState([]);

  // Fetch real data from plant.json
  useEffect(() => {
    fetch("/plant.json")
      .then((res) => res.json())
      .then((data) => {
        setPlants(data);
        setDisplayPlants(data);

        // Extract unique categories dynamically
        const uniqueCats = [...new Set(data.map((item) => item.category))];
        setCategories(uniqueCats);
      })
      .catch((err) => console.error("Failed to load plants:", err));
  }, []);

  // Sorting logic
  useEffect(() => {
    let sorted = [...displayPlants].sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );
    setDisplayPlants(sorted);
  }, [sortOrder]);

  // Filtering logic
  const applyFilters = (category, searchValue) => {
    let filtered = plants;

    // Filter by category
    if (category !== "all") {
      filtered = filtered.filter((item) => item.category === category);
    }

    // Search by plant name
    if (searchValue.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.plantName.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setDisplayPlants(filtered);
  };

  const handleCategoryChange = (category) => {
    setCategoryFilter(category);
    applyFilters(category, searchText);
  };

  const handleSearch = (text) => {
    setSearchText(text);
    applyFilters(categoryFilter, text);
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 pb-10">

      {/* PAGE HEADER */}
      <div className="py-10 bg-green-700 text-center">
        <h1 className="text-4xl font-bold text-white">All Plants Collection</h1>
      </div>

      <div className="max-w-7xl mx-auto px-4">

        {/* SORT, FILTER, SEARCH */}
        <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-4">

          {/* Category Filter */}
          <select
            className="select select-bordered w-full md:w-52"
            value={categoryFilter}
            onChange={(e) => handleCategoryChange(e.target.value)}
          >
            <option value="all">All Categories</option>
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search plant name..."
            className="input input-bordered w-full md:w-64"
            value={searchText}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {/* Sorting */}
          <select
            className="select select-bordered w-full md:w-52"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* PLANTS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayPlants.map((plant) => (
            <div
              key={plant.plantId}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition p-4 flex flex-col"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-52 object-cover rounded-md mb-3"
              />

              <h2 className="text-lg font-semibold">{plant.plantName}</h2>
              <p className="text-green-700 font-bold mt-1">৳ {plant.price}</p>
              <p className="text-sm text-gray-500 mt-1">{plant.category}</p>

              <a href={`/plants/${plant.plantId}`} className="mt-auto">
                <button className="btn btn-success btn-sm w-full mt-4">
                  View Details
                </button>
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Plant;
