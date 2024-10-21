import express from "express";
import adminRoutes from "./routes/adminRoutes";
import "reflect-metadata";
import userRoutes from  "./routes/usuarioRoutes";
import loginRoutes from "./routes/loginRoutes"; 
import { appDataSource } from "./data-source";


async function start() {
  appDataSource.initialize();
  try {
    const app = express();
    const PORT = 3000;
    //Routes
    app.use(express.json());
    app.use("/api/login", loginRoutes);
    app.use("/api/admin", adminRoutes);
    app.use("/api/usuarios", userRoutes);

    //Start server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
