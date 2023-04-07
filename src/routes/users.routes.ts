import { Router } from "express";
import { createUser } from "../controllers/user.controllers";
const router = Router()

router.get("/user", createUser)

export default router;