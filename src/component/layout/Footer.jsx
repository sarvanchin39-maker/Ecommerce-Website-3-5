import {
  FaFacebookF,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaUtensils,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      id="contact"
      className="mt-20 bg-blue-900 text-gray-300"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {/* ABOUT */}
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
              <FaUtensils />
            </div>

            <h2 className="text-2xl font-black text-amber-500">
              EAT 
              <span className="text-fuchsia-500 p-3">
              A 
              </span>
              <span className="text-green-500">
              LOT
              </span>
            </h2>
          </div>

          <p className="leading-7 text-orange-300 font-bold">
            Delicious and fresh food delivered
            directly to your door.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-amber-400">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-fuchsia-600 font-bold">
            <a href="/">Home</a>
            <a href="/shop">Our Menu</a>
            <a href="/#about">About Us</a>
            <a href="/#contact">Contact</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-amber-400">
            Contact
          </h3>

          <div className="space-y-4 text-fuchsia-500 font-bold">
            <p className="flex items-center gap-3">
              <FaLocationDot className="text-orange-500" />
              Phnom Penh, Cambodia
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-orange-500" />
              +855 967199927
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500" />
              sarvanchin39@gmail.com
            </p>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-5 text-lg font-bold text-amber-400">
            Follow Us
          </h3>

          <p className="mb-5 text-fuchsia-500 font-bold">
            Follow our social media for new foods
            and promotions.
          </p>

          <div className="flex gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500">
              <FaFacebookF />
            </button>

            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition hover:bg-orange-500">
              <FaInstagram />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-red-500">
        © 2026 Foodie. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;