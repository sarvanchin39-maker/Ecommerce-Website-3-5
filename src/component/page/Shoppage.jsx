import { FaSearch } from "react-icons/fa";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "../../Product/ProductCard";

function Shoppage() {
  const {
    filterProducts,
    categories,
    selectedCategory,
    setSelectedCategory,
    search,
    setSearch,
  } = useProduct();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ================= HEADER ================= */}
      <section className="bg-slate-950 px-4 py-14 text-center sm:px-6 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl">

          <p className="text-xs font-bold uppercase tracking-[4px] text-rose-500 sm:text-sm">
            Delicious Foods
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Explore Our Menu
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
            Discover fresh and delicious meals prepared
            with quality ingredients just for you.
          </p>

        </div>
      </section>

      {/* ================= MAIN ================= */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14">

        {/* ================= SEARCH ================= */}
        <div className="relative mx-auto mb-7 max-w-2xl sm:mb-9">

          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-slate-400 sm:left-5 sm:text-base" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search your favorite food..."
            className="
              w-full
              rounded-full
              border
              border-slate-200
              bg-white
              py-3.5
              pl-11
              pr-5
              text-sm
              text-slate-700
              shadow-sm
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-rose-500
              focus:ring-4
              focus:ring-rose-100
              sm:py-4
              sm:pl-12
              sm:text-base
            "
          />
        </div>

        {/* ================= CATEGORIES ================= */}
        <div className="mb-9 flex flex-wrap justify-center gap-2 sm:mb-11 sm:gap-3 lg:mb-12">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`
                rounded-full
                border
                px-4
                py-2
                text-sm
                font-semibold
                transition-all
                duration-300
                sm:px-5
                sm:py-2.5
                sm:text-base

                ${
                  selectedCategory === category
                    ? "border-amber-300 bg-amber-300 text-white shadow-sm"
                    : "border-slate-200 bg-white text-slate-600 hover:border-amber-100 hover:bg-amber-200 hover:text-fuchsia-500"
                }
              `}
            >
              {category}
            </button>
          ))}

        </div>

        {/* ================= RESULT HEADER ================= */}
        <div className="mb-6 flex items-end justify-between gap-4 sm:mb-8">

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-rose-600">
              Our Selection
            </p>

            <h2 className="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
              Our Foods
            </h2>
          </div>

          <div className="rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm">
            <p className="whitespace-nowrap text-xs font-semibold text-slate-500 sm:text-sm">
              {filterProducts.length}{" "}
              {filterProducts.length === 1
                ? "product"
                : "products"}
            </p>
          </div>

        </div>

        {/* ================= PRODUCTS ================= */}
        {filterProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7 xl:grid-cols-4">

            {filterProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}

          </div>
        ) : (

          /* ================= NOT FOUND ================= */
          <div className="rounded-3xl border border-slate-200 bg-white px-4 py-14 text-center shadow-sm sm:py-20">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-4xl sm:h-24 sm:w-24 sm:text-5xl">
              🍽️
            </div>

            <h3 className="mt-5 text-xl font-black text-slate-900 sm:text-2xl">
              Food Not Found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
              We couldn't find any food matching your
              search. Try another keyword or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-rose-600"
            >
              Reset Filters
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Shoppage;