import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import userRouter from "./routers/UserRouter.js";
const app = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use("/user", userRouter);
// Example route
app.get("/", (req, res) => {
  res.send("Server is running");
});

export default app;
