const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser')
const mongoose = require("mongoose");
const todosRoutes = require("./routes/TodosRoutes");
const usersRoutes = require("./routes/UsersRoutes");
const dotenv = require("dotenv");
const app = express();

dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000", 
    credentials: true, 
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/todos", todosRoutes);
app.use("/users", usersRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
