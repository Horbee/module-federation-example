// @ts-ignore
import CheckoutPage from "checkout/CheckoutPage";
// @ts-ignore
import Navigation from "checkout/Navigation";
import React, { Suspense } from "react";
// @ts-ignore
import { useCart } from "shell/cart-store";

import type { ICartContext } from "./types/cart-store";

// @ts-ignore
// const FeaturedProducts = React.lazy(() => import("search/FeaturedProducts"));

export const CheckoutPageLocal = () => {
  const {
    store: { products },
  }: ICartContext = useCart();

  return (
    <div className="container pt-4">
      <Suspense fallback={<div>Loading...</div>}>
        <Navigation addedProductsTotal={products.length} />
        <CheckoutPage products={products} />
        {/* <div className="section px-0">
          <FeaturedProducts />
        </div> */}
      </Suspense>
    </div>
  );
};
