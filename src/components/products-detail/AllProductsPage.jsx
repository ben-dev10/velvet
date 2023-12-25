/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import products from "../../data/products.json";
import { CircleDot, Info } from "lucide-react";

import BadgeUI from "../ui/BadgeUI";

function ProductCard({
  imgUrl,
  description,
  productName,
  price,
  starImg,
  badgeList,
}) {
  return (
    <div className="product-card group relative w-full bg-white rounded-lg border-[1.5px] md:border-2 p-4 hover:border-accent/50">
      <Link to={`/product/${productName}`} className="flex gap-3">
        <img
          src={imgUrl}
          alt={description}
          className="w-[100px] h-[70px] object-contain"
        />
        <div className="">
          <h3 className="h3">{productName}</h3>
          <p className="text-gray-500">{description}</p>
          <div className="flex gap-3 items-center mt-3">
            <p className="text-accent font-bold">{price}</p>
            <img src={starImg} alt="star-rating" className="h-[12px]" />
          </div>
          <div className="badges flex gap-1 flex-wrap mt-2">
            {badgeList.map((badge, index) => (
              <BadgeUI key={index} text={badge.type} accent={badge.badge} />
            ))}
          </div>
        </div>

        <CircleDot
          className="absolute right-2 top-2 text-accent hidden group-hover:block"
          size={13}
        />
      </Link>
    </div>
  );
}

export default function AllProductsPage() {
  return (
    <div className="min-h-[80vh]">
      <div className="wrapper container-4xl p-4 pb-10">
        <h2 className="h2 mb-1">All Products</h2>
        <p className="text-gray-500 px-2 mb-5">
          Browse 1000s of high quality products sourced form Velvet&apos;s own
          factories and our partners all very low prices.
        </p>
        <div className="products-list space-y-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              imgUrl={product.imgUrl}
              description={product.description}
              productName={product.productName}
              price={product.price}
              starImg={product["stars-img"]}
              badgeList={product.categories}
            />
          ))}
        </div>
        <div className="mt-10">
          <p className="flex items-center text-gray-400">
            <Info size={14} className="mr-1" />
            More products coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
