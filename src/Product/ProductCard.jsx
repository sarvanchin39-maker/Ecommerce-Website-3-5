import { useState } from "react";
import {
  FaCartPlus,
  FaStar,
  FaTag,
  FaHeart,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import { useProduct } from "../context/ProductContext";

function ProductCard({ product }) {
  const { addToCart } = useProduct();

  // FAVORITE
  const [isFavorite, setIsFavorite] = useState(false);

  // CALCULATE DISCOUNT %
  const discount =
    product.originalPrice &&
    product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

  return (
    <div className="group overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-60 overflow-hidden bg-gray-100">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.imgs[0]}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </Link>

        {/* ================= LIKE BUTTON ================= */}
        <button
          type="button"
          onClick={() => setIsFavorite(!isFavorite)}
          className={`absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-lg shadow-lg transition duration-300 hover:scale-110 ${
            isFavorite
              ? "bg-rose-500 text-white"
              : "bg-white text-gray-400 hover:text-rose-500"
          }`}
          title="Favorite"
        >
          <FaHeart />
        </button>

        {/* ================= DISCOUNT BUTTON ================= */}
        {discount > 0 && (
          <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-rose-500 px-4 py-2 text-xs font-bold text-white shadow-lg">
            <FaTag />
            {discount}% OFF
          </div>
        )}
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* RATING */}
        <div className="mb-3 flex items-center gap-1">
          <FaStar className="text-yellow-500" />

          <span className="font-semibold text-gray-800">
            {product.rating}
          </span>

          <span className="ml-1 text-xs text-gray-400">
            Rating
          </span>
        </div>

        {/* PRODUCT NAME */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-black text-gray-800 transition duration-300 hover:text-pink-500">
            {product.name}
          </h3>
        </Link>

        {/* DESCRIPTION */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* ================= PRICE + CART ================= */}
        <div className="mt-5 flex items-center justify-between">

          {/* PRICE */}
          <div>
            <div className="flex items-center gap-2">

              <span className="text-2xl font-black text-amber-700">
                ${product.price.toFixed(2)}
              </span>

              {product.originalPrice && (
                <del className="text-sm font-medium text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </del>
              )}

            </div>

            {/* SAVE PRICE */}
            {discount > 0 && (
              <p className="mt-1 text-xs font-bold text-blue-800">
                Save $
                {(
                  product.originalPrice -
                  product.price
                ).toFixed(2)}
              </p>
            )}

          </div>

          {/* ================= ADD TO CART ================= */}
          <button
            type="button"
            onClick={() => addToCart(product)}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-700 text-lg text-white shadow-md transition duration-300 hover:scale-110 hover:bg-amber-500"
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