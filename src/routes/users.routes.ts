import { Router } from "express";
import {
    createUser,
    deleteUser,
    getUser,
    getUsers,
    updateUser
} from "../controllers/user.controllers";

import { loginHandler, profileHandler } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
const router = Router()

router.post('/login', loginHandler)

router.get("/users", requireAuth, getUsers)
router.post("/users", requireAuth, createUser)
router.put("/users/:id", requireAuth, updateUser)
router.delete("/users/:id", requireAuth, deleteUser)
router.get("/users/:id", requireAuth, getUser)

export default router; 