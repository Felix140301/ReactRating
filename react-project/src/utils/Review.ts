import type { Rating } from "./Rating";

export default class Review {
  id!: string;
  text!: string;
  rating!: Rating;
  createdAt!: Date;
}
