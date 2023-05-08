import "./products-grid.css";

import { ProductGridHeader } from "./ProductGridHeader";
import { ProductGridRow } from "./ProductGridRow";

import type { Product } from "../../types/Product";
/**
 *
 * this component should get the list of all product comming from a shared state
 */

interface Props {
  products: Product[];
}
export const ProductsGrid = ({ products }: Props) => {
  return (
    <div className="parent">
      <ProductGridHeader />
      {products.map((product) => {
        return <ProductGridRow key={product.id} product={product} />;
      })}
    </div>
  );
};
