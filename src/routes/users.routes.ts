import { Router } from "express";

import { allUsers } from "../controllers/UserController/AllUsers";
import { createUser } from "../controllers/UserController/CreateUser";
import { updateUser } from "../controllers/UserController/updateUser";
import { deleteUser } from "../controllers/UserController/deleteUser";
import { getUser } from "../controllers/UserController/getUser";

import { loginHandler, profileHandler } from "../controllers/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
const router = Router()

router.post('/login', loginHandler)

router.get("/users", requireAuth, allUsers)
router.post("/users", requireAuth, createUser)
router.put("/users/:id", requireAuth, updateUser)
router.delete("/users/:id", requireAuth, deleteUser)
router.get("/users/:id", requireAuth, getUser)

export default router; 