import { Product } from "./Product";

type AddProductAction = { type: "ADD_PRODUCT"; payload: Product };
type RemoveProductAction = {
  type: "REMOVE_PRODUCT";
  payload: { productId: number };
};
type UpdateProductQuantityAction = {
  type: "UPDATE_QUANTITY";
  payload: { action: "INCREMENT" | "DECREMENT"; productId: number };
};

export type Actions =
  | AddProductAction
  | RemoveProductAction
  | UpdateProductQuantityAction;

export type State = {
  products: Product[];
};

export interface ICartContext {
  store: State;
  dispatch: React.Dispatch<Actions>;
}
