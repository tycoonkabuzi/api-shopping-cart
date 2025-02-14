import { useBasket } from "../context/BasketContext";

const Basket = () => {
  const { product, removeProduct } = useBasket();
  const total = product.reduce(
    (total, productPrice) => total + productPrice.price,
    0
  );

  return (
    <div
      style={{
        width: "400px",
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      {product.length !== 0 ? (
        product.map((newProduct) => (
          <div
            key={product.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <p>{newProduct.productName}</p>
            <button onClick={() => removeProduct(newProduct.id)}>Delete</button>
          </div>
        ))
      ) : (
        <p> Basket is empty</p>
      )}

      <h2>{total ? `Total : ${total} $` : ``}</h2>
    </div>
  );
};
export default Basket;
