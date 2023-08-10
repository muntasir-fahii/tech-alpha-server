require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// connect to mongoose
mongoose.connect(uri, { useUnifiedTopology: true }).then(() => {
  app.listen(port, () => {
    console.log(`server running on port: ${port}`);
  });
});

// middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to tech alpha server" });
});

// route
app.use("/api/products", productRoutes);
