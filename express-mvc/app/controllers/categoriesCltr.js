const res = require('express/lib/response')
const Category = require('../models/category')
const categoriesCltr = {}

categoriesCltr.list = (req,res) => {
    Category.find()
        .then((categories)=>{
            res.json(categories)
        })
        .catch((err)=>{
            res.json(err)
        })
}

categoriesCltr.create = (req,res) => {
    const body = req.body
    const category = new Category(body)
    category.save()
        .then((category)=>{
            res.json(category)
        })
        .catch((err)=>{
            res.json(err)
        })
}

categoriesCltr.show = (req,res) => {
    const id = req.params.id
    Category.findById(id)
        .then((Category)=>{
            res.json(category)
        })
        .catch((err)=>[
            res.json(err)
        ])
}

module.exports = categoriesCltr