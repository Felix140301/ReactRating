import type { Rating } from "./Rating";

export type Review = {
  id: string;
  text: string;
  rating: Rating;
  createdAt: Date;
};
