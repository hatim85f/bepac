const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// app.use("/auth", require("./routes/auth"));
app.use("/api/test", require("./routes/api/test"));
app.use("/api/registeration", require("./routes/api/users"));
app.use("/api/admin_create", require("./routes/api/adminCreate"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/admin", require("./routes/api/admin"));

app.listen(PORT, () => console.log(`Server started on Port ${PORT}`));
