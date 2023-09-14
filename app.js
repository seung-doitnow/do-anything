import express from "express";
import dotenv from "dotenv/config.js";
import postsRouter from "./routes/posts.router.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/posts", postsRouter);

app.listen(PORT, () => {
  console.log(`Server listen ${PORT}`);
});
