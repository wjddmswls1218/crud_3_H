import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
import helmet from "helmet";
import bodyParser from "body-parser";
import morgan from "morgan";
import connect from "../db";
import globalRouter from "./router/globalRouter";

const PORT = process.env.PORT;
const app = express();
connect();

app.set("view wngine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan(`dev`));
app.use(helmet());
app.use(express.static(path.join(__dirname, "assets")));

app.use("/", globalRouter);

app.listen(PORT, () => {
  console.log(`Server Start ${PORT}`);
});
