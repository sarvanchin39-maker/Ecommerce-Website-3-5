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
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="mb-10 text-center">
        <p className="mb-2 font-bold uppercase tracking-wider text-orange-500">
          Our Categories
        </p>

        <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
          Browse By Category
        </h2>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              handleCategory(category)
            }
            className={`rounded-full px-6 py-3 font-semibold transition ${
              selectedCategory === category
                ? "bg-pink-500 text-white shadow-lg shadow-orange-500/20"
                : "border border-gray-200 bg-white text-gray-600 hover:border-pink-500 hover:text-pink-500"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Category;