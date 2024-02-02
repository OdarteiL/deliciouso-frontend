import { Link } from "react-router-dom";

function GalleryPage() {
  return (
    <div className="mb-[180px] md:mb-[100px] lg:mb-[200px]">
      <div className="bg-white dark:bg-gray-800 h-screen py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-black">
                Gallery
              </h2>
            </div>

            <Link
              to={"#"}
              className="inline-block rounded-lg border bg-white dark:bg-gray-700 dark:border-none px-4 py-2 text-center text-sm font-semibold text-gray-500 dark:text-gray-200 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base"
            >
              More
            </Link>
          </div>

          <div className="flex flex-col md:grid  gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
            <Link
              to={"#"}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729500/ecommerce/flat-lay-table-full-delicious-food-composition_sgkidf.jpg"
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Bouffe
              </span>
            </Link>

            <Link
              to={"#"}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729499/ecommerce/top-view-mix-meat-snacks-with-french-fries-grilled-vegetables-salad-sauces-board_x4ztrp.jpg"
                loading="lazy"
                alt="Photo by Magicle"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Fries
              </span>
            </Link>

            <Link
              to={"#"}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729499/ecommerce/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_ldp8z2.jpg"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Dinning Room
              </span>
            </Link>

            <Link
              to={"#"}
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
            >
              <img
                src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706482976/ecommerce/well-done-steak-homemade-potatoes_pc09p5.jpg"
                loading="lazy"
                alt="Photo by Lorenzo Herrera"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                Specials
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryPage;
