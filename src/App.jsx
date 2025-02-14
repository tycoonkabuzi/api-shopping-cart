import "./App.css";
import { Routes, Route } from "react-router";
import ListOfProduct from "./components/ListOfProduct";
import Basket from "./components/Basket";
import { BasketProvider } from "./context/BasketContext";

function App() {
  return (
    <>
      <BasketProvider>
        <Routes>
          <Route path="/" element={<ListOfProduct />}>
            <Route path="basket" element={<Basket />} />
          </Route>
        </Routes>
      </BasketProvider>
    </>
  );
}

export default App;
