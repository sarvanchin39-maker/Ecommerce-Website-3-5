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
    removeFromFavorite,
    addToCart,
  } = useProduct();

  // EMPTY FAVORITE
  if (favorites.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 py-12 sm:px-5 sm:py-16">
        <div className="mx-auto max-w-xl text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-rose-50 text-3xl text-rose-600 sm:h-24 sm:w-24 sm:text-4xl">
            <FaHeart />
          </div>

          <h1 className="mt-5 text-2xl font-black text-slate-900 sm:text-3xl">
            No Favorite Food
          </h1>

          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            You haven't added any food to your favorites yet.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-amber-300 px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700 sm:text-base"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* TITLE */}
        <div className="mb-8 sm:mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-rose-600">
            Saved Foods
          </p>

          <div className="mt-2 flex items-center gap-3">
            <FaHeart className="text-2xl text-rose-600 sm:text-3xl" />

            <h1 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
              My Favorites
            </h1>
          </div>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            {favorites.length}{" "}
            {favorites.length === 1
              ? "Favorite Food"
              : "Favorite Foods"}
          </p>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-52 overflow-hidden bg-slate-100 sm:h-56">
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.imgs?.[0]}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </Link>

                {/* DELETE */}
                <button
                  type="button"
                  onClick={() =>
                    removeFromFavorite(product.id)
                  }
                  className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border border-slate-100 bg-white text-red-500 shadow-md transition hover:bg-red-500 hover:text-white"
                  title="Remove favorite"
                >
                  <FaTrash />
                </button>
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-rose-600 sm:text-sm">
                  {product.category}
                </p>

                <Link to={`/product/${product.id}`}>
                  <h2 className="mt-1 line-clamp-1 text-lg font-black text-slate-900 transition hover:text-rose-600 sm:text-xl">
                    {product.name}
                  </h2>
                </Link>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                  {product.description}
                </p>

                <div className="mt-5 flex items-end justify-between gap-3">
                  <div className="min-w-0">
                    <span className="text-xl font-black text-slate-900 sm:text-2xl">
                      ${Number(product.price).toFixed(2)}
                    </span>

                    {product.originalPrice &&
                      Number(product.originalPrice) >
                        Number(product.price) && (
                        <del className="ml-2 text-xs text-slate-400 sm:text-sm">
                          $
                          {Number(
                            product.originalPrice
                          ).toFixed(2)}
                        </del>
                      )}
                  </div>

                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm transition hover:bg-rose-600 sm:h-11 sm:w-11"
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