import React, { useState } from "react";
import type { Review } from "../../utils/Review";
import type { Rating } from "../../utils/Rating";
import StarRating from "../StarRating/StarRating";
import postReview from "../../services/postReview";

interface ReviewFormProps {
  itemId: string;
  onSubmited: () => void;
}

export default function ReviewForm({ itemId, onSubmited }: ReviewFormProps) {
  const [text, setText] = useState("Leave your review here...");
  const [rating, setRating] = useState<Rating>(0);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const handleRating = (rating: number) => {
    setRating(rating as Rating);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const review: Review = {} as Review;
    review.id = itemId;
    review.rating = rating;
    review.text = text;
    if (
      review.text.trim() === "" ||
      review.text === "Leave your review here..."
    ) {
      setErrorMessage("The review cannot be empty");
      return;
    }

    if (rating === 0) {
      setErrorMessage("Please choose a rating");
      return;
    }

    try {
      await postReview(review);
    } catch (error) {
      setErrorMessage("Failed to submit review. Please try again later.");
      return;
    } finally {
      setText("");
      setRating(0);
      onSubmited();
    }
    setErrorMessage("");
    setSuccessMessage("Review submitted successfully!");
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
          onClick={() => {
            if (text === "Leave your review here...") {
              setText("");
            }
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <p className={"mx-2 text-lg text-red-500"}>{errorMessage}</p>
        {!errorMessage && (
          <p className={"mx-2 text-lg text-green-600"}>{successMessage}</p>
        )}
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
