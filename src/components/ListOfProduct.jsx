import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router";
import { useBasket } from "../context/BasketContext";

const ListOfProduct = () => {
  const products = [
    { id: 1, productName: "iPhone 4s", price: 250 },
    { id: 2, productName: "Samsung Galaxy S10", price: 500 },
    { id: 3, productName: "Google Pixel 6", price: 600 },
    { id: 4, productName: "OnePlus 9", price: 700 },
    { id: 5, productName: "MacBook Air", price: 1200 },
  ];
  const [addedProduct, setAddedProduct] = useState([]);
  const [toggleBasket, setToggleBasket] = useState(false);
  const navigate = useNavigate();

  const { product, addProduct } = useBasket();

  const handleAddElement = (product) => {
    setAddedProduct((prev) => [
      ...prev,
      {
        id: product.id,
        productName: product.productName,
        price: product.price,
      },
    ]);
    addProduct(product);
  };

  return (
    <div>
      <button
        onClick={() => {
          setToggleBasket(!toggleBasket);
          navigate("/basket");
        }}
      >
        Baskets{" "}
        <span style={{ backgroundColor: "red", color: "white" }}>
          {product.length !== 0 ? product.length : ""}
        </span>
      </button>

      {toggleBasket && <Outlet />}
      <h1>List of Products</h1>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <ul>
            <li>
              {product.productName} Price: {product.price} $
            </li>
          </ul>

          <button onClick={() => handleAddElement(product)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ListOfProduct;
