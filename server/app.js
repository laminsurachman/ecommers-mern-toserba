import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import session from "express-session";
import passport from "passport";
import User from "./models/User.js";
import userRoutes from "./routes/UserRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";
import CartRoutes from "./routes/CartRoutes.js";
import ShippingRoutes from "./routes/ShippingRoutes.js";
import paymentRoutes from "./routes/PaymentRoutes.js";

const app = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 3 * 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/user", userRoutes);
app.use("/products", productRoutes);
app.use("/cart", CartRoutes);
app.use("/shipping", ShippingRoutes);
app.use("/payment", paymentRoutes);

export default app;
