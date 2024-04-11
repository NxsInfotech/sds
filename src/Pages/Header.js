import Flag from "country-flag-icons/react/3x2/US";
import Flagfr from "country-flag-icons/react/3x2/FR";
import Flagsp from "country-flag-icons/react/3x2/ES";
import React, { useState } from "react";
import { FaSortDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import icon from "../Asserts/iCloth-Logo_Site_133x.png";
import { IoMdArrowDropright } from "react-icons/io";
import { IoChevronUp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
const Header = () => {
  const [show, setShow] = useState(false);
  const [uses, setUses] = useState(false);
  const [products, setProducts] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const handleMouseEnter = (subMenuIndex) => {
    setActiveSubMenu(subMenuIndex);
  };
  const isactive = false;

  const handleMouseLeave = () => {
    setActiveSubMenu(null);
  };
  const hovertoshow = () => {
    setShow(true);
  };

  const hovertohide = () => {
    setShow(false);
  };
  const hovertoshowuses = () => {
    setUses(true);
  };
  const hovertohideuses = () => {
    setUses(false);
  };
  const hovertoshowPRODUCTS = () => {
    setProducts(true);
  };
  const hovertohidePRODUCTS = () => {
    setProducts(false);
  };
  return (
    <header className="h-auto md:h-[200px] lg:h-[200px] xl:h-[200px]  w-full ">
      <main className=" mx-auto h-full bg-white ">
        <div className="h-[50px] w-full bg-[#009ad4] ">
          <div className="max-w-[1605px] mx-auto h-full flex justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between items-center">
            <div
              className=" font-bold flex items-center text-white relative pl-10 text-sm     "
              onMouseEnter={hovertoshow}
              onMouseLeave={hovertohide}
            >
              <span className="flex items-center gap-1 mr-2  ">
                <Flag countryCode={"US"} className="w-4 h-4" />
                <Flagfr countryCode={"FR"} className="w-4 h-4" />
                <Flagsp countryCode={"SP"} className="w-4 h-4" />
              </span>
              Do you need help?
              <FaSortDown />
              {show ? (
                <ul className="absolute top-5 left-16 bg-white  w-[170px] z-10  ">
                  <a href="https://icloth.io/pages/contact">
                    <li className="pl-5 pr-6 py-2   text-start  text-gray-500 text-md flex-nowrap align-middle font-bold hover:text-white hover:bg-[#009ad4] ">
                      Contact Info
                    </li>
                  </a>
                  <a href="https://icloth.io/pages/faqs">
                    <li className="pl-5 pr-6 py-2  text-start  text-gray-500 text-md flex-nowrap align-middle font-bold hover:text-white hover:bg-[#009ad4] ">
                      FAQs
                    </li>
                  </a>
                  <a href="https://icloth.io/pages/icloth-site-feedback-from">
                    <li className="pl-5  py-2  text-start text-gray-500 text-md flex-nowrap align-middle font-bold hover:text-white hover:bg-[#009ad4] ">
                      Give Us Feedback
                    </li>
                  </a>
                </ul>
              ) : (
                ""
              )}
            </div>
            <div class="text-white font-bold text-sm  hidden sm:hidden md:block lg:block xl:block">
              SIGN UP FOR OUR NEWSLETTER & RECEIVE 10% OFF YOUR FIRST ORDER
            </div>

            <div className="text-white  font-bold flex items-center gap-3 pr-10 text-sm hidden   sm:hidden md:block lg:block xl:block">
              CONNECT WITH US :{" "}
              <a
                href="https://www.facebook.com/iclothcleaningwipes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/i/flow/login?redirect_after_login=%2FiClothWipes"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>
        {/* Start  mobile devices */}
        <div className="h-[60px] flex  sm:flex items-center justify-between md:hidden lg:hidden xl:hidden px-10  ">
          <div className=" flex items-center">
            <FaBars className="text-[#009ad4] " size={30} />
            <a
              href="https://icloth.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={icon}
                alt="icon"
                className="w-auto h-[50px] object-cover pl-8"
              />
            </a>
          </div>

          <div className="">
            <FaShoppingCart className="text-[#009ad4]" size={30} />
          </div>
        </div>
        {/* End  mobile devices */}
        <div className="h-auto md:h-[90px] w-full   bg-white shadow-black drop-shadow ">
          <div className="max-w-[1605px] h-full   flex justify-evenly   items-center  ">
            <div className=" ">
              <a
                href="https://icloth.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={icon}
                  alt="icon"
                  className="object-fill hidden sm:hidden md:block lg:block xl:block  "
                />
              </a>
            </div>
            <div className="flex items-start  w-full sm:w-full  md:w-[45%] lg:w-[45%] xl:w-[45%] ">
              <input
                type="text"
                className="   pl-2 py-2 border rounded-l-md w-full"
                placeholder="Search..."
                alt="search"
              />
              <button className="bg-[#009ad4] px-2 py-3.5">
                <FaSearch className="text-white text-sm " />
              </button>
            </div>
            <div className="hidden items-center   sm:hidden md:flex lg:flex xl:flex  ">
              <button className=" border-[#009ad4] border-2  text-[#009ad4] px-3 py-1 rounded-lg text-xl flex items-center ">
                <a
                  href="https://icloth.io/cart"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2   w-full"
                >
                  <FaShoppingCart /> My Cart (0)
                </a>
              </button>
              <button className="text-[#009ad4] text-lg font-medium ml-2">
                {" "}
                <a
                  href="https://icloth.io/account/login?return_url=%2Faccount"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In /Register
                </a>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[60px] bg-white  shadow-xl  shadow-black hidden sm:hidden md:block lg:block xl:block ">
          <ul className="flex justify-center items-center  gap-5 font-semibold  text-[16px] text-gray-700 ">
            <li
              className="cursor-pointer flex items-center gap-1 relative h-[60px] "
              onMouseEnter={hovertoshowuses}
              onMouseLeave={hovertohideuses}
            >
              USES
              {uses ? <IoChevronDown /> : <IoChevronUp />}
              {uses ? (
                <div className=" absolute bg-white w-80   top-[58px] grid grid-cols-2 border transition-opacity duration-500 opacity-100">
                  <div className="">
                    <p className="p-4 text-start">What</p>
                    <ul>
                      <a
                        href="https://icloth.io/products/icloth-70-isopropyl-alcohol-cleaning-wipes-for-personal-devices-surfaces-clean-all-kinds-of-electronics-and-sensitive-surfaces-pharmaceutical-grade-formula-lint-free-cloth"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer text-xs p-2 flex items-center gap-2">
                          <IoMdArrowDropright />
                          LARGE NON-POROUS SURFACES
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/products/icloth-70-isopropyl-alcohol-cleaning-wipes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer text-xs p-2 flex items-center gap-2">
                          <IoMdArrowDropright />
                          PERSONAL DEVICES UP TO 32"
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/products/icloth-xl-screen-and-multi-surface-cleaning-wipes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer text-xs p-2 flex items-center gap-2">
                          <IoMdArrowDropright />
                          LARGE SENSITIVE SURFACES
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/products/icloth-large-screen-cleaning-wipes"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer text-xs p-2 flex items-center gap-2">
                          <IoMdArrowDropright /> SENSITIVE ELECTRONICS UP TO 32"
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/products/icloth-lens-and-screen-cleaner"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer text-xs p-2 flex items-center gap-2">
                          <IoMdArrowDropright /> EYEWEAR AND CAMERA LENSES
                        </li>
                      </a>
                    </ul>
                  </div>
                  <div>
                    <p className="p-4 text-start">Where</p>
                    <ul>
                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright /> AT HOMES
                        </li>
                      </a>

                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright /> AT WORK
                        </li>
                      </a>

                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright />
                          ON-THE-GO
                        </li>
                      </a>

                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright />
                          IN EDUCATION
                        </li>
                      </a>

                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright />
                          IN AVIATION
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright />
                          IN HOSPITAL
                        </li>
                      </a>
                      <a
                        href="https://icloth.io/pages/discover"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 text-xs p-2">
                          <IoMdArrowDropright />
                          DISCOVER MORE
                        </li>
                      </a>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="animated-menu absolute bg-white w-80  top-[58px] grid grid-cols-2 border transition-opacity duration-300 opacity-0"></div>
              )}
            </li>

            <li
              className="cursor-pointer flex items-center gap-1 relative h-[60px] "
              onMouseEnter={hovertoshowPRODUCTS}
              onMouseLeave={hovertohidePRODUCTS}
            >
              PRODUCTS
              {products ? <IoChevronDown /> : <IoChevronUp />}
              {products ? (
                <div className=" absolute bg-white w-96   top-[58px]  border transition-opacity duration-500 opacity-100">
                  <div className="">
                    <ul>
                      <li
                        className="hover:bg-gray-200 cursor-pointer p-2 flex items-center justify-between gap-2 relative"
                        onMouseEnter={() => handleMouseEnter(1)}
                        onMouseLeave={handleMouseLeave}
                      >
                        70% ISOPROPYL ALCOHOL FORMULA
                        <IoMdArrowDropright />
                        {activeSubMenu === 1 && (
                          <ul
                            className="submenu absolute top-0.5 left-96 bg-white w-48"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <a href="https://icloth.io/products/icloth-70-isopropyl-alcohol-cleaning-wipes-for-personal-devices-surfaces-clean-all-kinds-of-electronics-and-sensitive-surfaces-pharmaceutical-grade-formula-lint-free-cloth">
                              <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2 p-2 ">
                                <IoMdArrowDropright />
                                XL WIPES
                              </li>
                            </a>
                            <a
                              href="https://icloth.io/products/icloth-70-isopropyl-alcohol-cleaning-wipes"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2  p-2">
                                <IoMdArrowDropright />
                                LARGE WIPES
                              </li>
                            </a>
                          </ul>
                        )}
                      </li>
                      <li
                        className="hover:bg-gray-200 cursor-pointer p-2 flex items-center justify-between gap-2 relative"
                        onMouseEnter={() => handleMouseEnter(2)}
                        onMouseLeave={handleMouseLeave}
                      >
                        PREMIUM SCREEN CLEANING FORMULA
                        <IoMdArrowDropright />
                        {activeSubMenu === 2 && (
                          <ul className="submenu absolute top-0.5 left-96 bg-white w-48">
                            <a
                              href="https://icloth.io/products/icloth-xl-screen-and-multi-surface-cleaning-wipes"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2  p-2">
                                <IoMdArrowDropright />
                                XL WIPES
                              </li>
                            </a>

                            <a
                              href="https://icloth.io/products/icloth-large-screen-cleaning-wipes"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2  p-2">
                                <IoMdArrowDropright />
                                LARGE WIPES
                              </li>
                            </a>
                            <a
                              href="https://icloth.io/products/icloth-lens-and-screen-cleaner"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <li className="hover:bg-gray-200 cursor-pointer flex items-center gap-2  p-2">
                                <IoMdArrowDropright />
                                SMALL WIPES
                              </li>
                            </a>
                          </ul>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
                <div className="animated-menu absolute bg-white w-80  top-[58px] grid grid-cols-2 border transition-opacity duration-300 opacity-0"></div>
              )}
            </li>
            <a
              href="https://icloth.io/pages/discover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" cursor-pointer">DISCOVER</li>
            </a>
            <a
              href="https://icloth.io/pages/about-us"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" cursor-pointer">OUR STORY</li>
            </a>

            <a
              href="https://icloth.io/pages/faqs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" cursor-pointer">FAQ</li>
            </a>

            <a
              href="https://icloth.io/pages/blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" cursor-pointer">OUR BLOB</li>
            </a>

            <a
              href="https://icloth.io/pages/contact"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className=" cursor-pointer">CONTACT US</li>
            </a>
          </ul>
        </div>
      </main>
    </header>
  );
};

export default Header;
