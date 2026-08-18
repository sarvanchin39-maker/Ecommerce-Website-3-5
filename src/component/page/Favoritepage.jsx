import {
  FaHeart,
  FaShoppingCart,
  FaTrash,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import { useProduct } from "../../context/ProductContext";

function Favoritepage() {
  const {
    favorites = [],
    removeFavorite,
    addToCart,
  } = useProduct();

  // ================= EMPTY =================
  if (favorites.length === 0) {
    return (
      <section className="min-h-[70vh] bg-gray-50 px-5 py-20">

        <div className="mx-auto max-w-xl text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-4xl text-pink-500">
            <FaHeart />
          </div>

          <h1 className="mt-6 text-3xl font-black text-gray-800">
            No Favorite Food
          </h1>

          <p className="mt-3 text-gray-500">
            You haven't added any food to your favorites yet.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-block rounded-full bg-pink-500 px-7 py-3 font-bold text-white transition hover:bg-pink-600"
          >
            Browse Menu
          </Link>

        </div>

      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-14">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* TITLE */}
        <div className="mb-10">

          <div className="flex items-center gap-3">

            <FaHeart className="text-3xl text-pink-500" />

            <h1 className="text-3xl font-black text-gray-800">
              My Favorites
            </h1>

          </div>

          <p className="mt-2 text-gray-500">
            {favorites.length} Favorite
            {favorites.length > 1
              ? " Foods"
              : " Food"}
          </p>

        </div>

        {/* PRODUCTS */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {favorites.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}
              <div className="relative h-56 overflow-hidden bg-gray-100">

                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imgs?.[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </Link>

                {/* REMOVE */}
                <button
                  type="button"
                  onClick={() =>
                    removeFavorite(product.id)
                  }
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-rose-500 shadow-md transition duration-300 hover:scale-110 hover:bg-rose-500 hover:text-white"
                  title="Remove favorite"
                >
                  <FaTrash />
                </button>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                <p className="text-sm font-semibold text-pink-500">
                  {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                  <h2 className="mt-1 text-xl font-black text-gray-800 transition hover:text-pink-500">
                    {product.name}
                  </h2>
                </Link>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
                  {product.description}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <div>
                    <span className="text-2xl font-black text-amber-700">
                      $
                      {Number(
                        product.price
                      ).toFixed(2)}
                    </span>

                    {product.originalPrice &&
                      product.originalPrice >
                        product.price && (
                        <del className="ml-2 text-sm text-gray-400">
                          $
                          {Number(
                            product.originalPrice
                          ).toFixed(2)}
                        </del>
                      )}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addToCart(product)
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-pink-500 text-white shadow-md transition hover:scale-110 hover:bg-pink-600"
                    title="Add to cart"
                  >
                    <FaShoppingCart />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Favoritepage;