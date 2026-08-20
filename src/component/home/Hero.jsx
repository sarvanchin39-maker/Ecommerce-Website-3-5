import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaStar,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* BACKGROUND DECORATION */}
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-slate-200/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-650px max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* BADGE */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white px-4 py-2 text-xs font-semibold text-rose-600 shadow-sm sm:text-sm">
            🔥 Fast & Fresh Food Delivery
          </div>

          {/* TITLE */}
          <h1 className="mx-auto max-w-2xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:mx-0 lg:text-7xl">
            Delicious Food

            <span className="block text-rose-600">
              Delivered Fast.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            Order your favorite meals from our delicious
            menu and enjoy fresh food delivered directly
            to your door.
          </p>

          {/* BUTTONS */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4 lg:justify-start">

            <Link
              to="/shop"
              className="flex items-center justify-center gap-3 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-600 sm:py-4 sm:text-base"
            >
              Order Now
              <FaArrowRight />
            </Link>

            <a
              href="#featured"
              className="flex items-center justify-center rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 transition hover:border-rose-500 hover:text-rose-600 sm:py-4 sm:text-base"
            >
              View Menu
            </a>
          </div>

          {/* INFO */}
          <div className="mt-9 flex flex-wrap justify-center gap-6 sm:mt-10 sm:gap-8 lg:justify-start">

            {/* DELIVERY */}
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-rose-600 shadow-sm">
                <FaClock />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  30 Minutes
                </p>

                <p className="text-sm text-slate-500">
                  Fast Delivery
                </p>
              </div>
            </div>

            {/* RATING */}
            <div className="flex items-center gap-3 text-left">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-amber-400 shadow-sm">
                <FaStar />
              </div>

              <div>
                <p className="font-bold text-slate-900">
                  4.9 Rating
                </p>

                <p className="text-sm text-slate-500">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto mt-4 w-full max-w-xl lg:mt-0">

          {/* BACK SHAPE */}
          <div className="absolute inset-6 rounded-[40px] bg-rose-100 sm:inset-10 sm:rounded-[60px]" />

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
            alt="Delicious Food"
            className="
              relative
              z-10
              h-320px
              w-full
              rounded-32px
              object-cover
              shadow-2xl
              sm:h-400px
              sm:rounded-[45px]
              lg:h-470px
              lg:rounded-[60px]
            "
          />

          {/* PRICE CARD */}
          <div className="absolute -bottom-4 left-3 z-20 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:-bottom-6 sm:-left-5 sm:p-4">
            <p className="text-xs text-slate-500 sm:text-sm">
              Starting From
            </p>

            <p className="text-xl font-black text-rose-600 sm:text-2xl">
              $3.00
            </p>
          </div>

          {/* CUSTOMER CARD */}
          <div className="absolute right-2 top-5 z-20 rounded-2xl border border-slate-100 bg-white px-3 py-3 shadow-xl sm:-right-4 sm:top-12 sm:p-4">
            <div className="flex items-center gap-2">
              <span className="text-lg sm:text-xl">
                😍
              </span>

              <div>
                <p className="text-sm font-black text-slate-900 sm:text-base">
                  1000+
                </p>

                <p className="text-[10px] text-slate-500 sm:text-xs">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;