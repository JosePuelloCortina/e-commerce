import { Router } from "express";

import { allUsers } from "../controllers/userController/AllUsers";
import { createUser } from "../controllers/userController/CreateUser";
import { updateUser } from "../controllers/userController/UpdateUser";
import { deleteUser } from "../controllers/userController/DeleteUser";
import { getUser } from "../controllers/userController/GetUser";
import { getUserByName } from "../controllers/userController/getUserByName";

import { loginHandler, profileHandler } from "../controllers/authControlller/auth.controller";
import { requireAuth } from "../middlewares/requireAuth";
import { allProducts } from "../controllers/productController/AllProducts";
import { getProduct } from "../controllers/productController/GetProduct";
import { createProduct } from "../controllers/productController/CreateProduct";
import { updateProduct } from "../controllers/productController/UpdateProduct";
import { deleteProduct } from "../controllers/productController/DeleteProduct";
import { getProductByName } from "../controllers/productController/getProductByName";
import { createOrder } from "../controllers/OrderController/CreateOrder";
import { allOrders } from "../controllers/OrderController/AllOrders";
import { getOrderByNumber } from "../controllers/OrderController/getOrderByNumber";
import { deleteOrder } from "../controllers/OrderController/DeleteOrder";
import { updateOrder } from "../controllers/OrderController/UpdateOrder";
const router = Router()

router.post('/login', loginHandler)

// Rutas users
router.get("/users", requireAuth, allUsers)
router.get("/users/search", requireAuth, getUserByName)
router.get("/users/:id", requireAuth, getUser)
router.post("/users/register", createUser) 
router.put("/users/:id", requireAuth, updateUser)
router.delete("/users/:id", requireAuth, deleteUser)

//Rutas products
router.get("/products/", allProducts)
router.get("/products/search", requireAuth, getProductByName)
router.get("/products/:id", requireAuth, getProduct)
router.post("/products/:userId", requireAuth, createProduct) 
router.put("/products/:id", requireAuth, updateProduct)
router.delete("/products/:id", requireAuth, deleteProduct)

//Rutas orders
router.get("/orders", requireAuth, allOrders)
router.get("/orders/:orderNumber", requireAuth, getOrderByNumber)
router.post("/orders/:userId", requireAuth, createOrder)
router.delete("/orders/:orderNumber", requireAuth, deleteOrder)
router.put("/orders/:orderNumber", requireAuth, updateOrder)

export default router; 