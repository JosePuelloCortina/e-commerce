import { DataSource } from "typeorm";
import { User } from "./entities/users/User";
import { Role } from "./entities/users/Role";
import { Profile } from "./entities/users/Profile";
import { Address } from "./entities/users/Address";
import { Product } from "./entities/products/Product";
import { Order } from "./entities/orders/Order";
import { Payment } from "./entities/payments/Payment";
import { Category } from "./entities/products/Category";
import { ProductDetail } from "./entities/products/ProductDetail";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "toor",
    database: "ecommerce",
    synchronize: true,
    logging: true,
    entities: [
        User,
        Role,
        Profile,
        Address,
        Product,
        Order,
        Payment,
        Category,
        ProductDetail
    ],
    // subscribers: [],
    // migrations: [/*...*/],
    // migrationsTableName: "custom_migration_table",
})