import Hero from "../home/Hero";
import Category from "../home/Category";
import FeaturedFood from "../home/FeaturedFood";

function Homepage() {
  return (
    <>
      <Hero />
      <Category />
      <FeaturedFood />

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 sm:py-16 md:gap-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24"
      >
        {/* IMAGE */}
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
            alt="Our Chef"
            className="h-280px w-full rounded-2xl object-cover shadow-xl sm:h-350px sm:rounded-3xl md:h-420px lg:h-480px lg:rounded-[40px]"
          />
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left">
          <p className="text-sm font-bold uppercase tracking-wider text-orange-500 sm:text-base">
            About Us
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            We Serve Fresh &{" "}
            <span className="text-orange-500">
              Delicious Food
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 lg:mx-0">
            Our goal is to provide fresh, delicious and high-quality meals to
            our customers. Every dish is prepared carefully using fresh
            ingredients.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            <div className="rounded-2xl bg-orange-50 px-2 py-4 sm:p-5">
              <p className="text-2xl font-black text-orange-500 sm:text-3xl">
                10+
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Years
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 px-2 py-4 sm:p-5">
              <p className="text-2xl font-black text-orange-500 sm:text-3xl">
                50+
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Foods
              </p>
            </div>

            <div className="rounded-2xl bg-orange-50 px-2 py-4 sm:p-5">
              <p className="text-2xl font-black text-orange-500 sm:text-3xl">
                1K+
              </p>
              <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                Customers
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;