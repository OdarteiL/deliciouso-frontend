import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { MdFoodBank } from "react-icons/md";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Navbar() {

  const [displayMenu, setDisplayMenu] = useState(false)
  
  const toggleMenu = () => {
    setDisplayMenu(!displayMenu)
  }

  return (
    <>
      <nav className="bg-black">
        <div className="h-[70px] w-full px-[3%] ">
          <section className="flex h-full w-full items-center justify-between ">
            <Link to={"/"}>
              <div className="flex text-white items-center justify-center gap-1">
                <MdFoodBank size={32} />
                <h2 className="font-bold">DELICIOUSO</h2>
              </div>
            </Link>
            <div className="flex text-white items-center gap-4 ">
              <ul className="hidden md:flex md:gap-4 lg:gap-4">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"/about"}>ABOUT</Link>
                </li>
                <li>
                  <Link to={"/contact"}>CONTACT</Link>
                </li>
                <li>
                  <Link to={"/menu"}>MENU</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>GALLERY</Link>
                </li>
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
              </ul>
              <div className="flex md:hidden lg:hidden" onClick={toggleMenu}>
                {!displayMenu ? <HiMenuAlt3 /> : <IoClose /> }
              </div>
              <div className="gap-4 hidden md:flex lg:flex">
                <div>
                  <Link>
                    <AiFillTwitterCircle />
                  </Link>
                </div>
                <div>
                  <Link>
                    <FaFacebook />
                  </Link>
                </div>
                <div>
                  <Link>
                    <RiInstagramFill />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className={displayMenu ? "px-[3%] py-3 flex items-center md:hidden lg:hidden" : "hidden"}>
          <ul className="flex flex-col text-white md:flex gap-2">
                <li>
                  <Link to={"/"}>HOME</Link>
                </li>
                <li>
                  <Link to={"/about"}>ABOUT</Link>
                </li>
                <li>
                  <Link to={"/contact"}>CONTACT</Link>
                </li>
                <li>
                  <Link to={"/menu"}>MENU</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>GALLERY</Link>
                </li>
                <li>
                  <Link to={"/faq"}>FAQ</Link>
                </li>
              </ul>
          </div>
      </nav>
    </>
  );
}

export default Navbar;
