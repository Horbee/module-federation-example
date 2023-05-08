// @ts-ignore
import CheckoutPage from "checkout/CheckoutPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// @ts-ignore
import SearchPage from "search/SearchPage";
// @ts-ignore
import { CartStoreProvider } from "shell/cart-store";

import { AppLayout } from "./components/AppLayout";
import ErrorBoundary from "./components/ErrorBoundary";

// import { CartStoreProvider } from "./components/shared/stores/cart/cart-store";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: (
          <ErrorBoundary
            fallback={<h1>Something went wrong while loading SearchPage.</h1>}
          >
            <SearchPage />
          </ErrorBoundary>
        )
      },
      {
        path: "/checkout",
        element: (
          <ErrorBoundary
            fallback={<h1>Something went wrong while loading CheckoutPage.</h1>}
          >
            <CheckoutPage />
          </ErrorBoundary>
        )
      }
    ]
  }
]);

export const App = () => {
  return (
    <CartStoreProvider>
      <RouterProvider router={router} />
    </CartStoreProvider>
  );
};
