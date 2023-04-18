import { Router } from "express";

import { allUsers } from "../controllers/userController/AllUsers";
import { createUser } from "../controllers/userController/CreateUser";
import { updateUser } from "../controllers/userController/UpdateUser";
import { deleteUser } from "../controllers/userController/DeleteUser";
import { getUser } from "../controllers/userController/GetUser";

import { loginHandler, profileHandler } from "../controllers/authControlller/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
import { allProducts } from "../controllers/producttController/AllProducts";
import { getProduct } from "../controllers/producttController/GetProduct";
import { createProduct } from "../controllers/producttController/CreateProduct";
import { updateProduct } from "../controllers/producttController/UpdateProduct";
const router = Router()

router.post('/login', loginHandler)

// Rutas users
router.get("/users", requireAuth, allUsers)
router.post("/users", requireAuth, createUser)
router.put("/users/:id", requireAuth, updateUser)
router.delete("/users/:id", requireAuth, deleteUser)
router.get("/users/:id", requireAuth, getUser)

//Rutas products
router.get("/products", requireAuth, allProducts)
router.get("/products/:id", requireAuth, getProduct)
router.post("/products", requireAuth, createProduct) 
router.put("/products/:id", requireAuth, updateProduct)
export default router; 