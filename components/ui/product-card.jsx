"use client"

import Image from "next/image";


const ProductCard = ({ data }) => {

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={data?.img}
          alt=""
          height={290}
          width={290}
          className="aspect-square object-cover rounded-md"
        />
      </div>
      <div>
        <p className="font-semibold text-lg">{data.name}</p>
      </div>
    </div>
  );
};

export default ProductCard;
