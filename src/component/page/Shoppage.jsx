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
    <div className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <section className="bg-pink-400 px-5 py-20 text-center text-white">
        <p className="font-bold uppercase tracking-widest text-blue-600">
          Delicious Foods
        </p>

        <h1 className="mt-3 text-4xl font-black md:text-5xl">
          Explore Our Menu
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-green-700 font-bold">
          Search and choose from our delicious
          selection of fresh foods.
        </p>
      </section>

      <div className="mx-auto max-w-7xl px-5 py-14 lg:px-8">
        {/* SEARCH */}
        <div className="relative mx-auto mb-8 max-w-2xl">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />

          <input
            type="text"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search food..."
            className="w-full rounded-full border border-gray-200 bg-white py-4 pl-13 pr-5 outline-none transition focus:border-amber-400 focus:ring-4 focus:ring-amber-400"
          />
        </div>

        {/* CATEGORIES */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`rounded-full px-5 py-2.5 font-semibold transition ${
                selectedCategory === category
                  ? "bg-pink-500 text-white"
                  : "border bg-white text-gray-600 hover:border-b-pink-500 hover:text-pink-500"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* RESULT */}
        <div className="mb-7 flex items-center justify-between">
          <h2 className="text-2xl font-black text-gray-900">
            Our Foods
          </h2>

          <p className="text-gray-500">
            {filterProducts.length} products
          </p>
        </div>

        {filterProducts.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filterProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white py-20 text-center">
            <p className="text-6xl">🍽️</p>

            <h3 className="mt-5 text-2xl font-black">
              Food not found
            </h3>

            <p className="mt-2 text-gray-500">
              Try another search or category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Shoppage;