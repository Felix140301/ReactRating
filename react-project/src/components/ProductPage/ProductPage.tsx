import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import type { Item } from "../../utils/Item";
import type { Review } from "../../utils/Review";
import ReviewComponent from "../Review/ReviewComponent";
import ReviewForm from "../ReviewForm/ReviewForm";
import getProductById from "../../services/getProductById";

export default function ProductPage() {
  let item = useLoaderData() as Item;
  const [reviews, setReviews] = useState<Review[]>(item.reviews);
  const [rating, setRating] = useState<number>(0);

  useEffect(() => {
    const average: number = Number(
      Number(
        reviews.reduce((acc, review) => acc + review.rating, 0) /
          (reviews.length || 1)
      ).toFixed(2)
    );
    setRating(average);
  }, [reviews]);

  const handleSubmitEvent = async () => {
    const updatedItem: Item = await getProductById(item.id);
    console.log(updatedItem);
    setReviews(updatedItem.reviews);
  };

  return (
    <>
      <div className="bg-gray-300/50 backdrop-blur-md h-dvh w-dvw fixed flex flex-col justify-center items-center top-0 left-0 z-10">
        <button
          className="w-dvw h-dvh fixed z-10"
          onClick={() => {
            window.open("/", "_self");
          }}
        ></button>
        <div
          className="max-h-[90%] max-w-[90%] md:min-w-[80%] relative z-20 bg-white md:p-4 sm:p-2
      md:grid gap-4 md:grid-cols-2 md:grid-rows-2 flex flex-col  items-center overflow-y-scroll  mt-2 rounded-4xl"
        >
          <img
            className="rounded-2xl max-w-[80%]"
            src={item.image}
            alt={item.name}
          />
          <div className="flex flex-col gap-4 p-4 justify-center items-center">
            <div className="md:text-2xl sm:text-lg font-semibold">
              {item.name}
            </div>
            <p>{item.description}</p>
            <p>{rating}</p>
            <progress
              className="rounded-2xl w-1/2 h-1/6 [&::-webkit-progress-bar]:rounded-2xl
           [&::-webkit-progress-value]:rounded- 2xl [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-amber-300 
           [&::-moz-progress-bar]:bg-amber-300 [&::-moz-progress-bar]:rounded-2xl"
              value={Number(rating)}
              max="5"
            ></progress>

            <div className="text-xl font-bold">{}</div>
          </div>
          <div className="max-h-full h-full p-4">
            <div className="text-xl font-semibold">Reviews</div>
            <div className="overflow-scroll max-h-[90%]">
              {reviews.map((review) => (
                <ReviewComponent key={review.id} {...review} />
              ))}
            </div>
          </div>
          <div className="max-h-full h-full min-w-full p-4">
            <ReviewForm itemId={item.id} onSubmited={handleSubmitEvent} />
          </div>
        </div>
      </div>
    </>
  );
}
