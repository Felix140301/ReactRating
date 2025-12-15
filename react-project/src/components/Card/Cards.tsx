import type { Item } from "../../utils/Item";
import { useExtractColors } from "react-extract-colors";

export default function Card(product: Item) {
  const rating = (
    product.reviews.reduce((acc, review) => acc + review.rating, 0) /
    product.reviews.length
  ).toFixed(2);

  const imageUrl = `${product.image}?random=${product.id.length}`;
  const totalReviews = product.reviews.length;
  const { colors, dominantColor, darkerColor, lighterColor, loading, error } =
    useExtractColors(imageUrl);
  const extractedColor = lighterColor;
  const primaryColor =
    extractedColor?.substring(0, extractedColor.length - 4) + " 0.5)";
  const bordercolor =
    extractedColor?.substring(0, extractedColor.length - 4) + " 0.8)";
  return (
    <>
      <div
        className="flex border-2 border-transparent rounded-lg relative pb-4 flex-col items-center my-4
       bg-white hover:shadow-2xl transition-shadow hover:transition duration-300 ease-in"
        onMouseEnter={(e) => {
          if (primaryColor && bordercolor)
            e.currentTarget.style.backgroundColor = primaryColor;
          e.currentTarget.style.borderColor = bordercolor;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "white";
          e.currentTarget.style.borderColor = "transparent";
        }}
      >
        <img className=" rounded-2xl p-2" src={imageUrl} alt={product.name} />
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
