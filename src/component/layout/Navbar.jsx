import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaShoppingBag,
  FaUtensils,
  FaUser,
  FaHeart,
} from "react-icons/fa";
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const { cartCount } = useProduct();

  const navClass = ({ isActive }) =>
    isActive
      ? "rounded-full border border-pink-500 bg-pink-500 px-5 py-2 font-semibold text-white shadow-md"
      : "rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 transition duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500";

  const normalNavClass =
    "rounded-full border border-gray-300 bg-white px-5 py-2 text-gray-700 transition duration-300 hover:border-pink-500 hover:bg-pink-50 hover:text-pink-500";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500 text-white shadow-md">
            <FaUtensils />
          </div>

          <div>
            <h1 className="text-xl font-black">
              <span className="text-orange-500">EAT</span>

              <span className="px-2 text-green-500">
                A
              </span>

              <span className="text-fuchsia-600">
                LOT
              </span>
            </h1>

            <p className="text-[10px] uppercase tracking-[3px] text-gray-400">
              Fresh Food
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-3 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/shop" className={navClass}>
            Menu
          </NavLink>

          <a
            href="/#about"
            className={normalNavClass}
          >
            About
          </a>

          <a
            href="/#contact"
            className={normalNavClass}
          >
            Contact
          </a>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          {/* LOGIN */}
          <Link
            to="/login"
            className="hidden items-center gap-2 rounded-full border border-pink-500 px-5 py-2 font-semibold text-black transition duration-300 hover:bg-pink-500 hover:text-white md:flex"
          >
            <FaUser />
            Login
          </Link>

          {/* FAVORITE */}
          <Link
            to="/favorite"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500 bg-white text-pink-500 shadow-sm transition duration-300 hover:bg-pink-500 hover:text-white"
            title="Favorite"
          >
            <FaHeart />
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-pink-500 text-white shadow-md transition duration-300 hover:bg-pink-600"
          >
            <FaShoppingBag />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-6 min-w-6 items-center justify-center rounded-full bg-blue-600 px-1 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-pink-500 bg-white text-pink-500 md:hidden"
          >
            <FaBars />
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">
          <div className="flex flex-col gap-3">
            <NavLink
              to="/"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/shop"
              className={navClass}
              onClick={() => setOpen(false)}
            >
              Menu
            </NavLink>

            <a
              href="/#about"
              className={normalNavClass}
              onClick={() => setOpen(false)}
            >
              About
            </a>

            <a
              href="/#contact"
              className={normalNavClass}
              onClick={() => setOpen(false)}
            >
              Contact
            </a>

            {/* MOBILE FAVORITE */}
            <Link
              to="/favorite"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-pink-500 px-5 py-2 font-semibold text-pink-500 transition hover:bg-pink-500 hover:text-white"
            >
              <FaHeart />
              Favorite
            </Link>

            {/* MOBILE LOGIN */}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-pink-500 px-5 py-2 font-semibold text-black transition hover:bg-pink-500 hover:text-white"
            >
              <FaUser />
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;