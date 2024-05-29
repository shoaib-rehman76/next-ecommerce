"use client";
import Link from "next/link";
import Image from "next/image";
import { useLoadAllData } from "../hooks/composeHooks/useLoadAllData";

const Collections = () => {
  const { data, isLoading } = useLoadAllData({
    url: "collections",
    flag: false,
  });

  return (
    <div className="flex flex-col items-center gap-10 py-8 px-5">
      <p className="text-heading1-bold">Collections</p>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <div>
          {!data || data.length === 0 ? (
            <p className="text-body-bold">No collections found</p>
          ) : (
            <div className="flex flex-wrap items-center justify-center gap-8">
              {data.map((collection: collectionsType) => (
                <Link
                  href={`/collections/${collection._id}`}
                  key={collection._id}
                >
                  <Image
                    key={collection._id}
                    src={collection.image + ""}
                    alt={collection.title}
                    width={350}
                    height={200}
                    className="rounded-lg cursor-pointer"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Collections;
