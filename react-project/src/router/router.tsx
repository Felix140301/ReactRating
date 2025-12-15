import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";
import MainPage from "../components/MainPage/MainPage";
import ProductPage from "../components/ProductPage/ProductPage";
import { fetchItems } from "../services/getItems";
import type { Item } from "../utils/Item";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    children: [
      {
        path: ":itemId",
        loader: async ({ params }) => {
          const items = await fetchItems();
          const item: Item | undefined = items.find(
            (item) => item.id.toString() === params.itemId
          );
          return item;
        },
        Component: ProductPage,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
