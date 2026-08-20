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
      className="mt-12 bg-slate-950 text-slate-300 sm:mt-16 lg:mt-20"
    >
      <div
        className="
          mx-auto grid max-w-7xl
          grid-cols-1
          gap-10
          px-4 py-10
          sm:px-6 sm:py-12
          md:grid-cols-2
          lg:grid-cols-4 lg:px-8 lg:py-14
        "
      >
        {/* ABOUT */}
        <div>
          <div className="mb-4 flex items-center gap-3 sm:mb-5">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-600 text-white shadow-sm">
              <FaUtensils />
            </div>

            <div>
              <h2 className="text-xl font-black tracking-tight text-white sm:text-2xl">
                EAT A LOT
              </h2>

              <p className="text-[10px] font-semibold uppercase tracking-[3px] text-slate-500">
                Fresh Food
              </p>
            </div>
          </div>

          <p className="max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
            Delicious and fresh food delivered directly to your door.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
            Quick Links
          </h3>

          <div className="flex flex-col items-start gap-3 text-sm text-slate-400 sm:text-base">
            <a
              href="/"
              className="transition hover:translate-x-1 hover:text-rose-500"
            >
              Home
            </a>

            <a
              href="/shop"
              className="transition hover:translate-x-1 hover:text-rose-500"
            >
              Our Menu
            </a>

            <a
              href="/#about"
              className="transition hover:translate-x-1 hover:text-rose-500"
            >
              About Us
            </a>

            <a
              href="/#contact"
              className="transition hover:translate-x-1 hover:text-rose-500"
            >
              Contact
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
            Contact
          </h3>

          <div className="space-y-4 text-sm text-slate-400 sm:text-base">
            <p className="flex items-start gap-3">
              <FaLocationDot className="mt-1 shrink-0 text-rose-500" />

              <span>Phnom Penh, Cambodia</span>
            </p>

            <a
              href="tel:+855967199927"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <FaPhone className="shrink-0 text-rose-500" />

              <span>+855 967 199 927</span>
            </a>

            <a
              href="mailto:sarvanchin39@gmail.com"
              className="flex items-start gap-3 transition hover:text-white"
            >
              <FaEnvelope className="mt-1 shrink-0 text-rose-500" />

              <span className="break-all">
                sarvanchin39@gmail.com
              </span>
            </a>
          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white sm:mb-5 sm:text-lg">
            Follow Us
          </h3>

          <p className="mb-5 max-w-sm text-sm leading-7 text-slate-400 sm:text-base">
            Follow our social media for new foods and promotions.
          </p>

          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-700
                bg-slate-900
                text-slate-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-rose-600
                hover:bg-rose-600
                hover:text-white
              "
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex h-10 w-10
                items-center justify-center
                rounded-full
                border border-slate-700
                bg-slate-900
                text-slate-300
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-rose-600
                hover:bg-rose-600
                hover:text-white
              "
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500 sm:text-sm">
        © 2026 EAT A LOT. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;