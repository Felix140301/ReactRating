import type { Review } from "../../utils/Review";
import StarRating from "../StarRating/StarRating";
import { useState, useRef, useLayoutEffect } from "react";

export default function ReviewComponent(review: Review) {
  const date = new Date(review.createdAt);
  const [expanded, setExpanded] = useState<boolean>(false);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [showToggle, setShowToggle] = useState<boolean>(false);

  useLayoutEffect(() => {
    if (
      textRef.current &&
      textRef.current.scrollHeight > textRef.current.clientHeight + 1
    ) {
      setShowToggle(true);
    }
  }, [review.text]);

  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 flex flex-col my-4 mx-2">
      <div className="flex justify-between items-baseline mb-2">
        <div className="flex gap-0 justify-start items-center text-lg font-semibold">
          <p>Rating: {review.rating}</p>
          <StarRating ratingValue={review.rating} />
        </div>
        <p>{date.toLocaleDateString()}</p>
      </div>

      <div>
        <p
          ref={textRef}
          style={
            expanded
              ? { height: "auto" }
              : { maxHeight: "2.5rem", overflow: "hidden" }
          }
        >
          {review.text}
        </p>

        {showToggle && (
          <button
            className="text-slate-600 mt-1"
            onClick={() => setExpanded((prev) => !prev)}
          >
            See {expanded ? "less" : "more"}
          </button>
        )}
      </div>
    </div>
  );
}
