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
      className="bg-gray-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-2 font-bold uppercase tracking-wider text-orange-500">
              Customer Favorites
            </p>

            <h2 className="text-3xl font-black text-gray-900 md:text-4xl">
              Popular Foods
            </h2>

            <p className="mt-3 max-w-xl text-gray-500">
              Choose your favorite food from our
              delicious menu.
            </p>
          </div>

          <Link
            to="/shop"
            className="font-bold text-pink-500 hover:text-pink-500"
          >
            View All Menu →
          </Link>
        </div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
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