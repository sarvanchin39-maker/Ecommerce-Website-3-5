import {
  createContext,
  useContext,
} from "react";

// CREATE PRODUCT CONTEXT
export const ProductContext = createContext(null);

// CUSTOM HOOK
export const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error(
      "useProduct must be used inside ProductProvider"
    );
  }

  return context;
};