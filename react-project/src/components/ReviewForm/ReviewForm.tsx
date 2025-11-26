import postReview from "../../services/PostReview";
import React, { useState } from "react";
import type { Review } from "../../utils/Review";
import type { Rating } from "../../utils/Rating";
import StarRating from "../StarRating/StarRating";

export default function ReviewForm({ itemId }: { itemId: string }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState<Rating>(1);

  const handleRating = (rating: number) => {
    console.log("Rating selected:", rating);
    setRating(rating as Rating);
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const review: Review = {} as Review;
    review.id = itemId;
    review.text = text;
    review.rating = rating;
    postReview(review);
  }

  return (
    <>
      <div className="text-lg font-semibold mb-2">Leave a Review</div>
      <form
        className="flex flex-col bg-gray-300 rounded-2xl h-[90%]"
        onSubmit={handleSubmit}
      >
        <textarea
          className="p-2 m-2 rounded-2xl resize-none bg-white h-2/3"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>

        <StarRating ratingValue={rating} handleRating={handleRating} />
        <div className="flex justify-end items-end m-2">
          <button
            className="px-4 py-2 font-semibold bg-emerald-700 text-white rounded-2xl text-align-center hover:bg-emerald-800"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
