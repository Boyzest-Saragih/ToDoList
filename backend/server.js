const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const todosRoutes = require("./routes/TodosRoutes");
const usersRoutes = require("./routes/UsersRoutes");
const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));


app.use("/todos", todosRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
