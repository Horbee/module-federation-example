import "./checkout.css";

import { useMemo } from "react";
// @ts-ignore
import FeaturedProducts from "search/FeaturedProducts";
// @ts-ignore
import { useCart } from "shell/cart-store";

// wrap suspense in the error bundary component
import { CartResume } from "../components/CartResume";
import { ProductsGrid } from "../components/products-grid/ProductsGrid";
import { ICartContext } from "../types/cart-store";

const CheckoutPage = () => {
  const {
    store: { products },
  }: ICartContext = useCart();

  const subtotal = Number(
    useMemo(
      () =>
        products.reduce(
          (total, product) => total + product.quantity * product.price,
          0
        ),
      [products]
    ).toFixed(2)
  );

  const discount = useMemo(() => randomlyCalculateDiscountPercentage(), []);

  return (
    <>
      <div className="section px-0">
        <h1 className="title is-3 has-text-weight-semi-bold">Cart</h1>

        <div className="columns">
          <div className="column is-8">
            <ProductsGrid products={products} />
          </div>
          <div className="column is-4">
            <CartResume
              subtotal={subtotal}
              discount={products.length === 0 ? 0 : discount}
            />
          </div>
        </div>
      </div>
      <div className="section px-0">
        <FeaturedProducts />
      </div>
    </>
  );
};

const randomlyCalculateDiscountPercentage = () => {
  const possibleDiscountPercentage = [0, 5, 10, 15, 20, 40];

  /** random value between 0-6 */
  const ramdomValue = Math.round(Math.random() * 5);

  return possibleDiscountPercentage[ramdomValue];
};

export default CheckoutPage;
