import ContentSection from "../components/ContentSection";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";

function HomePage() {
  return (
    <>
      <div>
        <div className="w-full relative">
          <div className="w-full ">
            <img
              src="https://res.cloudinary.com/dlcqoiyb1/image/upload/v1706485841/ecommerce/grilled-chicken-steak-vegetables-dark-background_1_lpoll6.jpg"
              alt="food"
              className="w-full h-screen object-cover"
            />
          </div>
          <div className="absolute px-[3%] text-white top-0">
            <HeroSection />
          </div>
          <div>
            <InfoSection />
          </div>
          <div>
            <ContentSection />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
