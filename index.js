import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { bookingRouter } from "./Routes/Booking.js";

dotenv.config();

const PORT = process.env.PORT || 9000;
const app = express();
app.use(express.json());
app.use(cors());

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("MongoDB is connected");
  return client;
}
const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hi Lokesh, the app is running");
});

app.use("/rooms", bookingRouter);

app.listen(PORT, () => console.log("Server started on port", PORT));

export { client };
