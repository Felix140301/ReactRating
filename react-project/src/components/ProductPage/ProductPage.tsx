import { useLoaderData } from "react-router";
import type { Item } from "../../utils/Item";
import ReviewComponent from "../Review/ReviewComponent";
import ReviewForm from "../ReviewForm/ReviewForm";
export default function ProductPage() {
  const item = useLoaderData() as Item;
  return (
    <>
      <div className="bg-gray-300/50 backdrop-blur-md h-dvh w-dvw fixed flex flex-col justify-center items-center top-0 left-0 z-0">
        <button
          onClick={() => {
            window.open("/", "_self");
          }}
        >
          Close
        </button>
        <div
          className="max-h-[90%] max-w-[90%] min-w-[80%] z-10  bg-white 
      grid gap-4 grid-cols-2 grid-rows-2 items-center p-4 rounded-4xl"
        >
          <img className="rounded-2xl m-4" src={item.image} alt={item.name} />
          <div className="flex flex-col gap-4 p-4 justify-center items-center">
            <div className="text-2xl font-semibold">{item.name}</div>
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
          <div className="max-h-full h-full p-4">
            <ReviewForm itemId={item.id} />
          </div>
        </div>
      </div>
    </>
  );
}
