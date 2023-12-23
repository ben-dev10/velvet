import { Info } from "lucide-react";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function ProductDetail({
  productName,
  description,
  price,
  imgUrl,
}) {
  return (
    <div className="products-detail-page p-4 min-h-[80vh]">
      <div className="wrapper p-2 container-4xl">
        <div className="flex gap-5">
          <img
            src={imgUrl}
            alt={description}
            className="w-[110px] h-[100px] md:w-[200px] md:h-[190px] object-contain shrink-0"
          />
          <div className="description self-start pb-5 bg-[#FCFDFF] p-2 px-4 w-full rounded-md max-h-max">
            <h2 className="h2">{productName}</h2>
            <p className="text-gray-500">{description}</p>
            <p className="text-accent font-bold mt-2">
              <span className="text-black">Price:</span> {price}
            </p>

            <div className="mt-8">
              <button className="w-full p-2 bg-accent hover:bg-[hsl(253,51%,45%)] text-white rounded-md shadow-md">
                Add to cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Link
            to={"/products/all-products"}
            className="text-accent hover:underline"
          >
            See all products &rarr;
          </Link>
        </div>

        <div className="mt-10">
          <p className="flex items-center text-gray-400">
            <Info size={14} className="mr-1" />
            Velvet is committed to buyer parity. Prices seen here are adjusted
            depending on country&apos;s origin.
          </p>
        </div>
      </div>
    </div>
  );
}
