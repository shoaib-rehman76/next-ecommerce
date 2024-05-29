import {
  axiosInstanceClient,
  axiosInstanceServer,
} from "../axiosInstance/axiosInstance";

export const loadProductDetails = async (
  productId: string
): Promise<ProductType | null> => {
  try {
    const product = await axiosInstanceServer.get(`products/${productId}`);
    return product.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
