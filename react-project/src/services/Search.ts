import type { Item } from "../utils/Item.ts";

export default function searchItems(items: Item[], query: string) {
  const lowerCaseQuery = query.toLowerCase();
  return items.filter(
    (item) =>
      item.name.toLowerCase().includes(lowerCaseQuery) ||
      item.description.toLowerCase().includes(lowerCaseQuery)
  );
}
