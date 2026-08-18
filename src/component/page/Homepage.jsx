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
        className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1000&q=80"
            alt="Our Chef"
            className="h-480px w-full rounded-[40px] object-cover shadow-xl"
          />
        </div>

        <div>
          <p className="font-bold uppercase tracking-wider text-orange-500">
            About Us
          </p>

          <h2 className="mt-3 text-4xl font-black leading-tight text-gray-900 md:text-5xl">
            We Serve Fresh &
            <span className="text-orange-500">
              {" "}
              Delicious Food
            </span>
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
            Our goal is to provide fresh,
            delicious and high-quality meals to
            our customers. Every dish is prepared
            carefully using fresh ingredients.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-black text-orange-500">
                10+
              </p>

              <p className="text-sm text-gray-500">
                Years
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">
                50+
              </p>

              <p className="text-sm text-gray-500">
                Foods
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">
                1K+
              </p>

              <p className="text-sm text-gray-500">
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