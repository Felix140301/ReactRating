import { cache } from "react";
import type { Item } from "../utils/Item";
import APIRoutes from "../config/endpoints";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL_PORT = import.meta.env.VITE_API_BASE_URL_PORT;

export const fetchItems = cache(async (): Promise<Item[]> => {
  {
    const response = await fetch(
      `${BASE_URL}:${BASE_URL_PORT}${APIRoutes.products}`
    );
    const data: Item[] = await response.json();
    return data;
    throw new Error("Could not fetch items");
  }
});
