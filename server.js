const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const port = 3000;

app.use("/user", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
