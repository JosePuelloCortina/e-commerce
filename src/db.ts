import { DataSource } from "typeorm";
import { User } from "./entities/User";
import { Role } from "./entities/Role";
import { Profile } from "./entities/Profile";
import { Address } from "./entities/Address";
import { Product } from "./entities/Product";

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