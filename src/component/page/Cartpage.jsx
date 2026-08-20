import { Link } from "react-router-dom";
import {
  FaMinus,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { useProduct } from "../../context/ProductContext";

function Cartpage() {
  const {
    cart,
    totalPrice,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useProduct();

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center bg-slate-50 px-4 sm:px-5">
        <div className="max-w-md text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-rose-50 text-5xl">
            🛒
          </div>

          <h1 className="mt-6 text-2xl font-black text-slate-900 sm:text-3xl">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">
            Add your favorite foods and come back here
            when you're ready to order.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-rose-600 px-7 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-rose-700 sm:text-base"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="mb-7 sm:mb-10">
          <p className="text-sm font-bold uppercase tracking-widest text-rose-600">
            Your Order
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Shopping Cart
          </h1>

          <p className="mt-2 text-sm text-slate-500 sm:text-base">
            Review your selected foods before checkout.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:gap-8">

          {/* CART ITEMS */}
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:shadow-md sm:p-5"
              >
                <div className="flex gap-4 sm:items-center sm:gap-5">

                  {/* IMAGE */}
                  <img
                    src={item.imgs[0]}
                    alt={item.name}
                    className="h-24 w-24 shrink-0 rounded-2xl object-cover sm:h-28 sm:w-32"
                  />

                  {/* PRODUCT INFO */}
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-wide text-rose-600 sm:text-sm">
                      {item.category}
                    </p>

                    <h2 className="mt-1 line-clamp-2 text-base font-black text-slate-900 sm:text-xl">
                      {item.name}
                    </h2>

                    <p className="mt-2 text-sm font-bold text-slate-700 sm:text-base">
                      ${Number(item.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* ACTION AREA */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 sm:mt-5">

                  {/* QUANTITY */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      type="button"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-xs text-slate-600 transition hover:border-rose-600 hover:text-rose-600"
                    >
                      <FaMinus />
                    </button>

                    <span className="w-7 text-center text-sm font-bold text-slate-900 sm:text-base">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-rose-600 text-xs text-white transition hover:bg-rose-700"
                    >
                      <FaPlus />
                    </button>
                  </div>

                  {/* ITEM TOTAL */}
                  <div className="hidden text-right sm:block">
                    <p className="text-xs text-slate-400">
                      Item Total
                    </p>

                    <p className="font-black text-slate-900">
                      $
                      {(
                        Number(item.price) *
                        item.quantity
                      ).toFixed(2)}
                    </p>
                  </div>

                  {/* DELETE */}
                  <button
                    type="button"
                    onClick={() =>
                      removeFromCart(item.id)
                    }
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-sm text-red-500 transition hover:bg-red-500 hover:text-white"
                    title="Remove item"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ORDER SUMMARY */}
          <div className="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:sticky lg:top-28">
            <h2 className="text-xl font-black text-slate-900 sm:text-2xl">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b border-slate-100 pb-6">
              <div className="flex items-center justify-between text-sm text-slate-500 sm:text-base">
                <span>Subtotal</span>

                <span className="font-semibold text-slate-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-slate-500 sm:text-base">
                <span>Delivery</span>

                <span className="font-semibold text-emerald-600">
                  FREE
                </span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="text-lg font-black text-slate-900 sm:text-xl">
                Total
              </span>

              <span className="text-2xl font-black text-rose-600">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="mt-7 w-full rounded-full bg-slate-900 py-3.5 text-sm font-bold text-white shadow-sm transition hover:bg-rose-600 sm:py-4 sm:text-base"
            >
              Proceed to Checkout
            </button>

            <Link
              to="/shop"
              className="mt-4 block text-center text-sm font-semibold text-slate-500 transition hover:text-rose-600"
            >
              ← Continue Shopping
            </Link>

            <p className="mt-5 text-center text-xs leading-5 text-slate-400">
              Secure checkout • Fresh food • Fast delivery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartpage;