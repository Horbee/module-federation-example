import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
// @ts-ignore
import { CartStoreProvider } from "shell/cart-store";

import { CheckoutPageLocal } from "./CheckoutPageLocal";

function App() {
  return (
    <CartStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CheckoutPageLocal />} />
        </Routes>
      </BrowserRouter>
    </CartStoreProvider>
  );
}

export default App;
