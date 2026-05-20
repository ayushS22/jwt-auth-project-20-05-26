require("dotenv").config();

const express = require("express");

const cors = require("cors");

const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

const app = express();

// Connect Database

connectDB();

// Middleware

app.use(express.json());

// CORS Configuration

app.use(
  cors({
    origin: "https://jwt-auth-project-20-05-26-uqdq.vercel.app/",
    credentials: true,
  })
);

// Routes

app.use("/api/auth", authRoutes);

// Test Route

app.get("/", (req, res) => {
  res.send("API Running");
});

// Server

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});