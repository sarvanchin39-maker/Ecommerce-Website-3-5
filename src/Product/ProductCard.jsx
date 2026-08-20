import {
  FaCartPlus,
  FaStar,
  FaTag,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleFavorite,
    isFavorite,
  } = useProduct();

  const favorite = isFavorite(product.id);

  // CALCULATE DISCOUNT %
  const discount =
    product.originalPrice &&
    Number(product.originalPrice) >
      Number(product.price)
      ? Math.round(
          ((Number(product.originalPrice) -
            Number(product.price)) /
            Number(product.originalPrice)) *
            100
        )
      : 0;

  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl">

      {/* IMAGE */}
      <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-60">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.imgs[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* FAVORITE */}
        <button
          type="button"
          onClick={() => toggleFavorite(product)}
          className={`absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-full border text-base shadow-md transition duration-300 hover:scale-110 sm:left-4 sm:top-4 ${
            favorite
              ? "border-rose-600 bg-rose-600 text-white"
              : "border-slate-100 bg-white text-slate-500 hover:border-rose-500 hover:text-rose-600"
          }`}
          title={
            favorite
              ? "Remove from favorite"
              : "Add to favorite"
          }
        >
          <FaHeart />
        </button>

        {/* DISCOUNT */}
        {discount > 0 && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-rose-600 px-3 py-2 text-xs font-bold text-white shadow-md sm:right-4 sm:top-4">
            <FaTag />
            {discount}% OFF
          </div>
        )}
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">

        {/* RATING */}
        <div className="mb-3 flex items-center gap-1">
          <FaStar className="text-amber-400" />

          <span className="text-sm font-bold text-slate-800">
            {product.rating}
          </span>

          <span className="ml-1 text-xs text-slate-400">
            Rating
          </span>
        </div>

        {/* PRODUCT NAME */}
        <Link to={`/product/${product.id}`}>
          <h3 className="line-clamp-1 text-lg font-black text-slate-900 transition duration-300 hover:text-rose-600 sm:text-xl">
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {product.description}
        </p>

        {/* PRICE + CART */}
        <div className="mt-5 flex items-end justify-between gap-3">

          {/* PRICE */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">

              <span className="text-xl font-black text-amber-800 sm:text-2xl">
                ${Number(product.price).toFixed(2)}
              </span>

              {product.originalPrice &&
                Number(product.originalPrice) >
                  Number(product.price) && (
                  <del className="text-xs font-medium text-slate-400 sm:text-sm">
                    $
                    {Number(
                      product.originalPrice
                    ).toFixed(2)}
                  </del>
                )}
            </div>

            {/* SAVE PRICE */}
            {discount > 0 && (
              <p className="mt-1 text-xs font-semibold text-rose-600">
                Save $
                {(
                  Number(product.originalPrice) -
                  Number(product.price)
                ).toFixed(2)}
              </p>
            )}
          </div>

          {/* ADD TO CART */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber-400 text-base text-white shadow-sm transition duration-300 hover:scale-110 hover:bg-amber-700 sm:h-12 sm:w-12 sm:text-lg"
            title="Add to cart"
          >
            <FaCartPlus />
          </button>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;