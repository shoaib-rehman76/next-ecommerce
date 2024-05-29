"use client";
import { useLoadAllData } from "../hooks/composeHooks/useLoadAllData";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data, isLoading } = useLoadAllData({ url: "products", flag: false });
  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Products</p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {!data || data.length === 0 ? (
            <p className="text-body-bold">No products found</p>
          ) : (
            <div className="flex flex-wrap justify-center gap-16">
              {data.map((product: ProductType) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductList;
