import type Review from "./Review";

export default class Item {
  id!: string;
  name!: string;
  description!: string;
  image!: string;
  reviews!: Review[];
}
