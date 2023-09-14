import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

// 게시글 작성
router.post("/", async (req, res, next) => {
  const { title, content } = req.body;

  const post = await prisma.posts.create({ data: { title, content } });

  return res
    .status(200)
    .json({ id: post.id, title: post.title, content: post.content });
});

// 게시글 전체 조회
router.get("/", async (req, res, next) => {
  const posts = await prisma.posts.findMany({
    select: { id: true, title: true, content: true },
  });

  return res.status(200).json(posts);
});

// 게시글 수정
router.put("/:postId", async (req, res, next) => {
  const id = req.params.postId;
  const { title, content } = req.body;

  const post = await prisma.posts.update({
    where: { id: +id },
    data: { title, content, updatedAt: new Date() },
  });

  return res
    .status(200)
    .json({ id: post.id, title: post.title, content: post.content });
});

// 게시글 삭제
router.delete("/:postId", async (req, res, next) => {
  const id = req.params.postId;

  await prisma.posts.delete({ where: { id: +id } });

  return res.status(200).json({ message: "success" });
});

export default router;
