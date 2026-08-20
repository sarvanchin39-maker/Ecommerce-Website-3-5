import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaShoppingBag,
  FaUtensils,
  FaUser,
  FaHeart,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useProduct } from "../../context/ProductContext";

function Navbar() {
  const [open, setOpen] = useState(false);

  const {
    cartCount,
    favoriteCount,
  } = useProduct();

  const navClass = ({ isActive }) =>
    isActive
      ? "rounded-full bg-rose-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition"
      : "rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-rose-50 hover:text-rose-600";

  const normalNavClass =
    "rounded-full px-5 py-2.5 text-sm font-semibold text-slate-600 transition hover:bg-rose-50 hover:text-rose-600";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-sm">
            <FaUtensils />
          </div>

          <div>
            <h1 className="text-lg font-black tracking-tight text-slate-900 sm:text-xl">
              EAT A LOT
            </h1>

            <p className="text-[9px] font-semibold uppercase tracking-[3px] text-slate-400 sm:text-[10px]">
              Fresh Food
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-1 md:flex">
          <NavLink
            to="/"
            className={navClass}
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={navClass}
          >
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
        <div className="flex items-center gap-2 sm:gap-3">

          {/* LOGIN */}
          <Link
            to="/login"
            className="hidden items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-rose-600 hover:text-rose-600 lg:flex"
          >
            <FaUser />
            Login
          </Link>

          {/* FAVORITE */}
          <Link
            to="/favorite"
            className="relative hidden h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-amber-300 hover:bg-rose-50 hover:text-white sm:flex"
            title="Favorite"
          >
            <FaHeart />

            {favoriteCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">
                {favoriteCount > 99
                  ? "99+"
                  : favoriteCount}
              </span>
            )}
          </Link>

          {/* CART */}
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm transition hover:bg-rose-600 sm:h-11 sm:w-11"
          >
            <FaShoppingBag />

            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-rose-600 px-1 text-[10px] font-bold text-white">
                {cartCount > 99
                  ? "99+"
                  : cartCount}
              </span>
            )}
          </Link>

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-amber-300 hover:text-mist-950 md:hidden sm:h-11 sm:w-11"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-lg md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">

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

            <Link
              to="/favorite"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 font-semibold text-slate-700 transition hover:border-amber-400 hover:text-fuchsia-600"
            >
              <FaHeart />
              Favorite

              {favoriteCount > 0 && (
                <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs text-white">
                  {favoriteCount}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 font-semibold text-white transition hover:bg-rose-600"
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