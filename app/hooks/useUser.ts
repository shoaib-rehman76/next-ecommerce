"use client";
import { useEffect, useState } from "react";
import { createLikedProduct } from "../queries/User";

export const useCreateLikedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<UserType[] | null>([]);
  const [mutate, setMutate] = useState("");

  console.log(mutate, "mutate custom");

  useEffect(() => {
    if (mutate) {
      (async () => {
        setIsLoading(true);
        const response = await createLikedProduct(mutate);
        setData(response);
        setIsLoading(false);
      })();
    }
  }, [mutate]);

  return { data, isLoading, setMutate, mutate };
};
