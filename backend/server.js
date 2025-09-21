import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRouter from "./routes/productRoute.js";

dotenv.config();
const app = express();
app.use(express.json()); //! Middleware that allows for accepting JSON data, do not touch.
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Server is ready!");
});

app.use("/api/products", productRouter);

app.listen(port, () => {
  connectDB();
  console.log("Server started @ port: " + port);
});
