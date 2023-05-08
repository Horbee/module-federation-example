import React, { DetailedHTMLProps, HTMLAttributes } from "react";
// @ts-ignore
import { useCart } from "shell/cart-store";

import { mockedProducts } from "../../products/data";
import { Product } from "../../products/type";

type FeaturedProductsProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

export default function FeaturedProducts(props: FeaturedProductsProps) {
  return (
    <div {...props} style={{ border: "1px dashed black", padding: "1rem" }}>
      <h4 className="title is-4">Check out our featured products</h4>
      <div className="columns">
        {mockedProducts
          .filter((p) => !!p.featured)
          .map((p) => (
            <div key={p.id} className="column">
              <FeaturedProductCard product={p} />
            </div>
          ))}
      </div>
    </div>
  );
}

type FeaturedProductCardProps = {
  product: Product;
};

export const FeaturedProductCard = ({ product }: FeaturedProductCardProps) => {
  const { store, dispatch } = useCart();

  const handleAddProduct = (product: Product) => {
    if (store.products.find((p: Product) => p.id === product.id)) {
      dispatch({
        type: "UPDATE_QUANTITY",
        payload: { action: "INCREMENT", productId: product.id },
      });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: product });
    }
  };

  return (
    <div className="media">
      <div className="media-left">
        <figure className="image is-128x128">
          <img
            src={
              product.imgUrl ?? "https://bulma.io/images/placeholders/96x96.png"
            }
            alt="thumb"
          />
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4 m-0">{product.name}</p>
        <p className="subtitle m-0 is-6">{product.description}</p>
        <p className="subtitle is-6">${product.price}</p>
        <button
          className="button is-warning is-active is-small"
          onClick={() => handleAddProduct(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
