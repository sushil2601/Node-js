const express = require('express')
const router = express.Router()
const taskCltr = require('../app/controllers/tasksCltr')
const categoriesCltr = require('../app/controllers/categoriesCltr')

router.get('/api/tasks',taskCltr.list)
router.post('/api/tasks',taskCltr.create)
router.get('/api/tasks/:id',taskCltr.show)

router.get('/api/categories',categoriesCltr.list)
router.post('/api/categories',categoriesCltr.create)
router.get('/api/categories/:id',categoriesCltr.show)
module.exports = router