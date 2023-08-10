require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// middlewares
app.use(
  cors({
    credentials: true,
  })
);
app.use(express.json());
