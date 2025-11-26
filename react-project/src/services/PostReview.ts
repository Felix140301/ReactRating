import Review from "../utils/Review";
import APIRoutes from "../config/endpoints";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;
const BASE_URL_PORT = import.meta.env.VITE_API_BASE_URL_PORT;

export default function postReview(review: Review) {
  try {
    fetch(`${BASE_URL}:${BASE_URL_PORT}${APIRoutes.postReview(review.id)}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: review.text, rating: review.rating }),
    });
  } catch (error) {
    console.error("Error posting review:", error);
  }
}
