const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')
const todosRoutes = require('./routes/TodosRoutes');
const usersRoutes = require('./routes/UsersRoutes');
const dotenv = require('dotenv')
const session = require('express-session')

dotenv.config()
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors({
  origin:'http://localhost:3000',
  credentials:true
}));

app.use(session({
  secret : process.env.SESSION_SECRET,    
  resave:false,
  saveUninitialized:false,
  store: MongoStore.create({mongoUrl:process.env.MONGO_URL}),
  cookie:{secure:false,httpOnly:true,maxAge:1000*60*60*24}

}))

app.use('/todos', todosRoutes);
app.use('/users', usersRoutes);


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));