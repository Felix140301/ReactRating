import { useLoaderData } from "react-router";
import type { Item } from "../../utils/Item";
import ReviewComponent from "../Review/ReviewComponent";
import ReviewForm from "../ReviewForm/ReviewForm";
export default function ProductPage() {
  const item = useLoaderData() as Item;
  return (
    <>
      <div className="bg-gray-300/50 backdrop-blur-md h-dvh w-dvw fixed flex flex-col justify-center items-center top-0 left-0 z-10">
        <button
          onClick={() => {
            window.open("/", "_self");
          }}
        >
          Close
        </button>
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
          </div>
          <div className="max-h-full h-full p-4">
            <div className="text-xl font-semibold">Reviews</div>
            <div className="overflow-scroll max-h-[90%]">
              {item.reviews.map((review) => (
                <ReviewComponent key={review.id} {...review} />
              ))}
            </div>
          </div>
          <div className="max-h-full h-full min-w-full p-4">
            <ReviewForm itemId={item.id} />
          </div>
        </div>
      </div>
    </>
  );
}
