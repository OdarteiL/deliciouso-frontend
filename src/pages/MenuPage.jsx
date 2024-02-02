import { useEffect, useState } from "react";

function MenuPage() {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BACKEND_URL)
      .then((response) => response.json())
      .then((data) => {
        setMenuData(data.menu);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, []);

  return (
    <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      {menuData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        menuData.map((food) => (
          <div
            key={food.id}
            className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <div className="w-full h-[80%] object-cover shadow-lg rounded-[20px]">
              <img
                src={food.url}
                alt={food.name}
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="text-lg font-bold text-black truncate block capitalize">
              <h1>{food.name}</h1>
              <p className="text-sm text-gray-600 cursor-auto ml-2">
                <small>${food.price}</small>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MenuPage;
