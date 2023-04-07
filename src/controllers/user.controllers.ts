import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
    res.send("hello world!");
} 