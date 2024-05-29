import toast from "react-hot-toast";
import { https, httpsClent } from "../axiosInstance/axiosInstance";

export const loadAllCollections = async ({
  url,
  flag = false,
}: {
  url: string;
  flag: boolean;
}): Promise<collectionsType[] | null> => {
  try {
    if (!flag) {
      const res = await https.get(url);
      return res.data;
    } else {
      const res = await httpsClent.get(url);
      return res.data;
    }
  } catch (error: any) {
    toast.error(error.message);
    return null;
  }
};
