import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./Routers/auth.js";
import userRoute from "./Routers/users.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;
const corsOptions = {
  origin: true,
  credentials: true,
};

// Database Connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Database Connected");
  } catch (error) {
    console.log("MongoDB Database Connection Failed");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

// Routers
app.use("/auth", authRoute);
app.use("/users", userRoute);

//Server
app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
