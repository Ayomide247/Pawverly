import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoPerson } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useCart } from "../components/fragments/CartContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state, dispatch } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${
        isScrolled
          ? "bg-pure text-primary shadow-lg"
          : "bg-secondary text-primary"
      }`}
    >
      <div className="flex items-center justify-between px-5 py-5 lg:px-20 font-rubik lg:gap-20">
        <div className="flex items-center">
          <Link to="/">
            <h2 className="font-bold text-[25px]">Pawverly™</h2>
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <HiX className="text-[30px]" />
            ) : (
              <HiMenuAlt3 className="text-[30px]" />
            )}
          </button>
        </div>

        <div
          className={`absolute top-16 left-0 w-full lg:static lg:flex lg:items-center lg:gap-10 lg:bg-transparent lg:shadow-none ${
            isMenuOpen
              ? "block shadow-lg bg-primary text-[#ffffff]  py-12"
              : "hidden"
          }`}
        >
          <div className="flex flex-col gap-5 text-center lg:flex-row lg:items-center lg:gap-10 lg:text-left font-semibold">
            <Link
              to="/"
              className="transition-colors cursor-pointer hover:underline hover:duration-500"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="transition-colors cursor-pointer hover:underline hover:duration-500"
            >
              Our Product
            </Link>
            <Link
              to="/track"
              className="transition-colors cursor-pointer hover:underline hover:duration-500"
            >
              Track Order
            </Link>
            <Link
              to="/contact"
              className="transition-colors cursor-pointer hover:underline hover:duration-500"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-5 font-bold text-[25px] cursor-pointer">
          <span className="hover:scale-110">
            <IoPerson />
          </span>
          <Link
            to={"/cart"}
            className="relative flex items-center hover:scale-110"
          >
            <FaBagShopping />
            <p className="px-1 text-[10px] bg-white rounded-full font-[2px] text-primary absolute -right-2 top-3">
              {state.cart.length}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
