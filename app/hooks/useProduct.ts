import { useEffect, useState } from "react";
import { loadProductDetails } from "../queries/products";

export const useLoadSingleProduct = (id: string) => {
  const [data, setData] = useState<ProductType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await loadProductDetails(id);
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    })();
  }, [id]);

  return { data, isLoading };
};
