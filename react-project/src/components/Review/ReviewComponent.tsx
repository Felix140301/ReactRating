import type { Review } from "../../utils/Review";

export default function ReviewComponent(review: Review) {
  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-4 flex flex-col my-4">
        <p>Rating: {review.rating}</p>
        <p>{review.text}</p>
        <p>{review.createdAt.toLocaleString()}</p>
      </div>
    </>
  );
}
