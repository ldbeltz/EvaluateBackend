import express from "express";
import adminRoutes from "./routes/adminRoutes";

async function start() {
  try {
    const app = express();
    const port = 3000;
    //Routes
    app.use("/admin", adminRoutes);

    //Start server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

start();
