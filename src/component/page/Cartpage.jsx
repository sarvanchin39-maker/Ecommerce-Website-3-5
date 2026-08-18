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
      <section className="flex min-h-600px items-center justify-center bg-gray-50 px-5">
        <div className="text-center">
          <p className="text-8xl">🛒</p>

          <h1 className="mt-6 text-3xl font-black text-gray-900">
            Your Cart is Empty
          </h1>

          <p className="mt-3 text-gray-500">
            Add delicious foods to your cart.
          </p>

          <Link
            to="/shop"
            className="mt-7 inline-block rounded-full bg-orange-500 px-7 py-3 font-bold text-white"
          >
            Browse Menu
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <h1 className="mb-10 text-4xl font-black text-gray-900">
          Shopping Cart
        </h1>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          {/* ITEMS */}
          <div className="space-y-5">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >
                <img
                  src={item.imgs[0]}
                  alt={item.name}
                  className="h-28 w-full rounded-2xl object-cover sm:w-32"
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold text-orange-500">
                    {item.category}
                  </p>

                  <h2 className="mt-1 text-xl font-black">
                    {item.name}
                  </h2>

                  <p className="mt-2 font-bold text-orange-500">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* QUANTITY */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100"
                  >
                    <FaMinus />
                  </button>

                  <span className="w-5 text-center font-bold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500 text-white"
                  >
                    <FaPlus />
                  </button>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4 border-b pb-6">
              <div className="flex justify-between text-gray-500">
                <span>Subtotal</span>

                <span>
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-500">
                <span>Delivery</span>

                <span className="font-semibold text-green-600">
                  FREE
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="text-xl font-black">
                Total
              </span>

              <span className="text-2xl font-black text-orange-500">
                ${totalPrice.toFixed(2)}
              </span>
            </div>

            <button className="mt-7 w-full rounded-full bg-orange-500 py-4 font-bold text-white transition hover:bg-orange-600">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cartpage;