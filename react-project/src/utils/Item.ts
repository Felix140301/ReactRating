import type { Review } from "./Review";

export type Item = {
  id: string;
  name: string;
  description: string;
  image: string;
  reviews: Review[];
};
