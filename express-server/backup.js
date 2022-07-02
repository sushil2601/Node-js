const express = require('express')
const app = express()
app.use(express.json())
const port = 3040

const customers = [
    { id: 1, name : 'sushil'},
    { id: 2, name :  'suman'}
]

//RequestHandler
// app.httpMethod(url,callback)

app.get('/',(req,res)=>{
    res.send('welcome to the website')
})

app.get('/customers',(req,res)=>{
    res.json(customers)
})

app.get('/customers/:id',(req,res)=>{
    const id = req.params.id
    const customer = customers.find(customer => GETcustomer.id == id)// find returns object or empty object
    if(customer) {
        res.json(customer)
    }else{
        res.json({})
    }
})

app.post('/customers',(req,res)=>{
    const body = req.body
    // console.log(body)
    res.json(body)
})

app.put('/customers/:id',(req,res)=>{
    const id  = req.params.id
    const body = req.body
    res.send(`put request sent to server to update ${id}`)
})

app.delete('/customers/:id',(req,res)=>{
    const id = req.params.id
    res.send(`delete request sent to server to delete ${id}`)
})

app.listen(port, () =>{
    console.log('server running on port',port)
})