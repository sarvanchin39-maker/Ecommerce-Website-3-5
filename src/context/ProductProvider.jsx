import { useMemo, useState } from "react";
import { ProductContext } from "./ProductContext";
import { ProductData } from "../data/ProductData";

function ProductProvider({ children }) {
  const [products] = useState(ProductData);

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  const [favorites, setFavorites] = useState([]);

  // ================= FILTER PRODUCTS =================
  const filterProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      const searchMatch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [products, selectedCategory, search]);

  // ================= GET CATEGORIES =================
  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(
        products.map((product) => product.category)
      ),
    ];
  }, [products]);

  // ================= ADD TO CART =================
  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentCart,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  // ================= REMOVE FROM CART =================
  const removeFromCart = (id) => {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== id)
    );
  };

  // ================= INCREASE QUANTITY =================
  const increaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // ================= DECREASE QUANTITY =================
  const decreaseQuantity = (id) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ================= FAVORITE =================
  const addToFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentFavorites;
      }

      return [...currentFavorites, product];
    });
  };

  const removeFromFavorite = (id) => {
    setFavorites((currentFavorites) =>
      currentFavorites.filter(
        (item) => item.id !== id
      )
    );
  };

  const toggleFavorite = (product) => {
    setFavorites((currentFavorites) => {
      const exists = currentFavorites.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return currentFavorites.filter(
          (item) => item.id !== product.id
        );
      }

      return [...currentFavorites, product];
    });
  };

  const isFavorite = (id) => {
    return favorites.some(
      (item) => item.id === id
    );
  };

  // ================= CART COUNT =================
  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // ================= TOTAL PRICE =================
  const totalPrice = cart.reduce(
    (total, item) =>
      total + Number(item.price) * item.quantity,
    0
  );

  // ================= FAVORITE COUNT =================
  const favoriteCount = favorites.length;

  const value = {
    // PRODUCTS
    products,
    filterProducts,

    // CATEGORY
    categories,
    selectedCategory,
    setSelectedCategory,

    // SEARCH
    search,
    setSearch,

    // CART
    cart,
    cartCount,
    totalPrice,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,

    // FAVORITE
    favorites,
    favoriteCount,
    addToFavorite,
    removeFromFavorite,
    toggleFavorite,
    isFavorite,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;