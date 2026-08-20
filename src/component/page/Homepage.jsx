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
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 md:gap-10 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-24"
      >
        {/* IMAGE */}
        <div className="w-full">
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[36px]">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
              alt="Our Chef"
              className="
                h-240px
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
                sm:h-320px
                md:h-400px
                lg:h-480px
              "
            />
          </div>
        </div>

        {/* CONTENT */}
        <div className="text-center lg:text-left">
          {/* SMALL TITLE */}
          <p className="text-xs font-bold uppercase tracking-[3px] text-rose-600 sm:text-sm">
            About Us
          </p>

          {/* MAIN TITLE */}
          <h2 className="mt-3 text-2xl font-black leading-tight tracking-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl">
            We Serve Fresh &{" "}
            <span className="text-rose-600">
              Delicious Food
            </span>
          </h2>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:mt-5 sm:text-base sm:leading-8 lg:mx-0">
            Our goal is to provide fresh, delicious and
            high-quality meals to our customers. Every dish
            is carefully prepared using fresh ingredients.
          </p>

          {/* STATS */}
          <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-4">
            
            {/* YEARS */}
            <div className="rounded-2xl border border-slate-200 bg-white px-2 py-4 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-md sm:p-5">
              <p className="text-xl font-black text-slate-900 sm:text-2xl md:text-3xl">
                10+
              </p>

              <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
                Years
              </p>
            </div>

            {/* FOODS */}
            <div className="rounded-2xl border border-slate-200 bg-white px-2 py-4 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-md sm:p-5">
              <p className="text-xl font-black text-rose-600 sm:text-2xl md:text-3xl">
                50+
              </p>

              <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
                Foods
              </p>
            </div>

            {/* CUSTOMERS */}
            <div className="rounded-2xl border border-slate-200 bg-white px-2 py-4 shadow-sm transition hover:-translate-y-1 hover:border-rose-200 hover:shadow-md sm:p-5">
              <p className="text-xl font-black text-slate-900 sm:text-2xl md:text-3xl">
                1K+
              </p>

              <p className="mt-1 text-[11px] font-medium text-slate-500 sm:text-sm">
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