import { MdFoodBank } from "react-icons/md";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="md:flex justify-between p-10 dark:bg-black text-white ">
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
        <Link to={"#"} className="link link-hover">
          Branding
        </Link>
        <Link to={"#"} className="link link-hover">
          Design
        </Link>
        <Link to={"#"} className="link link-hover">
          Marketing
        </Link>
        <Link to={"#"} className="link link-hover">
          Advertisement
        </Link>
        </div>
      </div>
      <div className="mb-12">
        <h6 className="text-gray-600 font-bold uppercase mb-4 ">Company</h6>
        <div className="flex flex-col gap-4">
        <Link to={"/about"} className="link link-hover">
          About us
        </Link>
        <Link to={"/contact"} className="link link-hover">
          Contact
        </Link>
        <Link to={"#"} className="link link-hover">
          Our Chefs
        </Link>
        <Link to={"/about"} className="link link-hover">
          Press kit
        </Link>
        </div>
      </div>
      <nav className="mb-12">
        <h6 className="text-gray-600 font-bold uppercase mb-4 ">Legal</h6>
        <div className="flex flex-col gap-4">
        <Link to={"#"} className="link link-hover">
          Terms of use
        </Link>
        <Link to={"#"} className="link link-hover">
          Privacy policy
        </Link>
        <Link to={"#"} className="link link-hover">
          Cookie policy
        </Link>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
