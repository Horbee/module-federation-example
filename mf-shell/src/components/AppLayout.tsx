import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
// @ts-ignore
import { useCart } from "shell/cart-store";

import { ICartContext } from "./shared/stores/cart/cart-store";

// @ts-ignore
const Navigation = React.lazy(() => import("checkout/Navigation"));

export const AppLayout = () => {
  const {
    store: { products }
  }: ICartContext = useCart();

  return (
    <div className="container pt-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation
          addedProductsTotal={products.length}
          navLinks={[{ title: "Search", to: "/" }]}
          checkoutLink="/checkout"
        />
      </Suspense>

      <Outlet />
    </div>
  );
};
