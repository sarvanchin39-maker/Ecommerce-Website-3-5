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
  const { id } = useParams();
  const navigate = useNavigate();

  const { products, addToCart } = useProduct();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  // PRODUCT NOT FOUND
  if (!product) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-5xl">
            😢
          </div>

          <h1 className="mt-6 text-2xl font-black text-slate-900 sm:text-3xl">
            Food Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Sorry, this food item could not be found.
          </p>

          <button
            type="button"
            onClick={() => navigate("/shop")}
            className="mx-auto mt-7 flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-rose-600 sm:text-base"
          >
            <FaArrowLeft />
            Back To Menu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}
        <button
          type="button"
          onClick={() => navigate("/shop")}
          className="mb-7 flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-rose-500 hover:text-rose-600 sm:mb-8"
        >
          <FaArrowLeft />
          Back To Menu
        </button>

        {/* PRODUCT */}
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:rounded-[36px]">
            <img
              src={product.imgs?.[0]}
              alt={product.name}
              className="
                h-300px
                w-full
                object-cover
                transition
                duration-700
                hover:scale-105
                sm:h-400px
                lg:h-500px
              "
            />
          </div>

          {/* DETAILS */}
          <div className="flex flex-col justify-center">

            {/* CATEGORY */}
            <span className="w-fit rounded-full bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-wide text-rose-600 sm:text-sm">
              {product.category}
            </span>

            {/* NAME */}
            <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
              {product.name}
            </h1>

            {/* RATING */}
            <div className="mt-5 flex flex-wrap items-center gap-2">
              <FaStar className="text-amber-400" />

              <span className="font-bold text-slate-900">
                {product.rating}
              </span>

              <span className="text-sm text-slate-400">
                (120+ Reviews)
              </span>
            </div>

            {/* DESCRIPTION */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 sm:mt-6 sm:text-base sm:leading-8 lg:text-lg">
              {product.description}
            </p>

            {/* PRICE */}
            <div className="mt-6 flex flex-wrap items-end gap-3 sm:mt-7">
              <p className="text-3xl font-black text-slate-900 sm:text-4xl">
                ${Number(product.price).toFixed(2)}
              </p>

              {product.originalPrice &&
                Number(product.originalPrice) >
                  Number(product.price) && (
                  <del className="pb-1 text-base text-slate-400 sm:text-lg">
                    $
                    {Number(
                      product.originalPrice
                    ).toFixed(2)}
                  </del>
                )}
            </div>

            {/* DELIVERY INFO */}
            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">

              {/* DELIVERY */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-50">
                  <FaClock className="text-rose-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Delivery
                  </p>

                  <p className="font-bold text-slate-900">
                    20-30 min
                  </p>
                </div>
              </div>

              {/* SHIPPING */}
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-rose-50">
                  <FaTruck className="text-rose-600" />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Shipping
                  </p>

                  <p className="font-bold text-slate-900">
                    Free Delivery
                  </p>
                </div>
              </div>
            </div>

            {/* ADD TO CART */}
            <button
              type="button"
              onClick={() => addToCart(product)}
              className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-rose-600 sm:w-fit sm:py-4 sm:text-base"
            >
              <FaCartPlus className="text-lg" />
              Add To Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetail;