import express from "express";
import dotenv from "dotenv/config.js";
import mongoose from "mongoose";
import userRouter from "./routes/users.js";

const DB_URL = process.env.DB_URL;
const DB_NAME = process.env.DB_NAME;
const PORT = process.env.PORT;
const app = express();

mongoose.connect(DB_URL, { dbName: DB_NAME })
    .catch((error) => console.log(error))
    .then(() => console.log("DB 연결 성공"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`${PORT} 서버가 열렸습니다.`);
});