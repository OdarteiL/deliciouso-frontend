import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="md:flex justify-between p-10 dark:bg-black text-white ">
      <div className="mb-12">
        <Link>
          <div className="flex text-white items-center gap-1">
            <MdFoodBank size={32} />
            <h2 className="font-bold">DELICIOUSO</h2>
          </div>
        </Link>
        <p className="mt-3">
          Odartei Food Processing Ltd.
          <br />
          Providing authentic cuisines since 1992
        </p>
      </div>
      <div className="mb-12">
        <h6 className="text-gray-600 font-bold uppercase mb-4 ">Services</h6>
        <div className="flex flex-col gap-4">
        <Link to={"#"}>
          Branding
        </Link>
        <Link to={"#"}>
          Design
        </Link>
        <Link to={"#"}>
          Marketing
        </Link>
        <Link to={"#"}>
          Advertisement
        </Link>
        </div>
      </div>
      <div className="mb-12">
        <h6 className="text-gray-600 font-bold uppercase mb-4 ">Company</h6>
        <div className="flex flex-col gap-4">
        <Link to={"/about"}>
          About us
        </Link>
        <Link to={"/contact"}>
          Contact
        </Link>
        <Link to={"#"}>
          Our Chefs
        </Link>
        <Link to={"/about"}>
          Press kit
        </Link>
        </div>
      </div>
      <div className="mb-12">
        <h6 className="text-gray-600 font-bold uppercase mb-4 ">Legal</h6>
        <div className="flex flex-col gap-4">
        <Link to={"#"}>
          Terms of use
        </Link>
        <Link to={"#"}>
          Privacy policy
        </Link>
        <Link to={"#"}>
          Cookie policy
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
