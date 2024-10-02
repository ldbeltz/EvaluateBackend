import express from "express";
import adminRoutes from "./routes/adminRoutes";
import userRoutes from  "./routes/usuarioRoutes";

async function start() {
  try {
    const app = express();
    const port = 3000;
    //Routes
    app.use(express.json())
    app.use("/api/login", userRoutes);
    app.use("/api/admin", adminRoutes);
    

    //Start server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
