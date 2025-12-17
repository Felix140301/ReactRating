import Star from "../StarComponent/Star";

export default function StarRating(props: {
  handleRating?: (rating: number) => void;
  ratingValue: number;
}) {
  return (
    <>
      <div className="m-2 font-semibold flex items-center">
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                className="hidden"
                type="radio"
                value={ratingValue}
                name="rating"
                onClick={() => props.handleRating?.(ratingValue)}
              />
              <Star
                className={`${
                  ratingValue <= props.ratingValue
                    ? "text-amber-300"
                    : "text-gray-600"
                }`}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
