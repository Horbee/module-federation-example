import { createContext, useContext, useMemo, useReducer } from 'react'

export type Product = {
  id: number;
  name: string;
  quantity: number;
  description: string;
  price: number;
  color: string;
  size: string;
};

export interface ICartContext {
  store: State;
  dispatch: React.Dispatch<Actions>;
}

const CartContext = createContext<ICartContext | undefined>(undefined);

type AddProductAction = { type: "ADD_PRODUCT"; payload: Product };
type RemoveProductAction = {
  type: "REMOVE_PRODUCT";
  payload: { productId: number };
};
type UpdateProductQuantityAction = {
  type: "UPDATE_QUANTITY";
  payload: { action: "INCREMENT" | "DECREMENT"; productId: number };
};

type Actions =
  | AddProductAction
  | RemoveProductAction
  | UpdateProductQuantityAction;
type State = {
  products: Product[];
};

const initialState: State = {
  products: []
};
const cartReducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return { ...state, products: [action.payload, ...state.products] };

    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload.productId
        )
      };

    case "UPDATE_QUANTITY":
      const { productId } = action.payload;
      if (action.payload.action === "INCREMENT") {
        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id !== productId) return product;

            return { ...product, quantity: product.quantity + 1 };
          })
        };
      } else {
        const foundProduct = state.products.find(
          (product) => product.id === productId
        )!;
        if (foundProduct.quantity === 1) return state;

        return {
          ...state,
          products: state.products.map((product) => {
            if (product.id !== productId) return product;

            return { ...product, quantity: product.quantity - 1 };
          })
        };
      }

    default:
      return state;
  }
};

interface Props {
  children: React.ReactNode;
}
export const CartStoreProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const value = useMemo<ICartContext>(
    () => ({ store: state, dispatch }),
    [state]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error("Make sure you call this hook under the CartProvider");
  }

  return context;
};
