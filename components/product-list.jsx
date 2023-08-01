import ProductCard from "./ui/product-card";
import {products} from '@/constants/products'

const ProductList = () => {

  return (
    <div className="space-y-4">
      <h3 className="font-bold text-2xl">Productos destacados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
            <ProductCard key={product.id} data={product}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
