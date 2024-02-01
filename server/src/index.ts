import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";
import { initializeRole } from "./controllers/initializers/Role.controller";
import { userInitialize } from "./controllers/initializers/UserInitializer";

async function main(){
   try {
    await AppDataSource.initialize()
    console.log("Database is connected")
    await initializeRole();
    console.log("Roles are created")
    await userInitialize();
    console.log("Users are created")
    app.listen(3000)
    console.log("server listening on port", 3000)
   } catch (error) {
    console.error(error)
   }
}

main()