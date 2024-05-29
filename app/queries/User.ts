import toast from "react-hot-toast";
import { httpsClent } from "../axiosInstance/axiosInstance";

export const createLikedProduct = async (
  productId: string
): Promise<UserType[] | null> => {
  console.log(productId, "productId");

  try {
    const res = await httpsClent.post(
      "users/wishlist",
      JSON.stringify(productId)
    );
    return res.data;
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
};
