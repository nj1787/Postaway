import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// METHOD 1 - Using IIFE's (Immediately Invoked Function Expression)

// semi colon used for cleaning purpose

// (async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URL}/${DB_NAME}`
//     );
//   } catch (error) {
//     console.log("ERROR: ", error);
//     throw error;
//   }
// })();

// METHOD 2

export const dbConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      "MongoDB Connected on Host: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error: ", error);
    process.exit(1);
  }
};
