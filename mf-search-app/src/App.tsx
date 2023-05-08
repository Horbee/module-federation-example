import { BrowserRouter, Route, Routes } from "react-router-dom";
// @ts-ignore
import { CartStoreProvider } from "shell/cart-store";

import SearchPage from "./components/shared/SearchPage";

export const App = () => {
  return (
    <CartStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
    </CartStoreProvider>
  );
};
