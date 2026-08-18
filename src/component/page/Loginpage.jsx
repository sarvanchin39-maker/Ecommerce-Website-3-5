import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

function Loginpage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP LOGIN
    if (
      formData.email === "admin@gmail.com" &&
      formData.password === "123456"
    ) {
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Email or Password is incorrect");
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
        {/* ICON */}
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 text-2xl text-white">
          <FaUser />
        </div>

        {/* TITLE */}
        <div className="mt-5 text-center">
          <h1 className="text-3xl font-black text-gray-900">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Login to continue to EAT A LOT
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-5"
        >
          {/* EMAIL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-pink-500">
              <FaEnvelope className="text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <div className="flex items-center rounded-xl border border-gray-300 px-4 focus-within:border-pink-500">
              <FaLock className="text-gray-400" />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full bg-transparent px-3 py-3 outline-none"
              />
            </div>
          </div>

          {/* FORGOT */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-semibold text-pink-500 hover:text-pink-600"
            >
              Forgot Password?
            </button>
          </div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-pink-500 py-3 font-bold text-white transition duration-300 hover:bg-pink-600"
          >
            Login
          </button>
        </form>

        {/* REGISTER */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-bold text-pink-500 hover:text-pink-600"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}

export default Loginpage;