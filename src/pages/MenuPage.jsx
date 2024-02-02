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
    <div className="grid grid-cols-3 gap-4 px-[10%]">
      {menuData.length === 0 ? (
        <p>Loading...</p>
      ) : (
        menuData.map((food) => (
          <div
            key={food.id}
            className="md:w-[400px] md:h-[300px] bg-black relative rounded-[20px] my-8 mx-8"
          >
            <div className="w-full h-[80%] object-cover shadow-lg rounded-[20px]">
              <img
                src={food.url}
                alt={food.name}
                className="w-full h-full rounded-t-lg"
              />
            </div>
            <div className="text-white my-2 mx-7">
              <h1>{food.name}</h1>
              <p>
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
