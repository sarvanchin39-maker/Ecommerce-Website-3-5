import { Link } from "react-router-dom";
import { useProduct } from "../../context/ProductContext";
import ProductCard from "../../Product/ProductCard";

function FeaturedFood() {
  const { products } = useProduct();

  const featuredProducts = products
    .filter((product) => product.featured)
    .slice(0, 6);

  return (
    <section
      id="featured"
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-5 lg:px-8">
        
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-5 sm:mb-10 md:mb-12 md:flex-row md:items-end md:justify-between">
          
          <div className="text-center md:text-left">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-500 sm:text-sm">
              Customer Favorites
            </p>

            <h2 className="text-2xl font-black text-gray-900 sm:text-3xl md:text-4xl">
              Popular Foods
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-gray-500 sm:text-base md:mx-0">
              Choose your favorite food from our delicious menu.
            </p>
          </div>

          {/* VIEW ALL */}
          <div className="text-center md:text-right">
            <Link
              to="/shop"
              className="inline-block text-sm font-bold text-pink-500 transition hover:text-pink-600 sm:text-base"
            >
              View All Menu →
            </Link>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedFood;