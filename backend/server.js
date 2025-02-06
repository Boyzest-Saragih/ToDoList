const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todosDB",{
    useNewUrlParser:true,
    useUnifiedTopology : true
})

const taskSchema = new mongoose.Schema({
    title:String,
    completed:Boolean
})

const Task = mongoose.model("Task",taskSchema)

//READ
app.get("/", async (req,res)=>{
    const task = await Task.find()
    res.status(200).json(task)
})

// CREATE
app.post("/", async (req,res)=>{
    const {title} = req.body
    const newTask = new Task({title, completed:false})
    await newTask.save()
    res.status(200).json(newTask)
})

// UPDATE
app.put("/:id", async (req,res)=>{
    const {id} = req.params
    const {title} = req.body
    const updateTask = await Task.findByIdAndUpdate(id, {title}, {new:true})
    res.json(updateTask)
})

app.put("/:id/toggle", async (req,res)=>{
    const {id} = req.params
    const task = await Task.findById(id)
    const updateTask = await Task.findByIdAndUpdate(id, {completed: !task.completed}, {new:true})
    res.json(updateTask)
})

// DELETE
app.delete("/:id/delete", async (req,res)=>{
    const {id} = req.params
    await Task.findByIdAndDelete(id)
    res.json({message:"Task DELETED"})
})

const PORT = 2005
app.listen(PORT,()=>console.log("Server running on http://localhost:"+PORT))