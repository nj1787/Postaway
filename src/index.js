import { app } from "./app.js";
import { dbConnect } from "./db/connection.js";

import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

dbConnect()
  .then(() => {
    app.listen(process.env.PORT || 3500, () => {
      console.log("Server Running On Port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
