import { createContext, useContext, useState } from "react";

const BasketContext = createContext();
export const BasketProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const addProduct = (newProduct) => {
    setProduct((prevProduct) => [...prevProduct, newProduct]);
  };
  const removeProduct = (productId) => {
    setProduct((prevProduct) =>
      prevProduct.filter((toBeRemoved) => toBeRemoved.id !== productId)
    );
  };

  return (
    <BasketContext.Provider value={{ product, addProduct, removeProduct }}>
      {children}
    </BasketContext.Provider>
  );
};
export const useBasket = () => useContext(BasketContext);
