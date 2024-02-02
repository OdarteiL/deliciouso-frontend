import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className=" mt-[35%] md:mt-[20%] lg:mt-[8%] ">
        <div className="mb-[2%]">
          <h3 className=" italic text-2xl md:text-3xl ">Discover the Real</h3>
          <h1 className="font-bold text-[120px] md:[150px]  ">FOOD</h1>
          <p className=" text-justify md:w-[40%] lg:w-[30%] ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum optio
            doloribus laboriosam deleniti iusto mollitia quam perspiciatis
            repellendus unde reprehenderit, amet tempora qui dolores cumque.
          </p>
        </div>
        <div>
          <Link to={"/menu"}>
            <button className="text-yellow px-12 mr-8 py-3 rounded-3xl border border-solid border-white">Go</button>
          </Link>
          <Link>
            OR MORE INFO
          </Link>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
