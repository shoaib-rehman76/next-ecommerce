import mongoose from "mongoose";

let isConnected: boolean = false;
export const connectToDB = async (): Promise<void> => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("MongoDb is already connected");
    return;
  }
  console.log("log db connection established");

  try {
    await mongoose.connect(process.env.URL || "", {
      dbName: "Eshop_Store",
    });
    isConnected = true;
    console.log("mongodb is connected");
  } catch (err) {
    console.log(err);
  }
};
