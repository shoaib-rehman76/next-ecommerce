"use client";

import Image from "next/image";
import Link from "next/link";
import { useLoadAllData } from "../hooks/composeHooks/useLoadAllData";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { Heart } from "lucide-react";
import { useCreateLikedProduct } from "../hooks/useUser";
import { useRouter } from "next/navigation";
import {
  axiosInstanceClient,
  httpsClent,
} from "../axiosInstance/axiosInstance";

interface ProductCardProps {
  product: ProductType;
  updateSignedInUser?: (updatedUser: UserType) => void;
}

const ProductCard = ({ product, updateSignedInUser }: ProductCardProps) => {
  const { user } = useUser();
  const [signedInUser, setSignedInUser] = useState<UserType[] | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const { data, isLoading } = useLoadAllData({ url: "users", flag: true });
  const { data: wishlistData, setMutate, mutate } = useCreateLikedProduct();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setSignedInUser(data);
      setIsLiked(data.wishlist?.includes(product._id));
    }
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     setSignedInUser(data);
  //     setIsLiked(data.wishlist?.includes(product._id));
  //   }
  // }, [user, isLiked]);

  const handleLike = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (!user) {
      return router.push("/sign-in");
    }

    try {
      const res = await httpsClent.post("/users/wishlist", {
        productId: product._id,
      });
      const updatedUser = await res.data;
      // setMutate(product._id);
      setSignedInUser(updatedUser);
      setIsLiked(updatedUser.wishlist?.includes(product._id));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(mutate, "mutate");

  return (
    <Link
      href={`/products/${product._id}`}
      className="w-[220px] flex flex-col gap-2"
    >
      <Image
        src={product.media[0]}
        alt="product"
        width={250}
        height={300}
        className="h-[250px] rounded-lg object-cover"
      />
      <div>
        <p className="text-base-bold">{product.title}</p>
        <p className="text-small-medium text-grey-2">{product.category}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-body-bold">${product.price}</p>
        {/* <HeartFavorite
          product={product}
          //   updateSignedInUser={updateSignedInUser}
        /> */}
        <button onClick={handleLike}>
          <Heart fill={`${isLiked ? "red" : "white"}`} />
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
