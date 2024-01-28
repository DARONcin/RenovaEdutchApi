import express from "express";
import morgan from "morgan";
//routes
import storeRoutes from "./routes/store.routes"

const app = express();
//setting
app.set("port", 4000);

//middlwares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use("/products", storeRoutes);

export default app;