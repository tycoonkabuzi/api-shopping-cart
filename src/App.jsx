import "./App.css";
import { Routes, Route } from "react-router";
import ListOfProduct from "./components/ListOfProduct";
import Basket from "./components/Basket";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListOfProduct />}>
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
