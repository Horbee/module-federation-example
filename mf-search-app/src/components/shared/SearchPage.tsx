// @ts-ignore
import FeaturedProducts from "search/FeaturedProducts";
// @ts-ignore
import { useCart } from "shell/cart-store";

import { mockedProducts } from "../../products/data";
import { Product } from "../../products/type";

export default function SearchPage() {
  const { store, dispatch } = useCart();

  // throw Error("Hello");

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
    <section className="section">
      <div className="container">
        <h1 className="title my-5">Our Products</h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "25px",
        }}
      >
        {mockedProducts.map((p) => (
          <div key={p.id}>
            <div className="media">
              <div className="media-left">
                <figure className="image is-48x48">
                  <img
                    src={
                      p.imgUrl ??
                      "https://bulma.io/images/placeholders/96x96.png"
                    }
                    alt="something"
                  />
                </figure>
              </div>
              <div className="media-content">
                <p className="title is-4 m-0">{p.name}</p>
                <p className="subtitle m-0 is-6">{p.description}</p>
                <p className="subtitle is-6">${p.price}</p>
              </div>
              <div className="media-right">
                <button
                  className="button is-warning is-active is-small"
                  onClick={() => handleAddProduct(p)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section px-0">
        <FeaturedProducts />
      </div>
    </section>
  );
}
