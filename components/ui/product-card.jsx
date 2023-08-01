"use client"

const ProductCard = ({ data }) => {

  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <img
          src={data?.img}
          alt=""
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
