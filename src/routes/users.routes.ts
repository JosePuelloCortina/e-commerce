import { Router } from "express";

import { AllUsers } from "../controllers/userController/AllUsers";
import { CreateUser } from "../controllers/userController/CreateUser";
import { UpdateUser } from "../controllers/userController/UpdateUser";
import { DeleteUser } from "../controllers/userController/DeleteUser";
import { GetUser } from "../controllers/userController/GetUser";

import { loginHandler, profileHandler } from "../controllers/authControlller/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
const router = Router()

router.post('/login', loginHandler)

router.get("/users", requireAuth, AllUsers)
router.post("/users", requireAuth, CreateUser)
router.put("/users/:id", requireAuth, UpdateUser)
router.delete("/users/:id", requireAuth, DeleteUser)
router.get("/users/:id", requireAuth, GetUser)

export default router; 