import { useParams, useNavigate } from "react-router-dom";

import {
  FaCartPlus,
  FaStar,
  FaClock,
  FaTruck,
  FaArrowLeft,
} from "react-icons/fa";

import { useProduct } from "../context/ProductContext";

function ProductDetail() {
  // Get product id from URL
  const { id } = useParams();

  // For navigation
  const navigate = useNavigate();

  // Get products and addToCart from Context
  const { products, addToCart } = useProduct();

  // Find product by id
  const product = products.find(
    (item) => item.id === Number(id)
  );

  // Product Not Found
  if (!product) {
    return (
      <div className="flex min-h-500px items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-6xl">😢</p>

          <h1 className="mt-5 text-3xl font-black text-gray-900">
            Food Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            Sorry, this food item could not be found.
          </p>

          {/* Back To Menu */}
          <button
            onClick={() => navigate("/shop")}
            className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-pink-500 px-6 py-3 font-bold text-white transition hover:bg-pink-500"
          >
            <FaArrowLeft />
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        {/* ================= BACK BUTTON ================= */}
        <button
          onClick={() => navigate("/shop")}
          className="mb-8 flex items-center gap-2 rounded-full bg-indigo-500 px-5 py-3 font-bold text-gray-700 shadow-sm transition duration-300 hover:bg-pink-500 hover:text-white"
        >
          <FaArrowLeft />
          Back
        </button>

        {/* ================= PRODUCT ================= */}
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* ================= IMAGE ================= */}
          <div className="overflow-hidden rounded-[40px] bg-white shadow-sm">
            <img
              src={product.imgs[0]}
              alt={product.name}
              className="h-350px w-full object-cover transition duration-500 hover:scale-105 sm:h-450px lg:h-500px"
            />
          </div>

          {/* ================= DETAILS ================= */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <span className="w-fit rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-500">
              {product.category}
            </span>

            {/* Product Name */}
            <h1 className="mt-5 text-4xl font-black text-gray-950 md:text-5xl">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="mt-5 flex items-center gap-2">
              <FaStar className="text-yellow-500" />

              <span className="font-bold text-gray-900">
                {product.rating}
              </span>

              <span className="text-gray-400">
                (120+ Reviews)
              </span>
            </div>

            {/* Description */}
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {product.description}
            </p>

            {/* Price */}
            <div className="mt-7 flex items-end gap-3">

              <p className="text-4xl font-black text-orange-500">
                ${product.price.toFixed(2)}
              </p>

              {product.originalPrice && (
                <del className="pb-1 text-lg text-gray-400">
                  ${product.originalPrice.toFixed(2)}
                </del>
              )}

            </div>

            {/* ================= DELIVERY INFO ================= */}
            <div className="mt-8 flex flex-wrap gap-4">

              {/* Delivery */}
              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                  <FaClock className="text-orange-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Delivery
                  </p>

                  <p className="font-bold text-gray-900">
                    20-30 min
                  </p>
                </div>

              </div>

              {/* Shipping */}
              <div className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 shadow-sm">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
                  <FaTruck className="text-orange-500" />
                </div>

                <div>
                  <p className="text-xs text-gray-400">
                    Shipping
                  </p>

                  <p className="font-bold text-gray-900">
                    Free Delivery
                  </p>
                </div>

              </div>

            </div>

            {/* ================= ADD TO CART ================= */}
            <button
              onClick={() => addToCart(product)}
              className="mt-9 flex w-fit items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              <FaCartPlus className="text-xl" />
              Add To Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;