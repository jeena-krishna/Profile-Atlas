require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/dbConnection");

const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  credentials: true,
};

connectDB();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/profiles", require("./Routes/serverRoutes"));

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
