import { DataSource } from "typeorm";
import { User } from "./entities/users/User";
import { Role } from "./entities/users/Role";
import { Profile } from "./entities/users/Profile";
import { Address } from "./entities/users/Address";
import { Product } from "./entities/products/Product";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "toor",
    database: "ecommerce",
    synchronize: true,
    logging: true,
    entities: [User, Role, Profile, Address, Product],
    // subscribers: [],
    // migrations: [/*...*/],
    // migrationsTableName: "custom_migration_table",
})