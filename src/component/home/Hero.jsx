import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaClock,
  FaStar,
} from "react-icons/fa";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-orange-50">
      <div className="absolute -left-20 top-20 h-64 w-64 rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-yellow-200/50 blur-3xl"></div>

      <div className="relative mx-auto grid min-h-650px max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            🔥 Fast & Fresh Food Delivery
          </div>

          <h1 className="max-w-2xl text-5xl font-black leading-tight text-gray-950 sm:text-6xl lg:text-7xl">
            Delicious Food
            <span className="block text-orange-500">
              Delivered Fast.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Order your favorite meals from our
            delicious menu and enjoy fresh food
            delivered directly to your door.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Order Now

              <FaArrowRight />
            </Link>

            <a
              href="#featured"
              className="rounded-full border border-gray-300 bg-white px-7 py-4 font-bold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
            >
              View Menu
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-orange-500 shadow">
                <FaClock />
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  30 Minutes
                </p>
                <p className="text-sm text-gray-500">
                  Fast Delivery
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-yellow-500 shadow">
                <FaStar />
              </div>

              <div>
                <p className="font-bold text-gray-900">
                  4.9 Rating
                </p>
                <p className="text-sm text-gray-500">
                  Happy Customers
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-10 rounded-full bg-orange-400"></div>

          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1000&q=80"
            alt="Delicious Food"
            className="relative z-10 h-470px w-full rounded-[60px] object-cover shadow-2xl"
          />

          <div className="absolute -bottom-6 -left-5 z-20 rounded-2xl bg-white p-4 shadow-xl">
            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <p className="text-2xl font-black text-orange-500">
              $3.00
            </p>
          </div>

          <div className="absolute -right-4 top-12 z-20 rounded-2xl bg-white p-4 shadow-xl">
            <div className="flex items-center gap-2">
              <span className="text-xl">😍</span>

              <div>
                <p className="font-bold">1000+</p>
                <p className="text-xs text-gray-500">
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