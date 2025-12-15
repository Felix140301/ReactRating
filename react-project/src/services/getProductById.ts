import APIRoutes from "../config/endpoints";
import type { Item } from "../utils/Item";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL_PORT = import.meta.env.VITE_API_BASE_URL_PORT;

export default async function getProductById(itemId: string): Promise<Item> {
  const response = await fetch(
    `${BASE_URL}:${BASE_URL_PORT}${APIRoutes.getProduct(itemId)}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data: Item[] = await response.json();
  return data[0];
}
