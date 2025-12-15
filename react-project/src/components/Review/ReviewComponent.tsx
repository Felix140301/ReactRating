import type { Review } from "../../utils/Review";

export default function ReviewComponent(review: Review) {
  const date = new Date(review.createdAt);

  return (
    <>
      <div className="border-2 border-gray-300 rounded-lg p-4 flex flex-col my-4">
        <p>{date.toLocaleDateString()}</p>
        <p>Rating: {review.rating}</p>
        <p>{review.text}</p>
      </div>
    </>
  );
}
