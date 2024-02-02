import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <>
      <div>
        <div className=" w-full">
          <div className="bg-gray flex items-center justify-center h-[100px] text-white font-bold text-2xl mb-4">
            About Us
          </div>
          <div>
            <ul className="hidden mb-2  md:flex md:item-center md:justify-center md:gap-9 ">
              <Link>
                <li>who We are</li>
              </Link>
              <Link>
                <li>Our Services</li>
              </Link>{" "}
              <Link>
                <li>Our Chefs</li>
              </Link>{" "}
              <Link>
                <li>Our Customers</li>
              </Link>
              <Link>
                <li>Our Staff</li>
              </Link>{" "}
              <Link>
                <li>Get in Touch</li>
              </Link>{" "}
            </ul>
          </div>
          <hr className="hidden md:block" />
          <div>
            <div className="flex flex-col items-center justify-center px-4 my-12 md:grid grid-cols-3 gap-6 md:px-[15%]"  >
              <div>
              <h1 className="font-bold flex items-center justify-center">WHO WE ARE</h1>
              <div className="w-full h-[250px] md:h-[]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729499/ecommerce/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling_ldp8z2.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
              <div>
              <h1 className="font-bold flex items-center justify-center">OUR SERVICES</h1>
              <div className="w-full h-[250px]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706729499/ecommerce/top-view-mix-meat-snacks-with-french-fries-grilled-vegetables-salad-sauces-board_x4ztrp.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
              <div>
              <h1 className="font-bold flex items-center justify-center">OUR CHEFS</h1>
              <div className="w-full h-[250px] md:h-[]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706730348/ecommerce/confident-head-cook-standing-restaurant-professional-kitchen-with-arms-crossed-while-smiling-camera-sous-chef-wearing-cooking-uniform-while-preparing-ingredients-dinner-service_eqmtr5.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
              <div>
              <h1 className="font-bold flex items-center justify-center">OUR CUSTOMERS</h1>
              <div className="w-full h-[250px] md:h-[]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706731020/ecommerce/young-african-american-male-using-his-phone-while-dining-with-his-friends_soqtui.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
              <div>
              <h1 className="font-bold flex items-center justify-center">OUR STAFF</h1>
              <div className="w-full h-[250px] md:h-[]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706730348/ecommerce/confident-head-cook-standing-restaurant-professional-kitchen-with-arms-crossed-while-smiling-camera-sous-chef-wearing-cooking-uniform-while-preparing-ingredients-dinner-service_eqmtr5.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
              <div>
              <h1 className="font-bold flex items-center justify-center">GET IN TOUCH</h1>
              <div className="w-full h-[250px] md:h-[]">
                <img src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706731020/ecommerce/report-newsletter-update-subscribe-information_xtugpw.jpg" alt="restaurant" className="w-full h-full" />
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
