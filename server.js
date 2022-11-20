const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.use(cors());
// app.use("/auth", require("./routes/auth"));
app.use("/registeration", require("./routes/users"));
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
