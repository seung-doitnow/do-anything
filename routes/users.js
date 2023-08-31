import express from "express";
import User from "./../schemas/user.js";

const userRouter = express.Router();

// 회원 전체 목록 조회 API
userRouter.get('/', async (req, res, next) => {
    const projection = {
        _id: 0,
        userId: 1,
        name: 1,
        email: 1,
        pw: 1,
    }

    const users = await User.find({}, projection).exec();

    return res.status(200).json(users);
})

// 한 회원의 정보 조회
userRouter.get('/:userId', async (req, res, next) => {
    const projection = {
        _id: 0,
        userId: 1,
        name: 1,
        email: 1,
        pw: 1,
    }

    const user = await User.findOne({ userId: req.params.userId }, projection).exec();

    return res.status(200).json(user);
})

export default userRouter;