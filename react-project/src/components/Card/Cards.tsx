import Item from "../../utils/Item";

export default function Card(product: Item) {
  const rating = (
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length
  ).toFixed(2);

  const totalReviews = product.reviews.length;
  return (
    <>
      <div
        className="flex border-2 border-gray-300 rounded-lg pb-4 flex-col items-center my-4
       bg-white shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out"
      >
        <img
          src={`${product.image}?random=${product.id.length}`}
          alt={product.name}
        />
        <span className="text-2xl font-semibold m-4">{product.name}</span>
        <div className="flex justify-between mx-2">
          <div className="flex flex-col items-start justify-around ">
            <p className="">Rating: {rating}</p>
            <progress
              className="rounded-2xl w-1/2 h-1/6 [&::-webkit-progress-bar]:rounded-2xl
               [&::-webkit-progress-value]:rounded- 2xl [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-amber-300 
               [&::-moz-progress-bar]:bg-amber-300 [&::-moz-progress-bar]:rounded-2xl"
              value={Number(rating)}
              max="5"
            ></progress>
          </div>
          <div className="s">Reviews: {totalReviews}</div>
        </div>
      </div>
    </>
  );
}
