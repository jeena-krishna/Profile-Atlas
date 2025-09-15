const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const connectDB = require("./db/dbConnection");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

connectDB();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/profiles", require("./Routes/serverRoutes"));

app.listen(PORT, () => {
  console.log(`Port listening at ${PORT}`);
});
