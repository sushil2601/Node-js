const res = require('express/lib/response')
const Task = require('../models/task')
const taskCltr = {}

taskCltr.list = (req,res) =>{
    Task.find()
        .then((tasks)=>{
            res.json(tasks)
        })
        .catch((err)=>{
            res.json(err)
        })
}

taskCltr.create = (req,res) =>{
    const body = req.body
    const task = new Task(body)
    task.save()
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
}

taskCltr.show = (req,res) =>{
    const id = req.params.id
    Task.findById(id)
        .then((task)=>{
            res.json(task)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = taskCltr