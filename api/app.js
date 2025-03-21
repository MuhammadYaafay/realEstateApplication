import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRoute from "./routes/post.route.js";
import authRoute from "./routes/auth.route.js";
import testRoute from "./routes/test.route.js";
import userRoute from "./routes/user.route.js";
import dotenv from "dotenv";

dotenv.config(); // Loads environment variables from .env file

const app = express();

app.use(cors({origin:process.env.CLIENT_URL, credentials: true}));
app.use(cookieParser()); 
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/test", testRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
