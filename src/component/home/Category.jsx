import { useProduct } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

function Category() {
  const {
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useProduct();

  const navigate = useNavigate();

  const handleCategory = (category) => {
    setSelectedCategory(category);
    navigate("/shop");
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 sm:py-16 lg:px-8 lg:py-20">
      
      {/* TITLE */}
      <div className="mb-7 text-center sm:mb-10">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-500 sm:text-sm">
          Our Categories
        </p>

        <h2 className="text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
          Browse By Category
        </h2>
      </div>

      {/* CATEGORY BUTTONS */}
      <div className="flex w-full flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300
              sm:px-5 sm:py-2.5 sm:text-base
              md:px-6 md:py-3
              ${
                selectedCategory === category
                  ? "bg-amber-300 text-white shadow-lg shadow-pink-500/20"
                  : "border border-gray-200 bg-white text-gray-600 hover:border-amber-300 hover:bg-amber-100"
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

    </section>
  );
}

export default Category;