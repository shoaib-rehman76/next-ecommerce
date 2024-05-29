"use client";
import { loadAllCollections } from "@/app/queries/Collections";
import { useEffect, useState } from "react";

export const useLoadAllData = ({
  url,
  flag,
}: {
  url: string;
  flag: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await loadAllCollections({ url, flag });
      if (response) {
        setData(response);
      }
      setIsLoading(false);
    })();
  }, [url]);

  return { data, isLoading };
};
