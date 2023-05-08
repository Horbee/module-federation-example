import { IoAddOutline, IoRemoveOutline, IoTrashOutline } from "react-icons/io5";
// @ts-ignore
import { useCart } from "shell/cart-store";

import { ICartContext } from "../../types/cart-store";

import type { Product } from "../../types/Product";

interface Props {
  product: Product;
}
export const ProductGridRow = ({ product }: Props) => {
  const { dispatch }: ICartContext = useCart();

  return (
    <>
      <div className="py-4 border-bottom-grey-50">
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img
                alt="product"
                src={
                  product.imgUrl ??
                  "https://bulma.io/images/placeholders/128x128.png"
                }
              />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p className="title is-6 is-spaced">{product.name}</p>
              <p className="subtitle is-6 has-text-grey">
                {product.color} | {product.size}
              </p>
            </div>
          </div>
        </article>
      </div>
      <div className="py-4 border-bottom-grey-50">
        <div className="mb-4 is-flex is-align-content-center">
          <span
            className="button"
            onClick={() => {
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: {
                  action: "DECREMENT",
                  productId: product.id,
                },
              });
            }}
          >
            <span className="icon">
              <IoRemoveOutline />
            </span>
          </span>

          <span className="mx-5 py-2">{product.quantity}</span>
          <span
            className="button"
            onClick={() => {
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: {
                  action: "INCREMENT",
                  productId: product.id,
                },
              });
            }}
          >
            <span className="icon">
              <IoAddOutline />
            </span>
          </span>
        </div>

        <span
          className="button has-background-danger has-text-white"
          onClick={() => {
            dispatch({
              type: "REMOVE_PRODUCT",
              payload: { productId: product.id },
            });
          }}
        >
          <span className="icon">
            <IoTrashOutline />
          </span>
          <span>Remove</span>
        </span>
      </div>
      <div className="py-4 has-text-weight-bold border-bottom-grey-50">
        ${product.price}
      </div>
    </>
  );
};
